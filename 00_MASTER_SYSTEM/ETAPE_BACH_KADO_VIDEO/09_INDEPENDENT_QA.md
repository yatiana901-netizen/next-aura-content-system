# 09 — Quality Control & Independent Review

**User command:** `9` • **Legacy SOP map:** Stage 8

## الهدف
نراجع الملف المصدّر نفسه فريماً وصوتاً ماشي نثق بالتوقيت النظري.

## Inputs / شنو خاصنا
- آخر MP4، cue sheets، rights ledger

## Execution / شنو غادي نخدمو
1. فحص كامل للفيديو بصرياً، والحدود frame-by-frame
2. استماع للـVO + SFX + صوت المصدر ثم للمكساج النهائي 1x وأماكن الخطر 0.5x
3. راجع Word ↔ card ↔ SFX مع onset الحقيقي، وكل رقم ومواصفة
4. تحقق FFprobe/decode: duration, dimensions, FPS, streams, silence/peak
5. قِس LUFS/true peak إذا الأدوات متاحة؛ اذكر القياس وليس التخمين
6. Reviewer مستقل عن Editor كلما أمكن؛ يعطي أخطاء Timestamped
7. راجع حقوق الاستعمال والكشف عن AI إن لزم

## Mandatory pre-delivery review
- [ ] أي Blocker مذكور بوضوح
- [ ] لا اعتباره FINAL إذا فقط probe نجح
- [ ] لا ادعاء سماع/مشاهدة لم يحدث
- [ ] راجع اللغة، دقة الأرقام، تسميات الملفات، التوافق مع المراحل السابقة وأي نقص.
- [ ] سجل الأدوات والمراجعات التي تمت فعلاً؛ إذا ما تمش السماع أو مشاهدة الفيديو فصرّح بذلك.

## Outputs / شنو غادي نسلم
- QA_REPORT.md (PASS/FAIL/PENDING)
- FIX_LIST.csv
- INDEPENDENT_REVIEW.md

## Completion gate
لا GO للتصدير المعتمد مع عيوب حرجة أو حقوق غير محسومة.

## Standard reply after stage
- **Stage:** 09 — Quality Control & Independent Review
- **Result:** ...
- **Verification actually done:** ...
- **Blockers and risks:** ...
- **Status:** PASS / PARTIAL / BLOCKED
- **Next:** 10

> Do not equate a written plan, assumed license, or valid codec with a finished, reviewed MP4. Follow ../VIDEO_PRODUCTION_PIPELINE_V1.md and other active master standards.
