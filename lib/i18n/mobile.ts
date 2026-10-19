export const mobileCopy = {
  en: {
    status: "MOBILE · TESTING PREVIEW",
    title: "Keep working from your phone.",
    body: "Watch answers stream in live with every tool step, see every chat sorted by project, open delivered files full screen, pick the model and answer approvals. Or talk to the same assistant through Telegram or Discord. Windows still runs the work and keeps your data; provider keys never leave the PC.",
    requirement: "Needs Aetox for Windows 1.9.28 or later (it carries Aetox Link) and Tailscale with HTTPS on the PC and the phone. Keep Windows and Aetox running. Start on the PC: Settings › Mobile, wait for the three Tailscale checks to turn green, press Let my phone connect, and a pairing QR appears.",
    apk: "Download Android test APK",
    notes: "Read preview requirements",
    android: {
      title: "Android · app 0.3.2",
      steps: [
        "Install Tailscale on the phone and sign in to the same account as the PC.",
        "Download the APK below and open it. Android asks once to allow installs from your browser.",
        "Open Aetox Mobile, scan the QR on the PC, then press Allow on the PC.",
      ],
      note: "Android 10 or later. The app finds a newer APK on your PC and updates in one tap.",
    },
    iphone: {
      title: "iPhone · web app, no App Store",
      steps: [
        "Install Tailscale from the App Store and sign in to the same account as the PC.",
        "Point the Camera at the QR on the PC. Safari opens your PC's address; press Allow on the PC.",
        "In the web app open Settings › Install › Download iPhone Web Clip, then iPhone Settings › Profile Downloaded › Install. Or in Safari: Share › Add to Home Screen.",
      ],
      note: "There is no IPA. The profile adds only this full-screen web app (no VPN, MDM or certificate), is made for your own PC's address and can be removed in Settings › General › VPN & Device Management. Updates arrive with Aetox for Windows.",
    },
    pending: "Voice, the camera and installing on a physical phone are not verified yet. This is not a production mobile release.",
  },
  th: {
    status: "มือถือ · รุ่นทดลอง",
    title: "ทำงานต่อจากมือถือ",
    body: "เห็นคำตอบไหลออกมาสดพร้อมขั้นตอนเครื่องมือ เห็นทุกแชทแยกตามโปรเจกต์ เปิดไฟล์ที่ส่งมอบได้เต็มจอ เลือกโมเดล และตอบคำขออนุญาต หรือคุยกับผู้ช่วยตัวเดียวกันผ่าน Telegram และ Discord ทุกงานยังรันและเก็บข้อมูลบน Windows ส่วน provider key ไม่ออกจากเครื่อง PC",
    requirement: "ต้องใช้ Aetox บน Windows รุ่น 1.9.28 ขึ้นไป (มี Aetox Link) และ Tailscale ที่เปิด HTTPS ทั้งบน PC และมือถือ ต้องเปิด Windows กับ Aetox ค้างไว้ เริ่มที่ PC: ตั้งค่า › มือถือ รอให้ช่องตรวจ Tailscale ขึ้นถูกครบสามข้อ กด เปิดให้มือถือเชื่อมต่อ แล้ว QR สำหรับจับคู่จะขึ้นมา",
    apk: "ดาวน์โหลด APK ทดสอบ Android",
    notes: "อ่านเงื่อนไขรุ่นทดลอง",
    android: {
      title: "Android · แอป 0.3.2",
      steps: [
        "ติดตั้ง Tailscale บนมือถือ แล้ว login บัญชีเดียวกับ PC",
        "ดาวน์โหลด APK ด้านล่างแล้วเปิดไฟล์ Android จะถามครั้งเดียวให้อนุญาตติดตั้งจากเบราว์เซอร์",
        "เปิด Aetox Mobile สแกน QR บน PC แล้วกด อนุญาต ที่ PC",
      ],
      note: "รองรับ Android 10 ขึ้นไป แอปหา APK รุ่นใหม่จาก PC และอัปเดตได้ในแตะเดียว",
    },
    iphone: {
      title: "iPhone · เว็บแอป ไม่ต้องผ่าน App Store",
      steps: [
        "ติดตั้ง Tailscale จาก App Store แล้ว login บัญชีเดียวกับ PC",
        "เปิดกล้องส่องไปที่ QR บน PC Safari จะเปิดที่อยู่ของ PC คุณ แล้วกด อนุญาต ที่ PC",
        "ในเว็บแอปเปิด ตั้งค่า › ติดตั้ง › ดาวน์โหลด Web Clip สำหรับ iPhone แล้วไปที่ ตั้งค่า › ดาวน์โหลดโปรไฟล์แล้ว › ติดตั้ง ของ iPhone หรือใน Safari กด แชร์ › เพิ่มไปยังหน้าจอโฮม",
      ],
      note: "ไม่มีไฟล์ IPA โปรไฟล์เพิ่มแค่เว็บแอปเต็มจอนี้ (ไม่มี VPN, MDM หรือใบรับรอง) ทำมาสำหรับที่อยู่ PC ของคุณ และลบได้ที่ ตั้งค่า › ทั่วไป › VPN และการจัดการอุปกรณ์ ของใหม่มากับ Aetox บน Windows",
    },
    pending: "ยังไม่ได้ตรวจการคุยด้วยเสียง การถ่ายรูป และการติดตั้งบนมือถือจริง ไม่ใช่ mobile production release",
  },
};
