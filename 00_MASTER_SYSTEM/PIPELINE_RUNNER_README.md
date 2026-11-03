# NEXT AURA — local pipeline/checklist program
Master specification: VIDEO_PRODUCTION_PIPELINE_V1.md.
Script: tools/next_aura_pipeline.py (stdlib Python 3; optional FFmpeg/ffprobe for technical probing).

## Purpose
A lightweight operational checklist and file generator for **every new Short**. It does NOT pretend to automate CapCut creative cutting, track cars, hear German VO, authenticate rights or publish online. Real CapCut/FFmpeg editing and QA happen outside this CLI. It blocks a READY label until evidence is entered.

## Windows PowerShell example
Run these from your local cloned GitHub repository root:
- python tools/next_aura_pipeline.py init 004_BMW_ALPINA_TEST --title "BMW ALPINA Nardo" --output-dir projects
- python tools/next_aura_pipeline.py init 005_VISION_ALPINA --title "Vision BMW ALPINA" --output-dir projects
- python tools/next_aura_pipeline.py check projects/004_BMW_ALPINA_TEST/project.json --stage research
- python tools/next_aura_pipeline.py set-check projects/004_BMW_ALPINA_TEST/project.json factual_sources --status pass --evidence "BMW Group dated official release and fact ledger checked"
- python tools/next_aura_pipeline.py set-file projects/004_BMW_ALPINA_TEST/project.json vo_file "C:/private_media/alpina_clean_vo.mp3"
- python tools/next_aura_pipeline.py probe "C:/private_media/alpina_first_cut.mp4"
- python tools/next_aura_pipeline.py check projects/004_BMW_ALPINA_TEST/project.json --stage publish

## Files generated in a new project
- project.json — facts, source refs, manual checks/gates, output paths and measured audio notes.
- SHOTLIST.csv — source scene in/out, final placement, tracking/keyframes, transitions.
- VO_CUES.csv — spoken onsets, card and SFX sync.
- AUDIO_CUES.csv — native engine ambience/SFX/ducking, rights.
- PUBLISHING_TIKTOK.md — German caption + exactly 5 hashtags + cover + GER/MA date/time.
- PUBLISHING_YOUTUBE.md — separate Shorts title, description + platform cover + GER/MA date/time.
- QA_REPORT.md — actual checks and unverified claims.

## Rules
- Every evidence row starts pending, not passed.
- 'pass' is a MANUAL assertion that requires explanatory evidence; status alone is not technical proof. 'na' is permitted only for optional items and needs a reason.
- Stage check returns exit code 2 when incomplete; it does not secretly fix media. It checks file references only when stages require them.
- Audio meter measurements must be filled manually from real analysis before QA gate can pass; merely running probe does not measure loudness or certify sync.
- Keep large or licensed assets in a separate private media folder, and keep private source details/credentials out of public repos. Avoid committing project.json when it contains sensitive path/rights notes.
- Two-video projects: fill related_videos and avoid_shared_shots_with in their project.json manifests and visually enforce distinct footage.
- No auto-upload. Actual publishing and public/restricted rights checks require separate user approval.
