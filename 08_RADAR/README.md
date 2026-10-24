# Next Aura Radar — Cloudflare V1

A 24/7 early-mover radar for **Next Aura**.

## What V1 does
Every 30 minutes it:
1. checks official/high-quality source pages,
2. extracts likely new releases,
3. deduplicates them in Cloudflare D1,
4. fetches article metadata/body,
5. rejects clearly old items,
6. scores new items with Workers AI,
7. sends a Telegram alert only when the topic crosses a strict threshold.

## Important design choice: bootstrap
The **first run never alerts**.
It seeds the database with current links so the radar does not suddenly send old stories.
After bootstrap, only newly discovered items are candidates for alerts.

## Current source set
- BMW Group PressClub
- Mercedes-Benz Media
- Audi Media Center
- Porsche Newsroom
- Volkswagen Newsroom
- Continental
- ZF
- Bosch Mobility
- Brembo
- Formula 1

We will expand ships/yachts/aviation after V1 is stable.

## Cloudflare services
- Workers — scheduled code
- Cron Trigger — every 30 minutes
- D1 — dedupe/history
- Workers AI — editorial scoring

Cloudflare Cron supports `*/30 * * * *`. D1 and AI are accessed through Worker bindings.

## Deploy — easiest path

### 1. On your PC
Install Node.js 20+ and clone the repo:

```bash
git clone https://github.com/yatiana901-netizen/next-aura-content-system.git
cd next-aura-content-system/08_RADAR
npm install
```

### 2. Log in to Cloudflare
```bash
npx wrangler login
```

### 3. Deploy once
```bash
npm run deploy
```

The Wrangler config uses automatic D1 provisioning, so recent Wrangler versions can create/link the D1 resource when needed.

### 4. Create the database schema
After deployment:
```bash
npm run db:init:remote
```

### 5. Create Telegram bot
In Telegram:
- open **@BotFather**
- run `/newbot`
- copy the bot token
- send at least one message to your new bot

Get your chat ID by opening:
`https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`

Find `message.chat.id`.

### 6. Add Cloudflare secrets
```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
npx wrangler secret put ADMIN_KEY
```

Use a long random value for ADMIN_KEY.

### 7. Bootstrap once
Open:
`https://<your-worker>.workers.dev/bootstrap?key=<ADMIN_KEY>`

Expected result:
- mode: bootstrap
- new items saved
- alertsSent: 0

### 8. Check health
`https://<your-worker>.workers.dev/health`

### 9. Manual test
After bootstrap:
`https://<your-worker>.workers.dev/run?key=<ADMIN_KEY>`

Normally it may send nothing if there is no genuinely new strong story. That is correct.

## Alert logic
Default threshold:
- total score >= 82
- niche fit >= 75
- visual potential >= 65
- hidden-angle strength >= 65
- urgency != SKIP

Tune in `wrangler.jsonc` after observing real results.

## Telegram alert
The alert includes:
- source
- exact new item
- publish time if detected
- score
- why it matters
- hidden angle
- one German hook
- source URL
- urgency: POST NOW / TODAY / CAN WAIT

It deliberately does **not** generate a full script. Bring the topic back to ChatGPT for the full production workflow.

## Useful endpoints
- `/health` — public basic health
- `/bootstrap?key=...` — seed database
- `/run?key=...` — manual run
- `/recent?key=...` — recent detected items

## Security
Never commit:
- Telegram bot token
- chat ID if you consider it sensitive
- ADMIN_KEY
- Cloudflare API credentials

Use Cloudflare secrets.

## V2 after V1 proves stable
- yachts / marine sources
- aviation sources
- Browser Run for JS-heavy sites
- Gmail newsletter ingestion
- cross-source topic clustering
- source-specific parsers
- priority alerts for exact technical keywords
- optional email backup
