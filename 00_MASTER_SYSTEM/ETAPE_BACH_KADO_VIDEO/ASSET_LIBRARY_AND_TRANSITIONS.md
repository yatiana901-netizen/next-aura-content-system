# NEXT AURA — MEDIA LIBRARY & REUSABLE ASSET REGISTRY
Updated 2026-11-06. **This is the canonical pointer, NOT a claim that the folders already contain audio/footage.** All listed media library folders were created via connected Google Drive; new folders are empty until files are uploaded.

## Roles and permanence
- **Google Drive = physical media storage:** real MP4/MP3/WAV/PNG/MOV, music-free SFX, transition overlays/presets, editable project backups. Keep access private. Assets remain as long as the user's Drive/account remains available and files are not deleted, subject to quotas/provider policies. For critical originals, keep an additional backup outside Drive.
- **Private GitHub = instructions, catalogs, metadata:** stable Drive file URLs/IDs, license/source provenance, usage recipes, transitions/SFX audio notes, precise timeline cues, QA decisions and reproducible editing instructions. DO NOT push heavyweight copyrighted video, voice files, credentials or private keys.
- **Actual editing = local/shared editor** (CapCut, FFmpeg, Premiere, Resolve, etc.) with verified file access. A Drive link or GitHub catalog is not evidence that the editor already downloaded the content or that ChatGPT can directly control CapCut.

## Verified Google Drive folder map

| Drive folder | Purpose | Folder ID |
|---|---|---|
| [`ROOT`](https://drive.google.com/drive/folders/1K9S144Wn_yATf0qUyV9YR-YXiJB56E92) | NEXT AURA - MEDIA LIBRARY | `1K9S144Wn_yATf0qUyV9YR-YXiJB56E92` |
| [`00_README_AND_INDEX`](https://drive.google.com/drive/folders/1dRPKHwgv93-Bk5Akjq7owR9yyJ9bNFyM) | Guide and indexes | `1dRPKHwgv93-Bk5Akjq7owR9yyJ9bNFyM` |
| [`01_SOURCE_FOOTAGE`](https://drive.google.com/drive/folders/1Ia_-9Nk5WPn_ojnbwC42qfGlE4ylOsik) | Raw original footage | `1Ia_-9Nk5WPn_ojnbwC42qfGlE4ylOsik` |
| [`02_VOICEOVERS`](https://drive.google.com/drive/folders/1vKNKqvlf4NZ9uVHPOSnpgnT3lBu1Z-53) | Jan/ElevenLabs VO takes and selected recordings | `1vKNKqvlf4NZ9uVHPOSnpgnT3lBu1Z-53` |
| [`03_SFX_NON_MUSICAL`](https://drive.google.com/drive/folders/1iPLrgZb1WI6b4s92W6i-KePuMi5t5A10) | Only vetted music-free sound effects | `1iPLrgZb1WI6b4s92W6i-KePuMi5t5A10` |
| [`04_TRANSITIONS_AND_OVERLAYS`](https://drive.google.com/drive/folders/1WHzI8KLB-ZSrD-W5ZueWxOcLnc-ctX3p) | Transition presets, alpha overlays, or exports | `1WHzI8KLB-ZSrD-W5ZueWxOcLnc-ctX3p` |
| [`05_BRAND_AND_COVERS`](https://drive.google.com/drive/folders/1ACDilJXxA-hD7lrP4C6EfaSndMjXP1kh) | Brand identity and real-image covers | `1ACDilJXxA-hD7lrP4C6EfaSndMjXP1kh` |
| [`06_EDITABLE_PROJECTS`](https://drive.google.com/drive/folders/12qLl-qqhJBfv0sXu9dErTKBv2wgnAQrE) | CapCut/Resolve/Premiere project backups with dependencies | `12qLl-qqhJBfv0sXu9dErTKBv2wgnAQrE` |
| [`07_FINAL_EXPORTS`](https://drive.google.com/drive/folders/19bISY5raJupj-zn_6i2l-saPXH1xHRt-) | New final exports; old Exports remain in original location | `19bISY5raJupj-zn_6i2l-saPXH1xHRt-` |
| [`08_QA_REPORTS`](https://drive.google.com/drive/folders/16qxmSub69WlGG4tzMdWdC3yNgMzqvJx4) | Video and audio check results and review reports | `16qxmSub69WlGG4tzMdWdC3yNgMzqvJx4` |
| [`09_RIGHTS_AND_SOURCES`](https://drive.google.com/drive/folders/1ur9afDdElWZ0VW3DETCE7y4rX-e45URr) | Media source links, permission and license evidence | `1ur9afDdElWZ0VW3DETCE7y4rX-e45URr` |

## Existing assets found before organizing — LEFT UNCHANGED
- [Next Aura Exports](https://drive.google.com/drive/folders/1Qr7MuA4Qkci_hwEGbZlVCV0C09PJWTV6) includes Porrari and BMW ALPINA MP4 exports. **Existing exports were not moved, copied, re-encoded or renamed.**
- [Copy of Stretch - Transitions for Premiere Pro.mbr](https://drive.google.com/file/d/1K_bHQKngtbOMlV0RA6ALEtWa1nS6dRuQ/view) — existing ~460 MB archived transition package in Drive root; **contents, codec, rights, audio and CapCut compatibility NOT YET INSPECTED.** Name suggests Premiere Pro use, not proven ready for CapCut. Don't present it as installed or a cleared preset.

## User workflow — adding files permanently
1. Open [NEXT AURA MEDIA LIBRARY](https://drive.google.com/drive/folders/1K9S144Wn_yATf0qUyV9YR-YXiJB56E92).
2. Enter the correct child folder; in browser click **New > File upload** (or drag and drop). For whole project directories use Folder upload when available. Do not overwrite masters.
3. Wait for upload to finish; verify the file appears and can be played/previewed. Files consume account storage.
4. Send a Drive folder/file URL or say `index my new files`. With Drive access, ChatGPT can list metadata and, when available, access content through the connected tools. For detailed audio/visual review, the bytes must be accessible to an actual media inspection/editing runtime. **Metadata alone does not prove musical content or compatibility.**
5. ChatGPT assigns an asset ID and registers the **actual Drive ID + URL**, exact filename, source, rights status, category, application, and intended edit use in the GitHub catalogs. Do not invent asset IDs as if files exist.
6. Create a per-video `VIDEO_RUN_CARD_TEMPLATE.md` copy containing stable file references. During stage 06/08, use exact asset ID and cue timestamps (example below).
7. If you share a new version, avoid deleting previous approved master before the replacement is verified. Archive/mark obsolete instead.

## Permanent style default — no music, clean German automotive
- Voiceover in German; Moroccan Darija collaboration; 9:16, 1080x1920 typically, natural crop/keyframes.
- **No music anywhere.** Reject all melodic, tonal, musical FX, trailers, jingles, pitched risers, and music hidden in native footage. If not actually auditioned and confirmed nonmusical, mark `UNVERIFIED`, do not use.
- No artificial sound masquerading as the genuine vehicle. Under VO, music-free original ambient/engine sound can be mixed only if verified and rights-cleared.
- Default NO persistent subtitles, no showy transitions. Hard cut is first choice. Distinctive brief whoosh/impact/click may reinforce meaningful visual/word beats when vetted.
- User's ABT V10 benchmark: every displayed key word/number is frame-aligned to the real spoken word onset and appropriate SFX transient, exits before the next shot. Verify exported MP4, not only timeline math.
- Do not force a video to 60 seconds or claim real-world rights clearance from a Drive upload.

## Reusable SFX: register, verify, use
Save nonmusical .wav/.mp3 in `03_SFX_NON_MUSICAL`. Use [SFX_CATALOG_TEMPLATE.csv](./SFX_CATALOG_TEMPLATE.csv) to record:
- `asset_id` e.g. `SFX_AIR_WHOOSH_01` (ID is registered only after file is uploaded)
- exact `file_name`, `drive_file_id`, `drive_url`, `duration_s`, `audition_status` (PASS/UNVERIFIED/REJECTED), `no_music_confirmed`, `license_status`, loudness or usage note
- Rule: an effect named 'whoosh' may still contain a musical layer. Listen before approving.

## Transitions: how ChatGPT can reuse them without confusion
- `CUT`: an editing operation, no file upload needed.
- `WHIP_PAN`, `PUSH_IN`, `MATCH_CUT`, `SPEED_RAMP`, `MOTION_BLUR`: reusable **recipes**, not necessarily downloadable files. Record direction, nominal duration in frames, editor, required source motion and parameters in [TRANSITIONS_CATALOG_TEMPLATE.csv](./TRANSITIONS_CATALOG_TEMPLATE.csv).
- `ALPHA_OVERLAY`, `MOV`, `MP4`: actual reusable media file; upload to `04_TRANSITIONS_AND_OVERLAYS` and then record Drive ID/link and editing application.
- `PREMIERE_PRESET`: Premiere project/preset files are **not automatically CapCut-compatible**. Create CapCut-specific recipe, or compatible rendered overlay only if actual compatibility is verified.
- Transition should be chosen based on matching motion and story. Prefer straightforward cut. Do not randomly attach a transition at every cut.

### Example of a **planning cue** (illustrative, NOT checked on a real file)
`00:12.300–00:12.550 | TR_WHIP_LEFT_01 | 0.25s | match source motion | SFX_AIR_WHOOSH_01 | SFX transient at actual German phrase onset when measured`.
An example ID is **not** proof the real asset exists; a measured final cue must record its Drive ID/recipe and actual source boundaries.

## Catalogs & execution
- [ASSET_MANIFEST_TEMPLATE.csv](./ASSET_MANIFEST_TEMPLATE.csv): one row per media file.
- [SFX_CATALOG_TEMPLATE.csv](./SFX_CATALOG_TEMPLATE.csv): one row per sound effect only after verification.
- [TRANSITIONS_CATALOG_TEMPLATE.csv](./TRANSITIONS_CATALOG_TEMPLATE.csv): file assets and reusable editing recipes. Recipe entries may not need Drive media.
- Each stage in [ETAPE_BACH_KADO_VIDEO](./README.md) must reference actual assets; Stage 03 inventories footage, Stage 05 registers final VO, Stage 06 constructs cue sheets, Stage 08 applies transitions/SFX only after vetting, Stage 09 audits, Stage 10 records the final export, Stage 12 logs improvements.

## Connected tools limitations
ChatGPT can read Google Drive file metadata and organize/store catalog text in GitHub when connected. Google Drive upload through the current connector accepts a **connector file URI**; arbitrary strings, local Windows paths and external web URLs cannot be passed as upload bytes. If a file is in the user's local machine, user uploads it to Drive first or a supported computer-use workflow with direct file access is needed. A ChatGPT chat attachment does not automatically become permanent Drive storage. Inability to download/inspect a video fully must be declared explicitly.

## Checklist after upload
- [ ] correct folder and no duplicate copies wasting Drive quota
- [ ] exact source/file ID and share permissions verified
- [ ] audio actually auditioned, music-free and license reviewed
- [ ] transition compatible with chosen editor or recorded as recipe
- [ ] GitHub catalog updated with real link/ID, version, QA status
- [ ] video run card uses the catalog ID and actual timeline timings
