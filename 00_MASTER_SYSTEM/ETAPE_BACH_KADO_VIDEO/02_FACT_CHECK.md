# 02 — Fact Checking

**User command:** `2` • **Legacy SOP map:** Stage 1

## الهدف
كل جملة فالفيديو خاصها دليل، خصوصاً المواصفات والأرقام.

## Inputs / شنو خاصنا
- الموضوع المختار وروابط الأخبار

## Execution / شنو غادي نخدمو
1. تحقق من بيانات الشركة الأصلية ثم المصادر التقنية المستقلة عند الحاجة
2. ميّز بين PRODUCT / PROTOTYPE / CONCEPT / PLANNED / UNCONFIRMED
3. ثبت الموديل والسنة والبلد والأرقام والوحدات؛ لا تخلط نسخ مختلفة
4. سجل روابط الأدلة وتاريخها والمعلومات المتعارضة
5. إما صحّح الادعاء أو استبعده؛ لا تحوّل التخمين إلى حقيقة

## Mandatory pre-delivery review
- [ ] لكل Claim مهم مصدر واضح
- [ ] تاريخ الحدث غير تاريخ المقال
- [ ] عدم تقديم مفهوم أو نموذج بحثي كأنه منتج متاح
- [ ] راجع اللغة، دقة الأرقام، تسميات الملفات، التوافق مع المراحل السابقة وأي نقص.
- [ ] سجل الأدوات والمراجعات التي تمت فعلاً؛ إذا ما تمش السماع أو مشاهدة الفيديو فصرّح بذلك.

## Outputs / شنو غادي نسلم
- FACT_LEDGER.md (claim/source/date/status/wording)
- FACT_CHECK_VERDICT.md فيه READY أو BLOCKED

## Completion gate
كل ادعاء جوهري موثق أو مصرح أنه غير مؤكد.

## Standard reply after stage
- **Stage:** 02 — Fact Checking
- **Result:** ...
- **Verification actually done:** ...
- **Blockers and risks:** ...
- **Status:** PASS / PARTIAL / BLOCKED
- **Next:** 03

> Do not equate a written plan, assumed license, or valid codec with a finished, reviewed MP4. Follow ../VIDEO_PRODUCTION_PIPELINE_V1.md and other active master standards.
