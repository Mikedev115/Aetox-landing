# ข้อเสนอ: หลังบ้านของแลนดิ้งเพจ (ร่าง 20 ต.ค. 2026)

## หลักคิด

- **DB น้อยที่สุดเท่าที่จะทำได้** เพราะทุกตารางมีค่าใช้จ่าย ทั้งค่าเครื่อง ความปลอดภัย และงานดูแล
- **เพิ่มเมื่อมีเหตุผล ไม่เพิ่มเผื่อ** แต่ละขั้นมีเงื่อนไขชัดว่าต้องเกิดอะไรก่อนถึงจะทำ
- **วางโครงให้เพิ่มง่าย** ใช้ API ตัวเดียว DB ก้อนเดียว feature ละตาราง ถ้าจะเพิ่ม feature ก็แค่เพิ่ม route กับ migration
- **ไม่เก็บซ้ำสิ่งที่ GitHub มีอยู่แล้ว** ทั้งเลขรุ่น ไฟล์ ขนาด และยอดดาวน์โหลด ให้ไปถามจาก GitHub Releases
- **ผู้ชมไม่แตะ DB** หน้าเว็บยังเป็นไฟล์นิ่ง ข้อมูลถูกดึงตอน build (มี build ทุกวันอยู่แล้ว) แม้คนเข้าเว็บเป็นล้าน ค่า DB ก็เกือบเท่าเดิม

## สภาพตอนนี้

static export → GitHub Pages ไม่มี server และไม่มี DB ข้อมูลที่ต้องแก้มือ:

| ข้อมูล | ที่อยู่ | แก้บ่อยแค่ไหน | ควรอยู่ที่ไหน |
|---|---|---|---|
| เลขรุ่น | `lib/version.ts` | ดึงจาก Releases อยู่แล้ว | ถูกที่แล้ว |
| ลิงก์ APK + หน้า release มือถือ | `lib/site.ts` `MOBILE_APK` `MOBILE_RELEASE` | ทุก release มือถือ (6 commit ในเดือนเดียว) | **GitHub Releases ตอน build** |
| ขนาดตัวติดตั้ง | `lib/numbers.ts` `INSTALLER_MB` | ทุก release | **GitHub Releases ตอน build** (asset size) |
| ขนาดบนดิสก์ | `lib/numbers.ts` `DISK_MB` | ทุก release | git ต่อไป (เป็นขนาดหลังแตกไฟล์ API ไม่มี) |
| ผลวัด benchmark | `lib/numbers.ts` | ตอนวัดใหม่ | git ต่อไป ต้อง review และมีที่มา |
| ข้อความ th/en | `lib/i18n/` | บ่อย | git ต่อไป TypeScript ช่วยเช็กคีย์ให้ครบ |
| ผู้สนับสนุน | `lib/supporters.ts` | 3 ครั้ง | git ไปก่อน ย้ายตอนเฟส 1 |

## เฟส 0 · ตอนนี้ · 0 บาท · ไม่มี DB

ย้ายของที่ GitHub มีอยู่แล้วไปดึงตอน build แบบเดียวกับ `version.ts`

1. `lib/releases.ts` ถามข้อมูลจาก Releases ครั้งเดียวต่อ build แล้วส่งต่อให้ทุกที่ใช้
   - รุ่นเดสก์ท็อป: `Mikedev115/Aetox` releases/latest → tag และขนาดของ `aetox-amd64-installer.exe` → `INSTALLER_MB`
   - มือถือ: `Mikedev115/Aetox-Harness` releases → ตัวล่าสุดที่ tag ขึ้นต้นด้วย `mobile-v` → ลิงก์ APK, หน้า release
2. env override ใช้เหมือน `AETOX_VERSION` (เช่น `AETOX_MOBILE_TAG`) สำหรับ build แบบ offline
3. ถ้าถาม GitHub ไม่ได้ ให้ build ล้มพร้อมบอกว่าต้องตั้งตัวแปรอะไร (ทำแบบ `version.ts`) จะได้ไม่ปล่อยเว็บที่ลิงก์ผิด
4. (ไม่บังคับ) ให้ release workflow ของ repo แอปยิง `repository_dispatch: aetox-release` มา เว็บจะอัปเดตภายในไม่กี่นาที ไม่ต้องรอ build ประจำวัน

ผล: release มือถือหรือเดสก์ท็อปใหม่ ไม่ต้อง commit ที่นี่เลย

## เฟส 1 · เมื่อมี feature แรกที่ "ผู้ใช้ส่งข้อมูลเข้ามา" · ~0 บาท

**เงื่อนไขเริ่ม:** ต้องมี feature ที่คนนอกต้องเขียนข้อมูล ตัวเต็งคือ **ฟอร์มผู้สนับสนุน** (โอนแล้วกรอกชื่อ ยอด และวันที่ เราตรวจกับแอปธนาคารแล้วกดอนุมัติ)

### Stack ที่เสนอ

| ส่วน | ตัวเลือก | เหตุผล |
|---|---|---|
| API | Cloudflare Worker ตัวเดียว | free tier ใหญ่ ไม่มีเครื่องให้ดูแล |
| DB | Cloudflare D1 (SQLite) | อยู่บัญชีเดียวกับ Worker ฟรีที่ขนาดนี้ เป็น SQL ธรรมดา ย้ายออกง่าย |
| กันสแปม | Cloudflare Turnstile | ฟรี ไม่ต้องให้ผู้ใช้แก้ภาพ |
| หน้าแอดมิน | ยังไม่มี อนุมัติผ่าน `wrangler d1 execute` ก่อน เมื่อเริ่มเบื่อค่อยทำหน้าเล็กๆ ไว้หลัง Cloudflare Access | ไม่ต้องเขียนระบบ login เอง |
| เว็บ | GitHub Pages ตามเดิม | ไม่ต้องย้าย |

ตัวเลขฟรีของ Cloudflare (ตามที่รู้ ต้องเช็กราคาจริงอีกครั้งก่อนเริ่ม): Worker 100k request/วัน, D1 5 GB, อ่าน 5M แถว/วัน, เขียน 100k แถว/วัน, Access ฟรีถึง 50 คน

### การไหลของข้อมูล

```
ผู้สนับสนุน → ฟอร์มบนหน้า /supporters/ → POST /api/supporters (Worker + Turnstile) → D1 status='pending'
เรา → อนุมัติ (status='approved')
build ประจำวัน / dispatch → GET /api/supporters?status=approved → ฝังลงหน้านิ่ง
```

คนเข้าเว็บไม่เรียก API เลย มีแค่ตอนส่งฟอร์มกับตอน build

### Schema แรก (ตารางเดียว)

```sql
-- migrations/0001_supporters.sql
CREATE TABLE supporters (
  id           INTEGER PRIMARY KEY,
  display_name TEXT,               -- ชื่อแบบปิดบังที่จะโชว์ NULL = ไม่ระบุชื่อ
  amount_thb   INTEGER NOT NULL,
  supported_on TEXT NOT NULL,      -- YYYY-MM-DD
  transfer_ref TEXT,               -- 4 ตัวท้ายของเลขอ้างอิง ใช้ตรวจกับแอปธนาคาร
  status       TEXT NOT NULL DEFAULT 'pending',  -- pending | approved | rejected
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
```

**ไม่เก็บ:** รูปสลิป เลขบัญชี อีเมล และเบอร์โทร เก็บแค่ที่จำเป็นต่อการตรวจและการโชว์ เพื่อลดภาระ PDPA และไม่ต้องมีที่เก็บไฟล์ ก่อนเปิดฟอร์มต้องเพิ่มเรื่องนี้ในหน้า `/privacy/` ด้วย

ข้อมูลเดิมใน `lib/supporters.ts` import เข้า D1 ครั้งเดียว แล้วลบไฟล์ทิ้ง

## เฟสถัดไป · เพิ่มเมื่อมีเหตุผลเท่านั้น

| feature | ต้องใช้ DB ไหม | วิธีที่ถูกที่สุด |
|---|---|---|
| ยอดดาวน์โหลด | **ไม่** | `download_count` จาก GitHub Releases ตอน build |
| สถิติคนเข้าเว็บ | **ไม่** | Cloudflare Web Analytics (ฟรี ไม่มี cookie) |
| ฟอร์มติดต่อ | **ไม่** | Worker ส่งต่อเข้าอีเมล ไม่ต้องเก็บ |
| waitlist iPhone / newsletter | ใช่ | +1 ตาราง `waitlist(email, lang, created_at)` + route `/api/waitlist` |
| feedback / bug report | ไม่ควร | ส่งไป GitHub Issues |

## กติกาที่ทำให้ "เพิ่มง่าย"

1. Worker ตัวเดียว เส้นทางเป็น `/api/<feature>` เพิ่ม feature คือเพิ่มไฟล์ handler ไฟล์เดียว
2. D1 ก้อนเดียว schema อยู่ใน `migrations/NNNN_<feature>.sql` ใน repo นี้ (หรือ repo `aetox-api` แยก ถ้าไม่อยากให้เว็บกับ API ผูกกัน)
3. เว็บอ่านข้อมูลตอน build เสมอ ถ้าวันไหนต้องใช้ข้อมูลสดจริงๆ ค่อยให้ client เรียก API เป็นรายกรณี
4. เพิ่มตารางต้องตอบให้ได้ว่า GitHub หรือ git เก็บแทนไม่ได้เพราะอะไร

## ค่าใช้จ่ายโดยประมาณ

| เฟส | ต่อเดือน |
|---|---|
| 0 | 0 บาท |
| 1 (ผู้สนับสนุน) | 0 บาท ภายใน free tier |
| 1 + waitlist | 0 บาท ไปจนมีหลักหมื่นรายชื่อ |
| เกิน free tier | Workers Paid ราว 5 USD/เดือน |

## สิ่งที่ต้องให้ Mike ตัดสิน

1. เฟส 0: เริ่มเลยไหม
2. เฟส 1: ฟอร์มผู้สนับสนุนเป็น feature แรกใช่ไหม หรือมีอย่างอื่นสำคัญกว่า
3. API อยู่ใน repo นี้ หรือแยก repo `aetox-api`
4. ใช้ Cloudflare ได้ไหม (ต้องเปิดบัญชี ผมสมัครให้ไม่ได้)
