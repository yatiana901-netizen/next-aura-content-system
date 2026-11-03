# Montage 1 — QA gate, assets, and publishing policy

## Mandatory technical checks
- Verify all source paths and media metadata before editing: duration, FPS, dimensions, audio channel config.
- Frame-by-frame audit near every extraction's IN and OUT: must not include adjacent shot or hidden transition.
- If 16:9 source, inspect moving 9:16 crop on representative frames and ensure subject stays visible with no bars.
- Evaluate each candidate SFX, trim silence, and avoid VO masking; repeating the same SFX is permitted.
- Only add relevant subtle transitions; clear, natural visual pacing matters more than quantity.
- Keep animated info cards small and legible; no giant text or persistent captions. Match scene's lighting and color.
- Verify **spoken word onset** against visible numbers and SFX attack using listening and frame checks on the exported file, at 0.5× and 1×; exported timing records are not proof of sync.
- Inspect entire final MP4 for flashes, black frames, unintended shot blends, audio distortion, unintended effect repetition, reversed logos or text.
- Check duration, frame count, codec, audio, peak levels, playback and full decode.

## Rights and limitations
- Permissions for the user-supplied third-party ABT footage and SFX have not been verified; do not claim copyright clearance.
- Mirroring, cropping, reframing, adding subtitles or SFX do not remove copyright or substitute licensing.
- Do not publish the raw sources or the full SFX collection in a public repository. Store complete files in a secured private location.
- AI-generated images from earlier experiments are style references, not proof of what an actual ABT production vehicle looks like.
- The user approved V10 aesthetically; no proven exhaustive independent word-level audit exists.

## Reuse for future edits
- Treat V10 as a benchmark, not a rigid timing/style template.
- Reassess each script and footage package afresh. Do not assume 42.9 s, three cards or a fixed SFX count.
- Presenter remains disabled unless user explicitly reactivates it. Music remains disabled.
- Reject low-quality footage and offer targeted camera/shot-specific keywords to find better material.
- Deliver MP4 + accurate source shotlist + card/SFX cues + concise honest QA report whenever tools permit.

## Archive
The complete 349 MB `MONTAGE_1_NEXT_AURA_COMPLETE_PROJECT.zip` is provided in the user's ChatGPT session. Files are **not** committed to GitHub. Keep a durable copy in private storage.
