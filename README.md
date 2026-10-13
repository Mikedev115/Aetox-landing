# aetox-landing

แลนดิ้งเพจของ [Aetox](https://github.com/Mikedev115/Aetox) — Next.js (App Router) ส่งออกเป็นไฟล์นิ่ง แล้ว GitHub Actions เอาขึ้น GitHub Pages ที่
<https://mikedev115.github.io/Aetox-landing/> (อังกฤษ) และ <https://mikedev115.github.io/Aetox-landing/th/> (ไทย)

แยกออกมาจากรีโปแอปตั้งแต่ 11 ก.ย. 2026 เพื่อให้คนที่ fork แอปไม่ต้องได้เว็บการตลาดติดไปด้วย และให้เว็บปล่อยได้โดยไม่ต้องผ่าน CI ของแอป

## รัน

```bash
npm install
npm run dev        # http://localhost:3000/Aetox-landing/
npm run build      # ส่งออกไป out/
```

ตอน dev และ GitHub Pages, `basePath` เป็น `/Aetox-landing` เพื่อให้ URL ตรงกับ project site; Vercel ตั้ง `VERCEL=1` ระหว่าง build จึงเสิร์ฟจากโดเมนรากโดยไม่มี path นำหน้า

## โครงสร้าง

เว็บเป็นหลายหน้า ไม่ใช่หน้าเดียวยาว ๆ — แนวเดียวกับ chatgpt.com: เมนูบนทุกอันคือหน้าของตัวเอง หน้าแรกเล่าเรื่องแบบย่อแล้วชี้ไปหน้าเต็ม ตัวติดตั้งรวมอยู่ที่ `/download/` ที่เดียว นโยบายอยู่ใน footer

```
/            ภาพรวม — Hero · 3 โหมด · teaser ของ features/pricing/safety/work · CTA
/features/   งานทั้ง 11 อย่างเป็นตาราง
/pricing/    สองเส้นทาง + ผู้ให้บริการ + กราฟน้ำหนัก + KPI
/safety/     การ์ดความปลอดภัย + ขอบเขตการเข้าถึง + ลิงก์นโยบายทั้งหมด
/work/       งานจริง 3 ชิ้น + case studies
/faq/        คำถามทั้งหมด
/download/   Store · winget · GitHub Releases · รุ่น/ขนาด · การถอน
/privacy/    นโยบายความเป็นส่วนตัว
```

ทุกหน้ามีคู่ภาษาไทยที่ `/th/…` เหมือนกันหมด

```
app/(en)/        route /      — layout ตั้ง <html lang="en">  · โฟลเดอร์ละหน้า page.tsx บรรทัดเดียว
app/(th)/th/     route /th/   — layout ตั้ง <html lang="th">  · โครงเดียวกัน
app/globals.css  design tokens + สไตล์ทั้งหมด (ธีมมืดเป็นค่าเริ่มต้น, สว่างผ่าน data-theme)
components/      Page.tsx = Shell (header/footer/dialogs) + PageHead + pageMetadata ที่ทุกหน้าใช้
                 Landing.tsx = หน้าแรก · pages/ = หน้าละไฟล์ · section ละไฟล์ · ui/ dialogs/ icons/
lib/i18n/        en.ts เป็นฐาน · th.ts ต้องมีคีย์ครบเท่ากัน (TypeScript บังคับ) · pages.* คือหัวหน้าและ meta ของแต่ละหน้า
lib/site.ts      PAGES + pagePath() กำหนดว่ามีหน้าอะไรบ้าง · ลิงก์นอกทุกอันที่เดียว (Store, winget, GitHub, อีเมล, วิดีโอ)
lib/version.ts   ดึงเลขรุ่นจาก GitHub Releases ตอน build — ที่นี่ไม่มีสำเนาเลขรุ่น
public/assets/   ภาพและวิดีโอของแอป (ดูหัวข้อ "ภาพและวิดีโอ") · og.png · promptpay-qr.png
```

เพิ่มหน้าใหม่: ใส่คีย์ใน `PAGES` ของ `lib/site.ts` → เพิ่ม `pages.<key>` ใน en.ts/th.ts → เขียน `components/pages/<Key>Page.tsx` → วาง `page.tsx` ใน `app/(en)/<key>/` และ `app/(th)/th/<key>/` เมนูบน footer และปุ่มสลับภาษาจะรู้จักหน้านั้นเอง

## ดีไซน์

ภาษาภาพตั้งแต่ 20 ก.ย. 2026 ถอดมาจาก tryprofound.com: พื้นดำล้วน หมึกเดียว (#edf2f5) เส้นขอบสีเดียว (#232323) ที่วาดทุกกรอบ หัวเรื่อง Inter น้ำหนัก 500 ขนาด 48px tracking -0.0225em ปุ่มสูง 32px มุม 8px คอนเทนเนอร์ 1088px มีเส้นประแนวตั้งสองข้าง ระยะห่างระหว่าง section 120px หัว section ชิดซ้าย การ์ดใหญ่เป็นสี่เหลี่ยมมีขอบ ไม่ถมสี ทั้งหมดอยู่ใน token ต้นไฟล์ `app/globals.css`

สองชิ้นที่เป็น canvas: `components/ui/HeroLight.tsx` (ลำแสงหลัง h1 บนหน้าแรก) และ `components/Network.tsx` (สนามโหนดจากไอคอน provider ใน sprite + ประโยคที่ค่อยชัดจากเบลอตามการเลื่อน, section สูง 250vh ข้างในติดหนึบ) ทั้งคู่ปิดแอนิเมชันเมื่อ `prefers-reduced-motion`

## ภาพและวิดีโอ

ชุดใหม่ทั้งหมด 13 ต.ค. 2026 (ชุดเดิมจาก 11 ก.ย. ถูกถอดทั้งชุด) แนวคิดจากเว็บใหญ่ (Linear, Cursor, Notion, Raycast, Claude):
hero ตัวเดียวและขยับได้ · วิดีโอเฉพาะหัวข้อหลัก · การ์ดเล็กใช้ภาพ crop เฉพาะแผงที่พิสูจน์ประโยคบนการ์ด ไม่ย่อทั้งหน้าต่าง ·
CTA ท้ายหน้าไม่มีภาพ · การ์ด "ความจำ" ถูกถอด 13 ต.ค. ตามฟีเจอร์ที่ถอดออกจากแอปไปแล้ว (เหลือ 11 การ์ด)

ทุกไฟล์ถ่ายจาก **โรงถ่าย** `D:\Aetox\Aetox\promo` — คอมโพเนนต์จริงของแอปกับข้อมูลในบท ถ่ายซ้ำได้ภาพเดิมทุกครั้ง
ไม่มีชื่อ path หรือคีย์จริงหลุด ทุกไฟล์มีคู่ `-th` / `-en` และกว้างเป็น 2 เท่าของที่วาดบนจอพอดี:

| ไฟล์ | ที่วาง | วาดที่ (CSS px) | ไฟล์ |
|---|---|---|---|
| `hero-*.mp4` + `.png` (poster) | Hero หน้าแรก | 1008 × 599 | 2016 × 1198 วิดีโอวน ~20 วิ |
| `mode-assist/code/team-*.mp4` + `.png` | 3 โหมด (เล่นเฉพาะแท็บที่เลือก) | 574 × 359 | 1148 × 718 วิดีโอวน ~13 วิ |
| `uc-*-*.png` | การ์ดใน carousel / `/features/` | 374 × 271 | 748 × 542 |

วิดีโอเข้ารหัส H.264 ~1.5 Mbit/s (ไฟล์ละ 1–2 MB) เล่นเองแบบปิดเสียง และหยุดอยู่ที่ poster เมื่อ `prefers-reduced-motion`
— `components/ui/Frame.tsx` รับ `shot.video` · `components/Modes.tsx` สลับวิดีโอตามแท็บ

**ถ่ายใหม่** (ต้องมี Chrome และ ffmpeg ที่มี `h264_nvenc`; สคริปต์ชี้ไปที่ตัวของ CapCut):

```bash
cd D:/Aetox/Aetox/promo && npx vite build && npx vite preview --port 5199   # หรือ preview "studio" ใน .claude/launch.json
node landing/shoot-hero.mjs                 # S01
node landing/shoot-modes.mjs                # S02–S04
node landing/shoot-cards.mjs S05 S09 …      # การ์ด (ไม่ใส่ = ทุกใบ)
```

ไฟล์ออกที่ `output/shots/` แล้วก๊อปเข้า `public/assets/` ตามชื่อในตาราง บทของแต่ละช็อตอยู่ใน `promo/src/scenes/landing-*.ts`

**ยังไม่มีภาพ** (กรอบว่างที่บอกเลขช่อง ผ่าน `components/ui/Slot.tsx`): S08 n8n (การ์ดออโตเมชั่นและการ์ดงานจริง — ต้องมี n8n จริง) ·
S13 poster ของวิดีโอ YouTube · การ์ดเทอร์มินัลยังเป็นข้อความ

## ข้อตกลง

- **ตัวเลขทุกตัวมาจากงานจริง** วิธีวัดอยู่ที่ [BENCHMARK.md](https://github.com/Mikedev115/Aetox/blob/main/BENCHMARK.md)
  และที่อยู่ของแต่ละตัวเลขอยู่ที่ [docs/PUBLISHED-NUMBERS.md](https://github.com/Mikedev115/Aetox/blob/main/docs/PUBLISHED-NUMBERS.md) ของรีโปแอป
- **เลขรุ่นไม่ต้องแก้ที่นี่** — build อ่านจาก Releases ล่าสุด · build ออฟไลน์ตั้ง `AETOX_VERSION=1.5.28`
- **นโยบายความเป็นส่วนตัวอยู่ที่รีโปแอป** (`https://mikedev115.github.io/Aetox/privacy.html`) เพราะ URL นั้นจดไว้กับ Microsoft Store — ห้ามย้ายมาที่นี่
- ข้อความใน `lib/i18n` ใช้มาร์กอัปย่อได้: `**หนา**` `` `โค้ด` `` `[ข้อความ](url)` — เรนเดอร์โดย `components/ui/Rich.tsx`
- ปล่อยรุ่นแอปแล้วอยากให้ป้ายเวอร์ชันอัปเดตทันที: `gh api repos/Mikedev115/aetox-landing/dispatches -f event_type=aetox-release`
