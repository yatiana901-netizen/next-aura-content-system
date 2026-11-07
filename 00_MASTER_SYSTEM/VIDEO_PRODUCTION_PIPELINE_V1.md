# NEXT AURA — UNIVERSAL VIDEO PRODUCTION PIPELINE v1.0
Approved direction: 2026-11-03. Applies to EVERY German Next Aura Short, including car news, engineering, suppliers, motorsport and future tech.
This is the authoritative order of operations. Detailed precedent lives in montage-1/MASTER_PROMPT.md, montage-1/QA_AND_MEDIA_RULES.md, montage-1/PUBLISHING_STANDARD.md, and montage-1/TIKTOK_AND_YOUTUBE_SHORTS_WORKFLOW.md.
MISSION: Verified fresh idea → distinct real visuals → German VO → exact storyboard → tracked cinematic 9:16 edit → 3-layer audio → independent QA → TikTok + YouTube packages → analytics learning.
NO MUSIC; no fake rights clearance, no claiming a video/audio was inspected when it was not.

## Stage 0 — Topic and footage feasibility
- Find genuinely recent, appealing world trends for a German-speaking audience; prioritize fresh, verified facts and a hidden technical angle.
- Separate event date, article date, reposted footage and scheduled/unreleased features.
- Before committing: identify at least several DISTINCT strong visual moments from real footage. Three sites reusing one OEM video count as one visual source, not three. Verify dates and official sources.
- If footage is sparse, make a powerful shorter Short instead of filling 60 seconds. If visuals cannot tell the story, change topic.
- Keep original source links, usage permissions/license evidence, download notes and model identification. Public availability is NOT reuse permission.
GATE 0: promising hook, factual basis, rights status documented, footage really feasible.

## Stage 1 — Verified story and script
- Record claim ledger for exact model, date, spec, engine, speed, price, Nm, horsepower and future plans, including URLs. Label CURRENT, PROTOTYPE, CONCEPT, PLANNED or UNCONFIRMED.
- NEVER conflate BMW ALPINA Nardo production-prototype with one-of-one Vision BMW ALPINA design study, or 2025 speed record with unknown speed of later crash.
- German spoken script with hook within first 2–3s, very strong first 8s, reveal, engineering explanation, surprise and payoff. Natural short sentences. Avoid slow generic intro or forced Follow.
- Duration depends on interest and footage, often 25–45s, not forced to one minute. Presenter OFF unless user approves.
GATE 1: every factual sentence verified, strong original angle and clear takeaway.

## Stage 2 — ElevenLabs voice
- Choose a natural consistent German-speaking narrator/voice for the series (current user preference: Jan ElevenLabs v4 where provided). Numeric pronunciation and technical terms must sound natural.
- Compare received voice takes by ACTUAL listening, pronunciation, pauses, pacing, energy, distortion and speech clarity; never choose solely by MP3 metadata.
- Trim accidental silences without destroying emphasis. Record original duration, clean version duration, and real measured word onsets for meaningful numbers and reveals.
- Maintain voice identity across Shorts while adapting energy to the subject: racing more punchy, luxury Vision more composed.
GATE 2: chosen voice actually audited and approved, no broken pacing, duration documented.

## Stage 3 — Ingest / footage audit / two-video split
- Inspect each video AND its source audio. Inventory duration, FPS, aspect, resolution, recorded camera motion, audio, licensing, duplicates and best continuous-shot candidates.
- Detect identical files and social recuts of the same actual shots. Reject blurry, repetitive, filler, weak angles and music-contaminated source sections.
- Exact source IN/OUT must belong to ONE uninterrupted source scene, no hidden neighboring shot or transition. Frame-review boundaries before extraction.
- When user requests two Shorts from same subject: TWO narrative angles and TWO distinct pools of real SHOTS. No reusing the same source excerpt by changing crop; only user-approved exceptions. For BMW ALPINA: Nardo prototype vs Vision design study.
- Store large raw assets in private Drive/local project, not public GitHub. GitHub stores safe text metadata/references only.
GATE 3: inventoried footage, no duplicate visual stories, separate source pool and rights ledger.

## Stage 4 — Word-aligned shot plan
- Make shotlist with source file, source in/out, final timeline in/out, shot purpose, corresponding spoken German phrase, tracking coordinates/keyframes, transition, SFX and source-audio action.
- Make VO cue list from waveform AND real listening: spoken word onset/offset, matching card in/out and exact SFX transient.
- Determine composition and story beats by VO semantics, not by random montage. Use best hero/motion/detail scenes and compact payoff, no visual filler.
GATE 4: exact source-boundary and spoken-word references; no fake perfect sync claims before export.

## Stage 5 — 9:16 cinematic edit with proper camera follow
- Standard master target: 1080x1920, 30fps vertical, H.264/AAC, no bars, no platform watermark.
- ALL useful 16:9 moving-car shots get intelligent tracking/camera follow when needed: animated crop X/Y/keyframes tied to actual car position, natural ease, leading room towards direction of travel, stable horizon.
- Inspect beginning, midpoint, end and fast changes. Never rely on fixed center crop when car moves out of frame. Never cut off nose/headlamps/subject unnecessarily. Avoid extreme digital zoom and abrupt snap-back.

### New reusable editing improvement — 16:9 → 9:16: adaptive fit with blurred background (user-approved, 2026-11-07)
- **Do not force a full-screen center crop** when important real visual information would be cut off: a crash, whole vehicle/aircraft/vessel, speedometer, safety margin, multi-object interaction, onboard footage or technical context.
- **Use FIT + BLURRED BACKGROUND when needed**: place the complete native-aspect source frame centered and sized to fit the 1080×1920 canvas; duplicate the SAME source behind, scale the background layer to fill the portrait canvas, apply a soft tasteful blur (and optional slight darkening) so the foreground remains clearly dominant. No black bars, unrelated stock backgrounds, excessive glow or obviously artificial decorations.
- **Choose per shot, not globally**: (a) intelligent camera-follow crop when subject tracking preserves the story and fills frame; (b) fit + blurred background when cropping loses essential context; (c) native full-screen portrait for valid vertical media. Smooth changes in composition when adjacent shots mix methods.
- **Per-shot QA**: confirm entire subject, exhaust flame, direction of travel, impact moment, cockpit instrument, numeric proof and meaningful secondary subjects remain visible; verify foreground legibility on small phones and no distracting oversized/doubled background subject.
- **Evidence standard**: no claim the technique was applied, watched or quality-checked on a specific clip until the actual project/export is reviewed. This is a portable workflow preference, not a completed edit.


### Permanent editing improvement — Original multi-panel footage → re-layout only (user-approved, 2026-11-07)
**Rule: ORIGINAL CONTENT — NEW LAYOUT ONLY.** When a single original clip includes multiple synchronized viewports (e.g. forward road POV, in-car driver camera, speed graph, timer, throttle/brake, temperature/humidity and Racelogic instrument), convert to a unified mobile-readable 9:16 composition by **isolating/reframing each *existing* panel and repositioning/resizing it**, not by inventing a new instrument/UI or modifying the evidence.

1. Identify the exact bounds of each original panel in the source 16:9 frame. Isolate each by source cropping, and assemble all selected panels on one portrait canvas; use the road/action camera as the primary large panel and put supporting cameras/instruments around it according to legibility.
2. **Keep each panel's original actual pixels/content** as far as practical: no remade speedometer, no new charts, no stylized reconstructed HUD, no logos/icons/labels/extra numbers not present in the source, no AI-generated substitute frames, no re-coloring or changing instrument graphics. Retain the source numerical precision (e.g. `43.80` remains `43.80`, not rounded/retyped as `43.8`).
3. **Maintain frame-accurate synchronization**: every panel must show the *same original source timestamp*. Never slip the driver's reaction, speed measurement, steering/throttle, visual road event or telemetry relative to one another. A cross-panel re-layout is not a new sequence of unrelated moments.
4. Preserve original scale/aspect without stretching; ensure each panel remains mobile-readable, avoid cropping essential readings or the road/subject. If all panels cannot be made legible, **prioritize essential original panels** and omit nonessential ones rather than fabricating, enlarging unreadable numbers, or overloading the composition. Clean spacing may come from a neutral background only when needed; no additional decorative content.
5. When the original panel is partially obscured by a baked-in subscribe banner, cursor, watermarked overlay, or source UI, do not invent missing pixels/data; retain or select a different clean source segment, or crop only when the important original information remains honest and intact.
6. This is a **special preserve-only multi-panel mode**, taking precedence over general optional overlay/SFX/motion-graphics enhancements for the multi-panel shot, unless the user explicitly requests modifications. Audio remains subject to the separate permanent no-music rule.
7. QA: inspect beginning/middle/end and changes frame-by-frame, compare every displayed figure and panel alignment with original at corresponding timestamps; verify 9:16 readability and independent no-music soundtrack audit. Mark uninspected frames/audio as pending, never claim a finished preserved-layout edit unless the actual exported MP4 has been reviewed.

This applies across automotive record attempts, race onboards, crash footage with multiple cameras, aircraft cockpit + outside cameras, marine bridge footage and instrumented mechanical tests; it is a **reusable technique only**, not a claim that an existing video has been processed.

- Select best distinctive hero angles, close-up wheels/exhaust/engine/interior, motion and track footage. Natural premium contrast, correct colors/clarity, no AI-looking fake hardware.
- Mirror only selectively and never reverse badges, writing, real geometry/directional facts. Mirror does not remove copyright.
GATE 5: full visual review of tracking and natural motion, no low-value scene.

## Stage 6 — Transitions, SFX hits and overlays
- Hard cuts primary. Add selective whip, speed ramp, clean motion blur, push-in, impact cut or short transition ONLY when justified by matching movement/reveal. Do not force transition at every clip.
- Dynamic high-speed test: energetic rhythm, purposeful speed ramp and tighter sound hits. Luxury Vision: smooth premium movement, fewer aggressive cuts. Each story gets a distinctive edit identity.
- Effects: subtle color/sharpness, matched motion, restrained motion graphics; no distracting screen shakes, artificial overlays, fake light or giant neon.
- Small Info Cards for important verified numbers only, mobile readable, no permanent giant text; ease about 0.12–0.30s, exit before shot changes; mark future specs as PLANNED.
- Subtitle mode is per-video USER choice: generally off by default, unless explicitly requested. If user enables the previously requested clean style: Montserrat ExtraBold, white #FFFFFF, font 56/1080x1920, centered at X540/Y1280, 3px black outline, no background. Do not alter timing/text for style-only change.
GATE 6: every effect earns its place; wording, images and SFX start together at key spoken words.

## Stage 7 — Three-layer premium audio mix (NO MUSIC)
1) VO: first priority; clear, consistent, naturally compressed/cleaned as needed.
2) Original footage: useful genuine engine revs, exhaust, wheel/tyre, wind, mechanical clicks, track ambience. DO NOT automatically mute them. First audit audio for baked-in music, external speech, clipping or misleading provenance; mute or separate reliably if unsuitable.
3) Added SFX: tasteful whooshes, impacts, rises, mechanical details chosen from quality library only. No arbitrary count, weak ding spam or SFX for every cut.
- Mix on SEPARATE tracks where possible with clip-specific gain keyframes, attack/release and small fades. Under German VO, lower engines/original ambience using speech-priority ducking; ~6–12dB attenuation is a STARTING TRIAL, adjust by ear and source dynamics. Briefly release sound in meaningful VO gaps; avoid competing huge SFX + engine hits.
- Match sound perspective (trackside versus interior). Never imply an invented synthetic engine sound is original recording of this exact car.
- Measure actual final integrated loudness and true peak; a tentative editorial target is about -14 to -16 LUFS and ≤ -1 dBTP, not an official platform rule. Preserve dynamics, avoid clipping.
- Listen to VO only, original sound only, SFX only, then whole mix at 1x and risky moments at 0.5x; phone speakers/headphones when available. No music, EVEN embedded in original video.
GATE 7: voice intelligible for EVERY phrase, immersive source audio supporting rather than masking, SFX precise and clean.

## Stage 8 — Actual exported-file QA + licensing
- Watch complete actual MP4, not only thumbnails. Review clip boundaries at frame level, 9:16 tracking, no black frames, bad transitions, reversed text, fake models, unreadable cards, repetition or abrupt fades.
- Listen to final export and verify exact VO word ↔ visual ↔ number card ↔ SFX attack timing at 1x and 0.5x. Source shotlist arithmetic alone is not proof.
- FFprobe/FFmpeg: verify duration/fps/dimensions/codec/audio streams/full decode; meter LUFS, true peak and no audible distortion. Technical success does NOT equal creative QA.
- Prefer separate independent reviewer from editor. Disclose every unverified listening/phone/right check. Publishing is BLOCKED while source reuse rights or key disclosures unresolved.
- State release status: DRAFT / FIRST CUT / REVISION / QA PENDING / READY FOR USER APPROVAL, not FINAL without evidence.
GATE 8: actual manual QA + instrument report + legal review and approval status.

## Stage 9 — Two PLATFORM-SPECIFIC publishing packs
- Original pristine 9:16 MP4 uploaded separately to TikTok and YouTube Shorts, never platform-to-platform ripped copy.
- TikTok: 9:16 attractive authentic cover (ideally 1080x1920), catchy factual German SEO title/caption, EXACTLY FIVE relevant German-market hashtags.
- YouTube Shorts: separately optimized German searchable title, concise description, appropriate hashtags and device/account-compatible cover or selected frame.
- Propose current DATED posting time for each platform aimed at Germany, with accurate corresponding Morocco DST time. Research audience analytics/weekday. Minute precision only if account data support it or clearly identified as a test; NEVER encode a fixed universal upload hour.
- Include media-rights and AI disclosure review, optional good pinned discussion question.
GATE 9: both packs complete, user approved actual posting; do not claim upload unless confirmed.

## Stage 10 — Measure, learn, save reusable improvements
- Track retention first 2–3s and 8s, watch time, completion, shares, comments, saves, follows/subscribers and platform differences (2h/24h/72h/7d when feasible).
- Log tested, genuinely useful improvements directly in master docs in the existing PRIVATE GitHub repository; record speculative ideas as UNTESTED.
- Ask user before major creative strategy pivots, publishing, destructive changes, paid actions or overriding user preference. During active sessions, update GitHub and report exact paths + commit.
- No background/asynchronous editorial promises unless separately scheduled.
GATE 10: experiment insights recorded, no made-up analytics.

## Mandatory deliverables PER VIDEO
- Verified German facts/links + media-rights notes.
- VO/script and true selected take (or written instructions if file processing unavailable).
- Accurate SHOTLIST.csv + VO_CUES.csv + AUDIO_CUES.csv + SFX/card cues.
- Actual finished MP4 only when rendered AND checked; otherwise explicitly labeled PREVIEW/INSTRUCTIONS.
- QA evidence report: actual listening, tracking, sync, measured LUFS/dBTP, rights status, limitations and reviewer.
- TikTok cover + SEO caption + 5 hashtags + research-based date/time GER/MA.
- YouTube Shorts title + description + hashtags + cover/frame guidance + own date/time GER/MA.
- Post-video analytics note and justified reusable GitHub improvement.

## Precedence and limitations
- New video-specific explicit choices override general aesthetic defaults when safe.
- User-approved ABT V10 is benchmark, NOT rigid timing or effect template. Exact VO/footage always dictates pace.
- This document is a mandatory SOP, not proof a live CapCut GUI is connected. The companion small CLI creates a checklist and checks evidence; it does not edit footage or prove rights.


## Permanent NO-MUSIC / NO-MUSICAL-SFX rule (2026-11-03)
**Explicit user instruction, unconditional for all Next Aura media (not just ALPINA): NEVER add music or any sound effect containing music, melodic elements, notes/chords, musical stingers, rhythmic music beds, jingles, tonal risers, or background soundtrack.** Do not use an SFX simply because its file is called whoosh/impact: inspect or reproduce its audio; reject musical effects outright.
- Content MUST be designed as **German VO + independently verified nonmusical SFX + original real-world engine/ambience ONLY if confidently free of embedded music and permissioned**.
- If an original source video has engine mixed with potentially copyrighted music and clean music separation cannot be verified, **MUTE THE ENTIRE ORIGINAL SOURCE AUDIO for that segment**, then optionally add clearly nonmusical, appropriate sound from cleared material. Filtering/band-pass/EQ does not reliably remove music.
- If an SFX file was not independently checked and musical content cannot be ruled out, do **not** include it; prefer fresh non-tonal sound design, verified clean mechanical sound, or NO SFX.
- Clean and rebuild soundtrack from music-free source stems when a prior draft contains uncertain audio. Never claim musical content was removed by reducing gain or spectral filtering alone.
- Document exact audio provenance (VOICE / source-audio allowed or muted / vetted SFX / generated noise), file hashes or evidence when feasible, and report whether true listening validation occurred.
- Preserve a cinematic feel through authentic motors when verified, dynamic level ducking, naturally timed cuts, filtered non-tonal whooshes and short dry impacts, **not musical effects**. If no verified engine track exists, a voice-and-nonmusical-SFX-only mix is preferred.
- Apply this rule **before publication**, including TikTok, YouTube Shorts, covers with sound, ads and exports.
