# aetox-landing

แลนดิ้งเพจของ [Aetox](https://github.com/Mikedev115/Aetox) — Next.js (App Router) ส่งออกเป็นไฟล์นิ่ง แล้ว GitHub Actions เอาขึ้น GitHub Pages ที่
<https://mikedev115.github.io/aetox-landing/> (อังกฤษ) และ <https://mikedev115.github.io/aetox-landing/th/> (ไทย)

แยกออกมาจากรีโปแอปตั้งแต่ 11 ก.ย. 2026 เพื่อให้คนที่ fork แอปไม่ต้องได้เว็บการตลาดติดไปด้วย และให้เว็บปล่อยได้โดยไม่ต้องผ่าน CI ของแอป

## รัน

```bash
npm install
npm run dev        # http://localhost:3000/aetox-landing/
npm run build      # ส่งออกไป out/
```

`basePath` เป็น `/aetox-landing` ทั้งตอน dev และตอน build เพื่อให้ URL ที่เห็นในเครื่องมีรูปเดียวกับที่ปล่อยจริง

## โครงสร้าง

```
app/(en)/        route /      — layout ตั้ง <html lang="en">
app/(th)/th/     route /th/   — layout ตั้ง <html lang="th">
app/globals.css  design tokens + สไตล์ทั้งหมด (ธีมมืดเป็นค่าเริ่มต้น, สว่างผ่าน data-theme)
components/      Landing.tsx ประกอบทุก section ตามลำดับ · section ละไฟล์ · ui/ dialogs/ icons/
lib/i18n/        en.ts เป็นฐาน · th.ts ต้องมีคีย์ครบเท่ากัน (TypeScript บังคับ)
lib/site.ts      ลิงก์ทุกอันที่เดียว (Store, winget, GitHub, อีเมล, วิดีโอ, privacy)
lib/version.ts   ดึงเลขรุ่นจาก GitHub Releases ตอน build — ที่นี่ไม่มีสำเนาเลขรุ่น
public/assets/   ภาพหน้าจอจากแอปจริง
```

## ข้อตกลง

- **ตัวเลขทุกตัวมาจากงานจริง** วิธีวัดอยู่ที่ [BENCHMARK.md](https://github.com/Mikedev115/Aetox/blob/main/BENCHMARK.md)
  และที่อยู่ของแต่ละตัวเลขอยู่ที่ [docs/PUBLISHED-NUMBERS.md](https://github.com/Mikedev115/Aetox/blob/main/docs/PUBLISHED-NUMBERS.md) ของรีโปแอป
- **เลขรุ่นไม่ต้องแก้ที่นี่** — build อ่านจาก Releases ล่าสุด · build ออฟไลน์ตั้ง `AETOX_VERSION=1.5.28`
- **นโยบายความเป็นส่วนตัวอยู่ที่รีโปแอป** (`https://mikedev115.github.io/Aetox/privacy.html`) เพราะ URL นั้นจดไว้กับ Microsoft Store — ห้ามย้ายมาที่นี่
- ข้อความใน `lib/i18n` ใช้มาร์กอัปย่อได้: `**หนา**` `` `โค้ด` `` `[ข้อความ](url)` — เรนเดอร์โดย `components/ui/Rich.tsx`
- ปล่อยรุ่นแอปแล้วอยากให้ป้ายเวอร์ชันอัปเดตทันที: `gh api repos/Mikedev115/aetox-landing/dispatches -f event_type=aetox-release`
