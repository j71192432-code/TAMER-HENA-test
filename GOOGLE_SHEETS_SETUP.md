# دليل ربط القائمة بـ Google Sheets (جدول بيانات جوجل)

تم تحديث الموقع ليعتمد على **Google Sheets** كقاعدة بيانات رئيسية سهلة التعديل.

---

## الخطوات البسيطة للربط:

### 1️⃣ إنشاء جدول بيانات في Google Sheets
1. افتح [Google Sheets](https://sheets.google.com) وأنشئ جدولاً جديداً.
2. ارفع أو استورد ملف `menu.csv` المرفق مع المشروع:
   - اضغط على **ملف (File)** ⬅️ **استيراد (Import)** ⬅️ **تحميل (Upload)** ⬅️ اختر ملف `menu.csv`.
   - اختر "استبدال ورقة العمل الحالية".

### 2️⃣ الهيكل المطلوب للجدول (العناوين):
تأكد أن السطر الأول يحتوي على العناوين التالية (بالعربية أو الإنجليزية):

| category_name | name | price | note |
|---|---|---|---|
| قهوة ساخنة | قهوة تركي | 30 | سنجل |
| قهوة ساخنة | قهوة تركي | 40 | دبل |

*يمكن استخدام العناوين بالعربية أيضاً:* `القسم` | `الصنف` | `السعر` | `ملاحظات`

---

### 3️⃣ جعل الشيت عاماً (Public) وربطه بالموقع:

#### **الطريقة الأولى الموصى بها (مباشرة وبدون حسابات سحابية):**
1. داخل Google Sheets، اضغط زر **مشاركة (Share)** في الأعلى.
2. غيّر الوصول ليصبح **"أي شخص لديه الرابط" (Anyone with the link can view)**.
3. انسخ رابط الشيت من المتصفح، سيكون بهذا الشكل:
   `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
4. افتح ملف `app.js` وضع الرابط أو الـ ID في المتغير:
   ```javascript
   const GOOGLE_SHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
   ```

---

#### **الطريقة الثانية (عبر خدمات API خارجية مثل SheetDB / OpenSheet):**
إذا كنت تفضل استخدام API جاهز:
1. يمكنك استخدام [OpenSheet](https://opensheet.elk.sh) مجاناً وبدون تسجيل:
   `https://opensheet.elk.sh/YOUR_SPREADSHEET_ID/Sheet1`
2. وضع الرابط في `app.js`:
   ```javascript
   const GOOGLE_SHEET_API_URL = 'https://opensheet.elk.sh/YOUR_SPREADSHEET_ID/Sheet1';
   ```

---

## 📁 الملفات المجهزة المضافة:
- `menu.csv`: يحتوي على كافة المشروبات والأصناف الـ 139 الحالية جاهزة للاستيراد بضغطة زر واحدة.
- `app.js`: يحتوي على محول تلقائي (Auto Transformer) ومرشح CSV ذكي يدعم العربية والإنجليزية.
