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

## Mandatory audio quality and loudness gate (approved 2026-11-03)
Every Next Aura export must be reviewed for **how loud, clear, balanced, and pleasant it actually sounds**, not only whether an audio track exists.
- **Voice-over first:** listen to the full German VO before mixing. Repair inconsistent levels, unnecessary silence, mouth clicks, harsh sibilance, rumble/noise and abrupt edits when present; use subtle EQ, de-essing and compression only as needed. Avoid a muffled, overprocessed or robotic voice.
- **Consistent perceived volume:** measure integrated loudness (LUFS), short-term/segment variations, true peak (dBTP), and inspect for clipping. As an **initial editorial target rather than a YouTube/TikTok requirement**, aim approximately **-14 to -16 LUFS integrated** for the mixed Short and a **true peak at or below -1 dBTP**, adjusting by ear for the actual content. Do not normalize every transient to the same level or crush dynamics just to hit a number.
- **SFX balance:** choose high-quality relevant effects, trim silent tails, use short fades, and ensure accents are heard without masking words. Reduce/duck SFX under overlapping speech; manually check each impact, whoosh and riser at intended playback level. Remove weak/noisy/unnecessary sounds. **No background music**.
- **Sync:** listen to the final export for actual spoken-word onset vs picture/card/SFX attack. Inspect in full at 1×, replay risky cues at 0.5×, and fix any offset before approval.
- **Real-device check:** audition on normal phone speakers and headphones where available. The VO must remain understandable at moderate phone volume; SFX must not sound piercing or disproportionately loud. If physical-device playback is unavailable, disclose it as unverified rather than claiming it passed.
- **Release report:** note measured LUFS and true peak if instruments were run, any defects fixed, and listening checks actually completed. Export/decoding alone never proves a good audio mix. If no reliable listening or meter analysis is possible, mark audio QA incomplete and provide next actions.

## Original source audio / engine ambience mixing (approved 2026-11-03)
**Do not automatically mute all source-video audio.** Preserve and art-direct useful authentic sounds such as engine revs, exhaust, tire movement, wind, mechanical clicks and race ambience when they match the actual shot. The goal is cinematic realism and emotional impact, **without masking the German VO or chosen SFX**.
- Audit the audio of every selected source shot. Identify desirable engine/ambient details versus distracting speech, copyrighted/background music, unrelated audio, distortion, hiss and sudden level spikes. Keep only sounds that strengthen the moment and that may be used lawfully.
- Edit original-source audio on a **separate track** where possible, independent of the voice-over and added SFX. Use clip-specific gain keyframes, short fades, and volume automation rather than one static volume for the entire timeline.
- Apply **speech-priority ducking**: lower engine/ambient gain whenever the VO speaks, and smoothly restore appropriate ambience during gaps, close-ups or end beats. As a trial only, duck source ambience by roughly 6–12 dB when speech is present, more for exceptionally loud engines, then adjust by careful listening. These are not universal levels.
- For key highlights (startup, throttle blip, pass-by), a brief tasteful boost may communicate power, provided dialogue stays intelligible and transients do not compete with designed impacts. Where source audio and added SFX clash, pick the better sound or reduce one; don't stack two loud effects simply because they are available.
- Use gentle corrective EQ/high-pass, dynamic EQ, light compression or limiting **only when needed** to control rumble, low-frequency competition, piercing highs and peaks. Do not erase an engine's characteristic tone or make the mix sound unnatural.
- Check whether the source video's audio is a single baked-in mix. If engine, unwanted speech/music and noise cannot be cleanly separated, use extraction/separation only if reliable; otherwise mute that source track for the segment or use properly licensed matching ambience. Never claim perfect separation when impossible.
- Ensure audio perspective matches the visual: inside-cabin sound vs trackside pass-by vs distant vehicle; no misleading synthetic engine sound presented as the actual car. Match transitions between clips to avoid abrupt ambience jumps and unnatural cutoffs.
- Final audit: independently check VO clarity, added SFX, source ambience, combined peak/loudness, timing, and phone-speaker intelligibility where available. Report source sounds retained/removed and state what was actually listened to or measured.
- No background music (including music accidentally embedded in source-video audio).

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


## Strict prohibition: music and musical SFX (2026-11-03)
- **Absolute user constraint:** never include music, musical SFX, melodies, notes/chords, jingles, scored risers, or rhythmic music in ANY Next Aura export.
- Before using a sound effect, independently assess its actual waveform/audio content; an SFX library file name does NOT certify nonmusic. Discard or replace any suspect SFX.
- Original clip audio with music embedded under engine/exhaust is unusable unless actually isolated and audited. Do **not** rely on EQ/bandpass to 'erase' music. If the audio cannot be verified music-free, **mute source audio entirely**, retaining only voice and proven nonmusical effects.
- For any sound rebuild: prove from the mixing process that the original audio and legacy SFX were excluded when suspect. Verify final A/V streams and measured LUFS/true peak. State any manual listening limitations honestly.
