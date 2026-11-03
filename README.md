# Next Aura Content System

Private operating system for **Next Aura**.

## Positioning
**Automotive Technology + Mobility Engineering + Luxury Machines**, with a strong German-language audience focus.

Core pillars:
- Automotive / EV / vehicle engineering
- F1 & motorsport engineering
- Suppliers: Bosch, Continental, ZF, Brembo, Mahle, Schaeffler, etc.
- Trucks and commercial vehicles
- Aviation engineering
- Trains / high-speed rail
- Drones / eVTOL
- Ships, mega-ships, superyachts and luxury marine engineering

## Core content rule
**Fresh topic → hidden angle → verified facts → strong German hook → visual story → concise VO → precise shot plan → publish → analyze**

## Repository map
- `00_MASTER_SYSTEM/` — permanent rules and master prompts
- `01_RESEARCH/` — topic ideas, sources, competitors, trends
- `02_SCRIPTS/` — one folder per finished video
- `03_PROMPTS/` — reusable prompts for ChatGPT, Flow AI, CapCut/EditPilot, ElevenLabs, image generation
- `04_BRAND/` — Next Aura brand and presenter identity
- `05_PUBLISHING/` — schedule, captions, hashtags, performance
- `06_IDEAS_BACKLOG/` — future topic pools by category

## Media
Heavy assets such as raw video, voice-over, AI renders and CapCut projects should stay outside GitHub (for example Google Drive). GitHub stores the operating system, research, scripts, prompts, links and decisions.

## Naming
Videos use a numeric prefix:
- `001_KIMM`
- `002_BMW_iX5`
- `003_...`

## Update convention
When a new rule proves useful, update the relevant master file rather than duplicating it in multiple places.

## Continuous-improvement and GitHub capture policy (agreed 2026-11-03)
During active Next Aura work, record worthwhile reusable improvements in this repository without waiting for a separate request each time:
- **Tested / user-approved improvements:** update the appropriate existing master standard, prompt, QA checklist, script, publishing workflow, or template directly. Use clear commits and avoid duplicates.
- **Promising but untested ideas:** document them in the appropriate `06_IDEAS_BACKLOG/` file or a clearly labeled research note, with evidence, assumptions, and what still needs testing. Never present an idea as a proven production rule.
- **New research or trend topics:** preserve dated source links, the factual verification status, and whether sufficient reusable footage exists. Do not imply that editorial media is copyright-free.
- **Ask the user first** for major strategy/policy pivots, destructive edits, publishing or external exposure, paid actions, changes to the channel identity, or anything that overrides a previous explicit user decision.
- **Media:** keep raw videos, copyrighted footage, large archives, credentials, and private personal data out of GitHub. GitHub holds documentation, links, instructions and reusable code/prompt text.
- **Report what changed:** after each successful commit, briefly provide the file path, what was added, and the commit or link. If GitHub access fails, be transparent; never claim a change was saved.

This is an in-session working practice, not a background agent: updates happen while actively working with the user and when GitHub access is available.

## Master video production pipeline — START HERE (2026-11-03)
Every new Next Aura video follows the same required pipeline covering research, dated fact checking, source footage inspection, German VO, frame-accurate shot selection, moving 9:16 camera-follow, purposeful transitions/effects, **three-layer audio** (VO + authentic source engine/ambience + added SFX), visual/audio QA and separate TikTok + YouTube Shorts publishing packs.

- **[VIDEO_PRODUCTION_PIPELINE_V1.md](00_MASTER_SYSTEM/VIDEO_PRODUCTION_PIPELINE_V1.md)** — mandatory complete 11-stage workflow; includes rights and non-repetition rules for two Shorts using footage from the same subject.
- **[NEXT_AURA_MASTER_AGENT_PROMPT.md](00_MASTER_SYSTEM/NEXT_AURA_MASTER_AGENT_PROMPT.md)** — reusable copy-ready instructions for an editing session or supported computer-use editor.
- **[NEXT_AURA_VIDEO_CHECKLIST_TEMPLATE.md](00_MASTER_SYSTEM/NEXT_AURA_VIDEO_CHECKLIST_TEMPLATE.md)** — per-video editorial, creative, audio, legal and release QA checklist.
- **[PIPELINE_RUNNER_README.md](00_MASTER_SYSTEM/PIPELINE_RUNNER_README.md)** — how to create local projects, evidence and delivery packs.
- **[tools/next_aura_pipeline.py](tools/next_aura_pipeline.py)** — small runnable stdlib Python CLI for project setup, recording evidence and enforcing QA checkpoints; ffprobe optional.

**Important:** The local CLI is a project organizer / evidence gate, not an automatic video editor, automated human listener, copyright verifier or CapCut GUI controller. Final edits still need actual supported editing tools, real audio/video review, user approval and licensing evidence. Do not call first-cut previews final.
