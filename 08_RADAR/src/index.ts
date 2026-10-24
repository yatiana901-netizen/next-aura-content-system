import { SOURCES, DEFAULT_KEYWORDS, type RadarSource } from "./sources";

interface Env {
  DB: D1Database;
  AI: Ai;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  ADMIN_KEY?: string;
  AI_MODEL?: string;
  ALERT_SCORE?: string;
  MAX_ARTICLES_PER_SOURCE?: string;
  FRESH_HOURS?: string;
}

type Candidate = {
  source: RadarSource;
  url: string;
  anchorText: string;
};

type Article = {
  title: string;
  description: string;
  text: string;
  publishedAt?: string;
};

type Score = {
  score: number;
  fit: number;
  visual: number;
  hiddenAngleStrength: number;
  urgency: "POST NOW" | "TODAY" | "CAN WAIT" | "SKIP";
  whyItMatters: string;
  hiddenAngle: string;
  germanHook: string;
};

class LinkCollector {
  links: Array<{ href: string; text: string }> = [];
  private current: { href: string; text: string } | null = null;

  element(el: Element) {
    const href = el.getAttribute("href");
    if (!href) return;
    this.current = { href, text: "" };
    this.links.push(this.current);
  }

  text(text: Text) {
    if (this.current) this.current.text += text.text;
    if (text.lastInTextNode) this.current = null;
  }
}

class ArticleCollector {
  title = "";
  description = "";
  text = "";
  published: string[] = [];
  jsonLd = "";
  private inTitle = false;
  private inParagraph = false;
  private inJsonLd = false;

  titleElement() { this.inTitle = true; }
  titleText(t: Text) {
    if (this.inTitle) this.title += t.text;
    if (t.lastInTextNode) this.inTitle = false;
  }

  meta(el: Element) {
    const property = (el.getAttribute("property") || "").toLowerCase();
    const name = (el.getAttribute("name") || "").toLowerCase();
    const content = el.getAttribute("content") || "";
    if (!content) return;

    if (property === "og:title" && !this.title.trim()) this.title = content;
    if ((property === "og:description" || name === "description") && !this.description) {
      this.description = content;
    }
    if (
      property === "article:published_time" ||
      property === "article:modified_time" ||
      name === "date" ||
      name === "datepublished"
    ) this.published.push(content);
  }

  time(el: Element) {
    const dt = el.getAttribute("datetime");
    if (dt) this.published.push(dt);
  }

  paragraphElement() { this.inParagraph = true; }
  paragraphText(t: Text) {
    if (this.text.length < 7000 && this.inParagraph) this.text += t.text + " ";
    if (t.lastInTextNode) this.inParagraph = false;
  }

  jsonLdElement(el: Element) {
    const type = (el.getAttribute("type") || "").toLowerCase();
    if (type.includes("ld+json")) this.inJsonLd = true;
  }

  jsonLdText(t: Text) {
    if (this.inJsonLd && this.jsonLd.length < 20000) this.jsonLd += t.text;
    if (t.lastInTextNode) this.inJsonLd = false;
  }
}

function clean(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

function normalizeTitle(s: string) {
  return clean(s.toLowerCase())
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

async function sha256(input: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function resolveUrl(base: string, href: string) {
  try {
    const u = new URL(href, base);
    u.hash = "";
    return u.toString();
  } catch {
    return null;
  }
}

function candidateAllowed(source: RadarSource, url: string, text: string) {
  const hay = (url + " " + text).toLowerCase();
  if (!source.include.some(x => hay.includes(x.toLowerCase()))) return false;
  if (source.exclude?.some(x => hay.includes(x.toLowerCase()))) return false;
  return true;
}

function keywordSignal(text: string) {
  const hay = text.toLowerCase();
  return DEFAULT_KEYWORDS.filter(k => hay.includes(k)).length;
}

async function fetchCandidates(source: RadarSource, limit: number): Promise<Candidate[]> {
  const res = await fetch(source.url, {
    headers: {
      "user-agent": "NextAuraRadar/0.1 (+research monitor)",
      "accept": "text/html,application/xhtml+xml"
    },
    cf: { cacheTtl: 60, cacheEverything: false }
  });
  if (!res.ok) throw new Error(`${source.name}: HTTP ${res.status}`);

  const collector = new LinkCollector();
  await new HTMLRewriter()
    .on("a", collector)
    .transform(res)
    .arrayBuffer();

  const seen = new Set<string>();
  const ranked: Candidate[] = [];

  for (const l of collector.links) {
    const url = resolveUrl(source.url, l.href);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    const text = clean(l.text);
    if (!candidateAllowed(source, url, text)) continue;
    ranked.push({ source, url, anchorText: text });
  }

  ranked.sort((a, b) => keywordSignal(b.anchorText + " " + b.url) - keywordSignal(a.anchorText + " " + a.url));
  return ranked.slice(0, limit);
}

function extractJsonLdDates(raw: string): string[] {
  const out: string[] = [];
  if (!raw) return out;
  const re = /"(datePublished|dateModified)"\s*:\s*"([^"]+)"/gi;
  for (const m of raw.matchAll(re)) out.push(m[2]);
  return out;
}

function parseDate(values: string[]): string | undefined {
  for (const v of values) {
    const d = new Date(v);
    if (!Number.isNaN(d.getTime())) return d.toISOString();
  }
  return undefined;
}

async function fetchArticle(url: string): Promise<Article> {
  const res = await fetch(url, {
    headers: {
      "user-agent": "NextAuraRadar/0.1 (+research monitor)",
      "accept": "text/html,application/xhtml+xml"
    },
    redirect: "follow",
    cf: { cacheTtl: 60, cacheEverything: false }
  });
  if (!res.ok) throw new Error(`Article HTTP ${res.status}: ${url}`);

  const c = new ArticleCollector();
  await new HTMLRewriter()
    .on("title", { element: () => c.titleElement(), text: (t) => c.titleText(t) })
    .on("meta", { element: (el) => c.meta(el) })
    .on("time", { element: (el) => c.time(el) })
    .on("p", { element: () => c.paragraphElement(), text: (t) => c.paragraphText(t) })
    .on('script[type="application/ld+json"]', { element: (el) => c.jsonLdElement(el), text: (t) => c.jsonLdText(t) })
    .transform(res)
    .arrayBuffer();

  const publishedAt = parseDate([...c.published, ...extractJsonLdDates(c.jsonLd)]);
  return {
    title: clean(c.title),
    description: clean(c.description),
    text: clean(c.text).slice(0, 6500),
    publishedAt
  };
}

function isFresh(publishedAt: string | undefined, freshHours: number) {
  if (!publishedAt) return null;
  const ageMs = Date.now() - new Date(publishedAt).getTime();
  return ageMs >= -2 * 3600_000 && ageMs <= freshHours * 3600_000;
}

function extractModelText(resp: unknown): string {
  if (typeof resp === "string") return resp;
  if (resp && typeof resp === "object") {
    const anyResp = resp as Record<string, unknown>;
    if (typeof anyResp.response === "string") return anyResp.response;
    if (typeof anyResp.result === "string") return anyResp.result;
  }
  return JSON.stringify(resp);
}

function parseJsonLoose(raw: string): any {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const text = fenced ? fenced[1] : raw;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("AI did not return JSON");
  return JSON.parse(text.slice(start, end + 1));
}

async function scoreWithAI(env: Env, candidate: Candidate, article: Article): Promise<Score> {
  const model = env.AI_MODEL || "@cf/meta/llama-3.1-8b-instruct";
  const prompt = `
You are the editorial radar for Next Aura, a German-language TikTok brand.
Niche: Automotive Tech + Mobility Engineering + Luxury Machines.

We only alert on genuinely strong early-mover video opportunities.
Score this item conservatively.

SOURCE: ${candidate.source.name}
CATEGORY: ${candidate.source.category}
TITLE: ${article.title || candidate.anchorText}
PUBLISHED: ${article.publishedAt || "unknown; URL was newly discovered by the monitor"}
DESCRIPTION: ${article.description}
ARTICLE EXCERPT:
${article.text}

Criteria:
- niche fit
- novelty / technical significance
- strong visual potential
- hidden engineering angle
- German-speaking audience relevance
- urgency for an early-mover TikTok

Do NOT reward generic corporate news, finance, partnerships, sports results, lifestyle, or announcements with no technical story.
Do NOT invent facts.
Return ONLY JSON:
{
  "score": 0-100,
  "fit": 0-100,
  "visual": 0-100,
  "hiddenAngleStrength": 0-100,
  "urgency": "POST NOW" | "TODAY" | "CAN WAIT" | "SKIP",
  "whyItMatters": "max 180 chars",
  "hiddenAngle": "max 180 chars",
  "germanHook": "one natural German hook, max 150 chars"
}
`;

  const resp = await env.AI.run(model as keyof AiModels, {
    messages: [
      { role: "system", content: "Be strict, factual and concise. Output valid JSON only." },
      { role: "user", content: prompt }
    ],
    max_tokens: 450
  } as any);

  const p = parseJsonLoose(extractModelText(resp));
  const num = (x: any) => Math.max(0, Math.min(100, Number(x) || 0));

  return {
    score: num(p.score),
    fit: num(p.fit),
    visual: num(p.visual),
    hiddenAngleStrength: num(p.hiddenAngleStrength),
    urgency: ["POST NOW", "TODAY", "CAN WAIT", "SKIP"].includes(p.urgency) ? p.urgency : "SKIP",
    whyItMatters: clean(String(p.whyItMatters || "")),
    hiddenAngle: clean(String(p.hiddenAngle || "")),
    germanHook: clean(String(p.germanHook || ""))
  };
}

async function sendTelegram(env: Env, candidate: Candidate, article: Article, score: Score) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    throw new Error("Telegram secrets are missing");
  }

  const when = article.publishedAt
    ? new Date(article.publishedAt).toISOString().replace("T", " ").slice(0, 16) + " UTC"
    : "newly discovered; publication date not detected";

  const text = [
    "🚨 NEXT AURA ALERT",
    "",
    `[${score.urgency}]  Score: ${score.score}/100`,
    `${candidate.source.name}`,
    "",
    `NEW: ${article.title || candidate.anchorText}`,
    `Published: ${when}`,
    "",
    `Why: ${score.whyItMatters}`,
    `Hidden angle: ${score.hiddenAngle}`,
    "",
    `Hook DE: ${score.germanHook}`,
    "",
    `Source: ${candidate.url}`
  ].join("\n");

  const endpoint = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
      disable_web_page_preview: false
    })
  });
  if (!res.ok) throw new Error(`Telegram HTTP ${res.status}: ${await res.text()}`);
}

async function getSetting(env: Env, key: string) {
  const row = await env.DB.prepare("SELECT value FROM settings WHERE key=?").bind(key).first<{ value: string }>();
  return row?.value;
}

async function setSetting(env: Env, key: string, value: string) {
  const now = new Date().toISOString();
  await env.DB.prepare(
    "INSERT INTO settings(key,value,updated_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at"
  ).bind(key, value, now).run();
}

async function alreadySeen(env: Env, url: string, fingerprint: string) {
  const row = await env.DB.prepare("SELECT url FROM items WHERE url=? OR fingerprint=? LIMIT 1")
    .bind(url, fingerprint).first();
  return !!row;
}

async function storeItem(env: Env, candidate: Candidate, article: Article, fingerprint: string, score?: Score) {
  const now = new Date().toISOString();
  await env.DB.prepare(
    `INSERT OR IGNORE INTO items
    (url,fingerprint,source_id,source_name,category,title,description,published_at,discovered_at,score,urgency,hidden_angle,why_it_matters,german_hook)
    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  ).bind(
    candidate.url,
    fingerprint,
    candidate.source.id,
    candidate.source.name,
    candidate.source.category,
    article.title || candidate.anchorText || candidate.url,
    article.description || "",
    article.publishedAt || null,
    now,
    score?.score ?? null,
    score?.urgency ?? null,
    score?.hiddenAngle ?? null,
    score?.whyItMatters ?? null,
    score?.germanHook ?? null
  ).run();
}

async function markAlerted(env: Env, url: string) {
  await env.DB.prepare("UPDATE items SET alerted_at=? WHERE url=?")
    .bind(new Date().toISOString(), url).run();
}

async function runRadar(env: Env, mode: "bootstrap" | "normal") {
  const started = new Date().toISOString();
  const run = await env.DB.prepare("INSERT INTO runs(started_at,mode) VALUES(?,?)")
    .bind(started, mode).run();
  const runId = run.meta.last_row_id;

  let sourcesChecked = 0;
  let candidatesFound = 0;
  let newItems = 0;
  let alertsSent = 0;
  let errors = 0;

  const maxPerSource = Number(env.MAX_ARTICLES_PER_SOURCE || "6");
  const freshHours = Number(env.FRESH_HOURS || "30");
  const alertScore = Number(env.ALERT_SCORE || "82");
  const bootstrapped = (await getSetting(env, "bootstrap_done")) === "1";

  const effectiveMode: "bootstrap" | "normal" = !bootstrapped ? "bootstrap" : mode;

  for (const source of SOURCES) {
    try {
      sourcesChecked++;
      const candidates = await fetchCandidates(source, maxPerSource);
      candidatesFound += candidates.length;

      for (const candidate of candidates) {
        try {
          const roughFp = await sha256(source.id + "|" + normalizeTitle(candidate.anchorText || candidate.url));
          if (await alreadySeen(env, candidate.url, roughFp)) continue;

          const article = await fetchArticle(candidate.url);
          const fingerprint = await sha256(source.id + "|" + normalizeTitle(article.title || candidate.anchorText || candidate.url));
          if (await alreadySeen(env, candidate.url, fingerprint)) continue;

          newItems++;

          if (effectiveMode === "bootstrap") {
            await storeItem(env, candidate, article, fingerprint);
            continue;
          }

          const fresh = isFresh(article.publishedAt, freshHours);
          if (fresh === false) {
            await storeItem(env, candidate, article, fingerprint);
            continue;
          }

          const score = await scoreWithAI(env, candidate, article);
          await storeItem(env, candidate, article, fingerprint, score);

          const shouldAlert =
            score.score >= alertScore &&
            score.fit >= 75 &&
            score.visual >= 65 &&
            score.hiddenAngleStrength >= 65 &&
            score.urgency !== "SKIP";

          if (shouldAlert) {
            await sendTelegram(env, candidate, article, score);
            await markAlerted(env, candidate.url);
            alertsSent++;
          }
        } catch (err) {
          errors++;
          console.error("candidate_error", source.id, candidate.url, err);
        }
      }
    } catch (err) {
      errors++;
      console.error("source_error", source.id, err);
    }
  }

  if (effectiveMode === "bootstrap") {
    await setSetting(env, "bootstrap_done", "1");
  }

  const finished = new Date().toISOString();
  await env.DB.prepare(
    `UPDATE runs SET finished_at=?,sources_checked=?,candidates_found=?,new_items=?,alerts_sent=?,errors=?,note=? WHERE id=?`
  ).bind(
    finished,
    sourcesChecked,
    candidatesFound,
    newItems,
    alertsSent,
    errors,
    effectiveMode === "bootstrap" ? "Bootstrap completed; no alerts sent." : "Normal radar run.",
    runId
  ).run();

  return { mode: effectiveMode, sourcesChecked, candidatesFound, newItems, alertsSent, errors, started, finished };
}

function authorized(req: Request, env: Env) {
  if (!env.ADMIN_KEY) return false;
  const u = new URL(req.url);
  const key = req.headers.get("x-admin-key") || u.searchParams.get("key");
  return key === env.ADMIN_KEY;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "next-aura-radar",
        bootstrapped: (await getSetting(env, "bootstrap_done")) === "1",
        time: new Date().toISOString()
      });
    }

    if (url.pathname === "/run" || url.pathname === "/bootstrap") {
      if (!authorized(req, env)) return new Response("Unauthorized", { status: 401 });
      const result = await runRadar(env, url.pathname === "/bootstrap" ? "bootstrap" : "normal");
      return Response.json(result);
    }

    if (url.pathname === "/recent") {
      if (!authorized(req, env)) return new Response("Unauthorized", { status: 401 });
      const rows = await env.DB.prepare(
        "SELECT source_name,title,url,published_at,discovered_at,score,urgency,alerted_at FROM items ORDER BY discovered_at DESC LIMIT 25"
      ).all();
      return Response.json(rows.results);
    }

    return new Response(
      "Next Aura Radar\n/health\n/run?key=...\n/bootstrap?key=...\n/recent?key=...",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  },

  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(runRadar(env, "normal"));
  }
};
