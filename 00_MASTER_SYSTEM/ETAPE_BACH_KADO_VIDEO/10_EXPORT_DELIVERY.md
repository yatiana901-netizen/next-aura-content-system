# 10 — Export & Delivery

**User command:** `10` • **Legacy SOP map:** Stage 8 + delivery

## الهدف
ملفات نظيفة، قابلة للتشغيل والتسليم بوضعية معروفة.

## Inputs / شنو خاصنا
- QA PASS والإصلاحات المنفذة

## Execution / شنو غادي نخدمو
1. صدر 1080x1920 30fps H.264/AAC عند الإمكان؛ دون افتراض 1080 إذا المصدر أقل
2. احتفظ بمشروع edit/source links خارج GitHub في Drive أو محلياً
3. اعمل نسخة preview 720p إذا كبيرة وخلفية thumbnail بصيغة مطلوبة
4. فتح الملفات المصدرة وفحص اكتمالها وأن الروابط تعمل
5. سلّم cue sheets وQA report ومشاكل الحقوق المتبقية إن وجدت
6. ميز بين PREVIEW وQA PENDING وREADY وFINAL بعد الموافقة

## Mandatory pre-delivery review
- [ ] الملف موجود بالفعل ومساره صحيح وقابل للفتح
- [ ] مدة الصوت والصورة متطابقة ولا cut-off
- [ ] لا تعلن صدور ملف لم ينشأ فعلياً
- [ ] راجع اللغة، دقة الأرقام، تسميات الملفات، التوافق مع المراحل السابقة وأي نقص.
- [ ] سجل الأدوات والمراجعات التي تمت فعلاً؛ إذا ما تمش السماع أو مشاهدة الفيديو فصرّح بذلك.

## Outputs / شنو غادي نسلم
- MASTER_1080P.mp4
- PREVIEW_720P.mp4
- COVERS + DELIVERY_MANIFEST.md

## Completion gate
تأكيد الملف الفعلي وفحصه قبل روابط التسليم.

## Standard reply after stage
- **Stage:** 10 — Export & Delivery
- **Result:** ...
- **Verification actually done:** ...
- **Blockers and risks:** ...
- **Status:** PASS / PARTIAL / BLOCKED
- **Next:** 11

> Do not equate a written plan, assumed license, or valid codec with a finished, reviewed MP4. Follow ../VIDEO_PRODUCTION_PIPELINE_V1.md and other active master standards.
