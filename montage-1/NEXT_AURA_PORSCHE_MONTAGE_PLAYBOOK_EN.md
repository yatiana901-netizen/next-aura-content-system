# NEXT AURA — Porsche Active Ride: Production Playbook and AI Handoff

**Documented:** 11 November 2026. **Latest video covered:** V8.

This is the English edition of [the Darija playbook](NEXT_AURA_PORSCHE_MONTAGE_PLAYBOOK.md). It preserves the production history, settings, sources, cue sheet, user preferences, mistakes, and verification limits. It is not a certificate that V8 is complete or that the user has approved it.

**Publication clarification:** GitHub updates were initially deferred during editing. The user subsequently explicitly authorized uploading the playbook and adding this English edition. That authorization covers these documents; it does not constitute final approval of the video or blanket permission for unrelated repository changes.

## 1. Read this working agreement first

The user wants German-language automotive technology videos for a German audience, aiming for the quality of the ABT RS5-R V10, BMW ALPINA NARDO, and ALPINA VISION references. The goal is completion and replay. Retention and virality cannot be guaranteed without actual results.

- Format: 9:16, 1080×1920. The current video is 30 fps and approximately 36.27 seconds.
- German voice-over (VO); communicate with the user in Moroccan Darija.
- No music and no added presenter or character. A person already present in source footage need not be removed when they perform the action being demonstrated.
- No captions, subtitles, or added information cards. The user specifically rejected “PANAMERA E-HYBRID · OPTIONAL.” Do not restore text under the pretext of improving the design.
- Use clear real footage. Animation should explain, not interrupt the story as decoration.
- Use smooth camera follow and appropriate enlargement of the relevant subject. Fill unused space around landscape footage with blur. Native vertical footage that fills the frame does not need blur over its content.
- Preserve original comparisons: keep both cars visible, retain their timing and top/bottom order, and never give the two halves different playback speeds.
- Consider the entire SFX library when selecting sounds. Reusing a suitable sound is allowed, but repeating one whoosh throughout the video is not the requested variety.
- The user requested transitions and SFX at shot changes. Their later correction takes priority: **do not cut the opening action before it is complete.** Do not invent cuts merely to add transitions.
- Clarity and quality matter more than effect count, shot count, or reaching one minute.
- The assistant writes the VO script; the user records it in ElevenLabs. Do not claim to have generated the recording unless you actually did.
- GitHub updates were originally deferred until the user liked the video quality. See the publication clarification above for the later authorization to publish this playbook.

## 2. Inputs and assets to verify

Search available sources before asking the user to upload material again. Do not say “I have everything” without an actual inventory.

| Source | Purpose |
|---|---|
| [Porsche Active Ride folder](https://drive.google.com/drive/folders/1wLYZ75jqMxrDorku0lwsh1MRElOc960Y) | Original footage and project references |
| [SFX folder](https://drive.google.com/drive/folders/1iPLrgZb1WI6b4s92W6i-KePuMi5t5A10) | 38 files confirmed and retrieved during V6 |
| [Saved video](https://chatgpt.com/library?file_id=libfile_ff6de21daa4c81919dbfa003bd659e78&account_id=personal) | V8 when this guide was written; the same Library item has version history |
| [Selected VO](https://chatgpt.com/library?file_id=libfile_b3191c1626c08191856fd240d9e60a19&account_id=personal) | ElevenLabs_2026-11-10T13_02_41_Jan - Social Media Creator_pvc_s56_sim75_v4.mp3 |

The original VO is approximately 43.154 seconds, mono, 44.1 kHz. Other versions had similar durations but were **not identical**. Selection of this recording was provisional: its delivery and tone were not verified through direct listening during this implementation.

### Main footage used

| File/link | Approximate properties | Use |
|---|---|---|
| [2025 Panamera comfort entry](https://drive.google.com/file/d/1cvSI8kpgEYaLJpxH-U66ZVuJJcPM25bt/view) | 1080×1920, 13.096 s | Door opening, body rise, wheel and increased clearance above it |
| [Porsche Panamera — Active Ride Demonstration](https://drive.google.com/file/d/1ch-n9n4WcXRZUCTlJ3kxvvUKI8WUKoGL/view) | 1920×1080, 102.864 s | Blue car, body movement and detail shots |
| [271910_en_6000000.mp4](https://drive.google.com/file/d/1pXYW5Y4nv4x6h9mwZ6XJYAx8jlPHVzt-/view) | 1920×1080, 159.8 s | Orange car over bumps and comparison with the green car |
| [Active Ride lane change demo](https://drive.google.com/file/d/1zOaGxPM5Fr_bFR93mlU7es1f3c_oKupQ/view) | 1920×1080, 198.019 s | Maneuver and cone-course comparisons |

Another available video showed a Taycan: do not use it as evidence of the Panamera. Phone-controlled demonstration footage must not be presented as the production car's door-opening feature. User-supplied technical images do not establish that the depicted hardware is this exact system; identify them before making precise mechanical claims.

## 3. Story and VO used

Story: the door opens → the car rises to ease entry → body control over bumps → system explanation → inward lean in a corner → return to the opening idea.

The original German script is retained verbatim because it identifies the recording:

> Du öffnest die Tür – und der ganze Porsche hebt sich. Was steckt dahinter?
>
> Das erleichtert dir den Einstieg. Doch richtig spannend wird dieses Fahrwerk erst während der Fahrt.
>
> Schau auf die Karosserie: Die Räder arbeiten über die Unebenheiten, während sie erstaunlich ruhig bleibt.
>
> Dahinter steckt Porsche Active Ride, optional für den Panamera E-Hybrid.
>
> Eine elektrische Hydraulikpumpe an jedem Stoßdämpfer regelt die Kräfte für jedes Rad einzeln. So wirkt das System den Bewegungen der Karosserie gezielt entgegen.
>
> Und es geht noch weiter: Mit aktivierter Kurvenneigefunktion lehnt sich der Panamera nach innen – ähnlich wie ein Motorrad.
>
> Die Technik, die ihn beim Einsteigen anhebt, hält ihn unterwegs also gezielt in Balance.

Previously consulted technical source: [Porsche — Chassis and brakes](https://newsroom.porsche.com/en/press-kits/panamera/chassis-and-brakes.html). Revisit the original source for a new script or new figures. Do not extend its claims without evidence. Distinguish optional equipment, an activated function, and a demonstration.

**Lesson:** Do not write an impressive claim that the available visuals cannot show. Check visual coverage for every sentence before recording. If the tone does not work, change the VO; do not try to conceal the problem with effects.

## 4. Tools actually used

The edits were made locally using FFmpeg/FFprobe, Python, NumPy, Pillow, and SciPy. The illustrations were drawn and animated in code. They were neither official 3D models nor photorealistic generated video.

**CapCut and DaVinci were not used to produce these versions.** Nor were all the user's saved repositories executed. Having a resource in a catalog, or reading its instructions, does not mean its engine was installed or tested.

- FFprobe: file metadata, dimensions, duration, frame rate, and audio streams.
- FFmpeg: decoding, clip selection, scaling, cropping, blur, concatenation, speed changes, muxing/export, and loudness/silence checks.
- Pillow/NumPy: animations, transitions, and some frame-by-frame reframing.
- SciPy: tracking-path smoothing and some audio processing.
- Direct listening and a reliable transcript/forced-alignment workflow were unavailable during this implementation. Do not conceal this limitation behind technical QA.

## 5. Complete version history

| Version | Actual changes | Lesson |
|---|---|---|
| V1, ~43.17 s | Initial assembly, text cards, small landscape images surrounded by blur, a simple animation, limited SFX variety | A technically valid montage may still feel slow or unclear. The user rejected the text, pacing, and empty pauses |
| V2, ~40.63 s | Removed cards, shortened 13 VO pauses by ~2.531 s total, 21 clips, two animations, more noticeable SFX | Silence removal and extra cuts are insufficient: visuals must explain the sentence and actions must finish |
| V3, ~36.27 s | 12% speed increase, audio atempo, improved schematic car design, lighting/pulses, mild color adjustment | Global acceleration was provisional, not a permanent rule. The opening later needed normal speed |
| V4 | 20 transitions at the then-existing cuts, six-frame transitions, whoosh at each cut with impacts | Repeating one file at different speeds did not provide the variety requested |
| V5 | Enlarged foreground, color-based camera follow, surrounding blur, enlarged comparisons | Approximate tracking allowed some cars to leave the frame; inspect each shot's beginning, middle, and end |
| V6 | Retrieved all 38 SFX, rebuilt the mix from clean VO using 22 distinct files at 26 cues; picture unchanged | Numerical variety improved, but listening is required to judge suitability, character, and balance |
| V7 / REVIEWED | Replaced three distant, cropped, or empty-road shots; improved the comparison moment; added movement during an animation hold | Replacement shots also require review: the first replacement comparison still began too far away and was corrected again |
| V8 | Replaced the first 181 frames (~6.03 s) with one continuous original-speed shot showing door opening, body rise, and wheel clearance; removed three obsolete cues | **Show the action clearly before optimizing cut count or speed** |

“REVIEWED” referred to visual and technical checks, **not complete listening approval or final user approval**.

## 6. Protect the opening action

The earlier edit jumped from the hand/door to the wheel, then to a blue car, then back to the door while the action was still happening. That interrupted the causal relationship between opening the door and the body rising.

V8 correction:

1. Use the original vertical source.
2. Source in: approximately 00:02.550; source out: approximately 00:08.58.
3. Output 181 frames at 30 fps: 6.033 seconds.
4. Show the action continuously at original speed, without internal transitions or additional cropping.
5. Retain the original framing so the door, wheel, and clearance above it remain visible.
6. Remove the SFX for deleted cuts at approximately 2.367, 3.367, and 4.433 seconds.
7. Move the opening-exit cue to approximately 6.033 seconds.

**Do not automatically accelerate or recut this shot.** To improve it, examine the handle reach, door opening, start of the body rise, and visible result. Stable framing and uninterrupted action matter more than greater magnification. The body rises relative to the wheel; do not describe it as the wheel lifting off the ground.

## 7. V8 timeline

These timings describe picture order. **They are not approved word-level alignment.** Some transitions straddle a boundary by three frames on each side; the final comparison repair includes a short overlap.

| Time in → out, seconds | Picture / purpose |
|---|---|
| 0.000 → 6.033 | Continuous opening: door, body rise, clearance above wheel |
| 6.033 → 7.467 | Orange car moving |
| 7.467 → 8.800 | Corrected side view from the bump-test source near 80 s |
| 8.800 → 11.600 | Original green/orange comparison over bumps |
| 11.600 → 13.700 | Wheel/onboard detail |
| 13.700 → 15.633 | Orange car side view |
| 15.633 → 17.767 | Blue car front and details |
| 17.767 → 20.100 | Top-view schematic: individual control at four corners |
| 20.100 → 21.533 | Blue car details |
| 21.533 → 22.700 | Wheel and road movement |
| 22.700 → 24.300 | Clear rear bump-test shot from source ~95.2 s |
| 24.300 → 25.967 | Return to the original comparison |
| 25.967 → 27.167 | Lane-change comparison |
| 27.167 → 30.533 | Inward-lean animation |
| 30.533 → 31.900 | Approaching-car comparison, final correction from source ~41 s |
| 31.900 → 33.533 | Wheel/body-rise close-up |
| 33.533 → 34.867 | Orange car |
| 34.867 → 36.267 | Visual return to the door-opening car |

Returning to the opening subject does not prove that the loop is seamless. Test the last second against the first second with picture and sound. Do not predict replay simply because the same car returns.

## 8. VO preparation: actual settings and better practice

### What was implemented

- Silence detection threshold approximately −38 dB, minimum duration 0.20 s.
- Identified 13 pauses; retained approximately 80 ms on each side, leaving about 160 ms instead of eliminating breathing entirely.
- Removed approximately 2.5308 s total; the cleaned VO became approximately 40.6235 s.
- Applied short, approximately 3 ms fades at cut boundaries to reduce clicks.
- Resampled to 48 kHz; applied initial gain of +6 dB.
- Used atempo=1.12 on the VO, preserving pitch algorithmically, producing approximately 36.27 s.
- Pitch preservation does not establish that accelerated delivery sounds natural. That requires listening.

### Better procedure

1. Listen to the whole recording before processing.
2. Obtain a timestamped transcript and confirm it matches the selected file.
3. Remove pauses at sensible boundaries with padding; do not rely exclusively on a level threshold.
4. Listen to every join for clipped consonants, missing breaths, and rushed phrasing.
5. Lock the edited VO, version, and checksum before placing footage.
6. Locate key word and phrase onsets in the actual recording. Do not estimate alignment by dividing duration by word count.
7. Any audio edit requires updated timestamps and cues; never shift only the audio and assume the edit still aligns.

## 9. Shot selection, framing, and camera follow

Review each source and log useful source in/out points with a clear description. Contact sheets help find footage but do not replace watching movement. A strong middle frame may be surrounded by empty or unusable footage.

For each shot, identify the target: whole car, body movement, wheel, or comparison. Choose magnification accordingly rather than applying one zoom everywhere.

### What was implemented

- A blurred, enlarged, slightly darkened duplicate forms the background; the sharp foreground is placed over it.
- Some foreground widths were 1080 or 1280/1440 pixels before later reframing. These are project settings, not universal prescriptions.
- V5 enlarged individual shots by roughly 12–24% in many cases and small comparison shots by approximately 55–70%, depending on the shot.
- Approximate tracking used orange/blue RGB masks, median color position, interpolation across missed detections, Gaussian smoothing, and a camera-movement limit.
- This was not an advanced object tracker. It could select a background or reflection, and it could not recover a car outside the source frame.

### Better procedure

1. Work from the high-quality original, not an already cropped export.
2. Track the car or relevant feature and manually validate the path.
3. Leave room in the direction of movement and around the part being explained.
4. Correct failed tracking with manual keyframes; reduce zoom if there is insufficient room.
5. Inspect beginning, middle, and end, then watch the entire shot at normal speed.
6. For comparisons, track both cars. Do not follow only the orange car if their centers diverge. Use one shared crop containing both, or reduce zoom. Preserve synchronization.
7. Reset tracking at any source scene cut.
8. Blur fills unused space only; do not blur the subject or important information.

## 10. Animations: purpose, design, and limits

Two inserts were drawn in code:

- **Top view:** simplified car, four wheels, and individual corner connections/pulses to explain separate control.
- **Front view:** body leaning inward, wheels on the ground, simplified springs, a directional arc, and a ghost silhouette showing the initial position.

The design evolved from simple polygons to outlines, lights, grille detail, ground lines, navy background, a subtle grid, cyan glow, pulses, and a smooth approach. Extra movement was added during the final hold after it appeared stationary.

**Limits:** These are explanatory schematics, not measured engineering diagrams or official Porsche component models. Do not present the illustrated lean angle as a real specification. Top-view arrows must not be treated as exact mechanical trajectories. Use verified technical material for an actual cutaway. Glow and invented detail are not substitutes for accuracy.

**Quality rule:** Each animation answers one question, enters at the appropriate sentence, shows the movement promptly, and exits before becoming a burden. Do not add text labels without renewed authorization: the user rejected added text in this video.

## 11. Transitions: avoid repeating the mistake

V4 used approximately six frames / 0.20 s around each cut: three frames before and three after. Directional pushes and zoom dissolves used light blur. These transitions did not shorten the timeline.

A limitation of the earlier implementation was its use of fixed anchor frames in some transitions. This can cause ghosting or a brief motion hold. Future transitions should use moving source frames and appropriate motion blur. Never cover the demonstration or carry incorrect framing into the next shot.

- Match transition direction to motion rather than alternating left/right mechanically.
- Use light transitions between related views; reserve stronger transitions for meaningful changes such as entering an explanation.
- Align the SFX transient with the visual beat, not necessarily with the beginning of an audio file that has a lead-in.
- Account for handles and overlaps so synchronization does not drift.
- A hard cut is acceptable, especially when it preserves clarity. Requesting transitions does not mean cutting every second.

V8 has no internal transition during its first 6.03 seconds. Merging the opening's first four clips leaves approximately 18 principal clips. Do not describe V8 as having “20 transitions” using obsolete V4 statistics.

## 12. SFX selection, variety, and mixing

The library contains 38 files. During V6 they were all retrieved and checked technically for duration, decoding, and peaks. **Reliable direct listening to every file did not occur.** Selection used filenames, signal analysis, and timing; a future assistant must not claim this was an auditory review.

V6 used 22 distinct files at 26 cues. V8 removed three opening cues and moved another to 6.033 s. The resulting script-derived count is **23 cues from 21 distinct files**. These counts are consequences of this edit, not targets for every video.

Roles include slide/swoosh for movement and transitions, click/shutter for detail changes, UI sounds for explanations, short risers before reveals, and impacts for the opening or important entries. Check that shutter sounds do not imply real photography that did not occur, and that machine-like effects are not falsely presented as authentic system sounds.

### Actual final-mix approach

- Rebuild from clean VO; do not layer new effects over an old finished mix.
- Remove leading SFX silence, apply a high-pass filter near 65 Hz, locate the strongest event, and trim for the role.
- Estimate peak energy with an approximately 10 ms window and align it to the cut.
- Apply short fades to prevent abrupt sample-edge clicks.
- Use different levels: many transition peaks were approximately −13 dBFS before mixing, clicks around −16, and secondary UI details lower. These are project-specific values, not universal gains.
- Gently duck effects during energetic speech, by up to approximately 22% of amplitude, then use a limiter ceiling around 0.89.
- Export AAC at 192 kbps, 48 kHz. V6 measured approximately −18.4 LUFS integrated and −2.1 dBFS true peak. This is not a listening judgment; do not assume the measurements remain identical after edits.

### Better practice

Listen to candidate samples, classify their texture, sharpness, and duration, and audition them in context with the VO. Listen through both speakers and headphones. Do not keep raising gain until the result is harsh. Consider the whole library when choosing; do not force all 38 sounds into 36 seconds unless the user explicitly requests every file in a particular version.

### Derived V8 cue sheet

Times are seconds. A riser time indicates the intended end of its build. These are implementation timings, not proof of auditory suitability or word-level alignment. Levels are approximate pre-mix peaks.

| Beat | File | Role | Pre-mix level |
|---|---|---|---|
| 0.000 | Big cinematic impact Sound Effect.mp3 | peak | −15 dBFS |
| 6.033 | Whoosh 8 .wav | peak | −13 dBFS |
| 7.467 | blade whoosh.mp3 | peak | −13 dBFS |
| 8.800 | Deep Whoosh   (5).wav | peak | −13 dBFS |
| 8.800 | QUICK RISER (7).wav | riser | −22 dBFS |
| 11.600 | Camera Shutter Sound Effects 3.MP3 | peak | −16 dBFS |
| 13.700 | Whoosh 4 .wav | peak | −13 dBFS |
| 15.633 | Transition Sound Effects [Swoosh Pack] 1.MP3 | peak | −13 dBFS |
| 17.767 | Ui 5.wav | peak | −16 dBFS |
| 18.467 | Ui 2.mp3 | peak | −20 dBFS |
| 19.017 | Click Sound Effect.mp3 | peak | −21 dBFS |
| 20.100 | Mouse Click Sound Effect 1.mp3 | peak | −16 dBFS |
| 21.533 | Transition Sound Effects [Swoosh Pack] 3.MP3 | peak | −13 dBFS |
| 22.700 | Whoosh Sound.mp3 | peak | −13 dBFS |
| 24.300 | slide whoosh.mp3 | peak | −13 dBFS |
| 25.967 | Whoosh 8 .wav | peak | −13 dBFS |
| 27.167 | DSGNSrce_IMPACT-Element 13_Ocular_Quantum.wav | peak | −13 dBFS |
| 27.167 | metalic riser.mp3 | riser | −24 dBFS |
| 27.167 | Bass Impact - Sound Effect for editing.mp3 | peak | −20 dBFS |
| 30.533 | Articulated Sounds - Destructive Impacts - Flash Distorted Mechanical Swish.wav | peak | −13 dBFS |
| 31.900 | Camera Shutter Sound Effects 2.MP3 | peak | −16 dBFS |
| 33.533 | Swoosh Sound Effects 1.MP3 | peak | −13 dBFS |
| 34.867 | Whoosh 4 .wav | peak | −13 dBFS |

The V6 cue sheet plus the V8 patch yields 23 cues and 21 distinct files.

## 13. Mistakes that must not recur

| Actual mistake | Why it hurt | Corrective rule |
|---|---|---|
| Cutting during door opening and body rise | Hid cause and effect | Mark the action as protected before editing; do not cut it |
| Calling an export ready based only on codec/duration | A working file may still be slow or unclear | Separate technical, visual/editorial, and listening QA |
| Adding text despite the clean-style preference | Contradicted the request and covered the picture | Follow the latest preference; text needs authorization |
| Landscape footage displayed too small | Car and details were hard to see | Enlarge the target with blur and safe margins |
| Excessive zoom with uncorrected tracking | Car left the frame or was clipped | Check critical frames; correct keyframes or reduce zoom |
| Judging a shot by its middle screenshot | Its beginning/end may show empty road | Watch the entire shot and its in/out neighborhoods |
| One whoosh at every change | Sound became mechanical despite many cues | Review the library, choose by role, and listen to the balance |
| Calling pitch changes of one file variety | Did not actually use the user's varied files | Record the real filename for every cue |
| Long stationary animation holds | Interrupted pacing without adding information | Use concise meaningful movement, then exit or add a restrained camera move |
| Applying one speed to everything | Important actions became unclear | Exempt actions that need natural timing, especially the opening |
| Estimating synchronization from text | Words, visuals, and effects could drift | Use actual recording timestamps and listening review |
| Repeatedly repairing compressed exports | Lost quality and made layers harder to edit | Maintain a source-based master and minimize final re-encodes |
| Losing temporary files between sessions | Required retrieval and reconstruction | Persist the master, EDL, manifests, scripts, and checkpoints |
| Treating effect/cut counts as success metrics | Encouraged clutter without meaning | Every addition must support clarity or pacing |
| Claiming everything was preserved without checking | Unintended changes could affect other layers | Compare streams, frames, and duration as appropriate |
| Making the user resolve routine technical failures | Wasted time on reuploads and confirmations | Retrieve available sources and identify only genuinely missing inputs |

## 14. Better end-to-end workflow

### Stage 1 — Lock the brief and references

Read the latest user instructions and distinguish explicit preferences from assumptions. Actually analyze the ABT/ALPINA references if available: how the action begins, how long it stays understandable, and where effects enter. Do not claim equivalent quality simply because an edit contains transitions.

### Stage 2 — Inventory and review sources

For every asset, record filename/ID, duration, resolution, fps, source, possible role, existing text/music, and whether it depicts the correct vehicle/system. Duplicate hashes help: different names do not guarantee different footage. Use contact sheets to locate candidates, then watch the movement.

### Stage 3 — Build a visually supportable story

Arrange claim → evidence → explanation → payoff. Every VO sentence needs verified footage or a clear schematic. If the central visual is missing, revise the sentence or request the specific asset; do not fill the gap randomly.

### Stage 4 — Lock the VO

Choose delivery by listening, trim pauses carefully, obtain transcript/alignment, and record boundaries. If the tone fails, suggest a shorter script or different delivery before building the full edit. Do not accelerate automatically to conceal excessive writing.

### Stage 5 — Rough cut without effects

Show the opening proof continuously, then place the essential footage against the VO. The video should make sense and hold attention without SFX. Fix selection and sequencing before sound design if it does not.

### Stage 6 — Frame and follow the target

Separate sharp foreground from blur. Define targets, safe margins, tracking, and keyframes. Preserve comparison framing and timing. Watch each shot through the end of its action.

### Stage 7 — Short animation, one idea

Storyboard the initial state, event, outcome, and exit before coding. Render a short trial, check physical direction and meaning, then place it at the correct sentence. There is no need to test every animation engine for a simple insert.

### Stage 8 — Design transitions and SFX together

For each actual cut, choose a transition or hard cut, then a matching library sound. Record cue filename, source trim, peak time, gain, fade, and purpose. Maintain variety and a coherent sound character. Intentional repetition is allowed; clutter is not.

### Stage 9 — Mix

Start from clean VO. Do not repeatedly layer effects over a finished mix. Check masking, peaks, harshness, tails, and silence. Distinguish an illustrative effect from a sound that implies an unsupported real-world event.

### Stage 10 — Review separately from implementation

Perform a review pass after editing instead of defending your choices. A separate reviewer can help where authorized and available; never claim independent review occurred when it did not. If audio perception is unavailable, state that limitation and leave listening approval pending.

### Stage 11 — Export from one master

This project used H.264, 1080×1920, 30 fps, yuv420p, AAC 48 kHz/192 kbps, and faststart. CRF around 20–23 was used; evaluate it on the footage rather than treating it as a quality guarantee. Work from originals instead of chaining compressed MP4s. Preserve sources and earlier versions.

### Stage 12 — Deliver a resumable handoff

Deliver the saved video, concise changes, remaining gaps, and the project/EDL when needed. Do not promise to work and stop when an authorized edit is feasible. Save the output before linking it. Keep Porsche separate from KIMM, ABT, U9, and other projects.

## 15. Review gate before calling it ready

### Visual and editorial

- Does the first second enter the action without unnecessary waiting?
- Are door opening and body rise shown continuously and in a clear sequence?
- Does each sentence have the appropriate visual?
- Is the target visible at the beginning, middle, and end of each shot?
- Are both comparison cars visible and synchronized?
- Does a transition cause ghosting, a motion hold, or obscure a detail?
- Is there unintended empty road, subject clipping, or a black frame?
- Is the animation understandable and directionally correct, rather than merely attractive?
- Is blur confined to the surrounding space?
- Does the ending deliver a clear result? If a loop is intended, does the final-to-first connection actually work?

### Listening

- Listen to original and edited VO for cut consonants and unnatural breathing.
- Check every cue with its transition at normal speed, and slowly where useful.
- Listen to chosen SFX rather than trusting filenames.
- Ensure effects do not mask speech or introduce unwanted music or harsh noise.
- Check the exported mix, not only the mixer.

### Technical

- Use ffprobe to confirm dimensions, fps, duration, and audio streams.
- Decode the entire export without errors.
- Treat blackdetect/freezedetect as alerts, not judgments. Static cameras and animation holds can produce false positives; inspect the cause before changing anything.
- Measure loudness, true peak, and silence. No clipping does not mean a pleasing mix.
- For audio-only edits, compare video-stream hashes when using stream copy.
- For picture-only edits, compare audio-stream hashes when retaining audio.
- Check first/last frames and avoid cutting the final word or an important sound tail.

## 16. Verified work and remaining gaps

**Verified:** 1080×1920, 30 fps, approximately 36.27 s, full decoding, contact sheets and targeted frames, identified shot repairs, and stream-preservation checks at some stages. The V8 opening was inspected through consecutive half-second samples and the file was technically checked.

**Not fully verified:** direct listening to combined VO/SFX; reliable word-level alignment; continuous normal-speed visual review of every frame; whether the overall tone matches the references; final user approval; actual completion/replay performance after publication.

V8 is the latest improved version, not “100% guaranteed quality.” Inspect the current file before judging it. If your tools support better listening/viewing, close these gaps before adding effects arbitrarily.

## 17. Preserve the project across chats

Save with the master: source manifest, original and edited VO, transcript/timestamps if available, EDL, crop/tracking keyframes, animation source, SFX cue sheet, export settings, QA notes, changelog, and resume point.

The actual process used scripts spread across V1–V8, and some temporary files disappeared between sessions. **This guide does not itself turn that sequence into a reproducible project.** Before reproducing the full edit, gather surviving assets/scripts into one package, repair paths, and document dependencies. Do not claim an editable CapCut project exists; none was created here.

For a better setup, use one master and a structured timeline, reproducible stage outputs, checkpoints after each stage, and originals independent of exports. Do not rely on absolute scratch paths from an earlier chat. Resolve local paths again from the saved files and Drive sources.

## 18. Ready-to-use prompt for another chat

Copy the following with this guide and the video or its links. A Darija equivalent is available in section 18 of the source edition.

> Continue the NEXT AURA / GERMANY Porsche Panamera Active Ride project. Read the complete attached playbook and inspect the latest V8 before changing anything. Do not treat V8 as finally approved: visual/technical checks were performed, but detailed listening and word-level synchronization remain unverified.
>
> I want 9:16, 1080×1920, natural German VO, no music, no added presenter, and no captions or text cards. Use the real sources. Enlarge the important subject with smooth camera follow and blur in surrounding unused space. Keep both cars visible and synchronized in comparisons.
>
> The most important rule: the first approximately six seconds show door opening and body rise in one continuous shot at original speed. Do not cut the action or replace it with several short clips. Do not add cut-transition effects inside an unchanged shot.
>
> There are 38 SFX files. Review the library, listen to candidates if you can, and choose varied sounds appropriate to the movement. Do not repeat one whoosh throughout or force every file into the video without purpose. Rebuild from clean VO and the cue sheet rather than adding sounds over an old mix. Synchronize effects to actual events and keep speech clear.
>
> Aim for the ABT/ALPINA reference quality or better, but do not promise that standard before checking. Use animation only to explain accurate information, without invented engineering details.
>
> Start with an inventory and state what you actually viewed and heard. Review the beginning, middle, and end of every shot, and the opening as a complete action. Fix clipping, empty shots, ghosting, freezes, or timing offsets. Search available sources before asking me to upload a missing asset again. Execute authorized corrections and preserve work that does not need changing.
>
> Deliver a saved export, concise changelog, and honest QA status describing verified and pending items. Do not claim to have used CapCut, listened to audio, or approved synchronization unless that happened. GitHub changes were initially deferred; publication of this playbook and its English edition was subsequently authorized. Follow my current instructions for any additional changes. The goal is a clear, engaging video, not maximum effect count or a forced one-minute duration.

## 19. Priorities for improvement beyond V8

1. **Actual listening and alignment:** use a matching German transcript and verify synchronization to specific words and phrases.
2. **Opening comprehension:** have a new viewer assess whether the rise is clear without explanation. If not, select stronger footage or more stable framing rather than adding cuts.
3. **Source-based master and reliable tracking:** avoid repeated re-encoding, and improve camera follow with corrected keyframes/object tracking instead of relying only on color masks.
4. **Better transitions:** reduce fixed-anchor ghosting while retaining meaningful transition treatment where it serves the movement.
5. **Coherent sound design by listening:** 21 distinct sounds is not a goal in itself. Fewer or more may be appropriate.
6. **Clearer engineering schematics:** improve technical clarity and the connection to real footage; more complexity is not necessarily better.
7. **Evidence from publication:** after user approval and publication, use retention graphs, drop-offs, completion, and replay data to identify needed changes. Until then, predictions of success remain hypotheses.
