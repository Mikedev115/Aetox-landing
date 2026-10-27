export const mobileCopy = {
  en: {
    status: "MOBILE",
    title: "Keep working from your phone.",
    body: "Watch answers stream in live with every tool step, see every chat sorted by project, open delivered files full screen, pick the model and answer approvals. Or talk to the same assistant through Telegram or Discord. Windows still runs the work and keeps your data; provider keys never leave the PC.",
    requirement: "Needs Aetox for Windows 1.9.28 or later (it carries Aetox Link) and Tailscale with HTTPS on the PC and the phone. Keep Windows and Aetox running. Start on the PC: Settings › Mobile, wait for the three Tailscale checks to turn green, press Let my phone connect, and a pairing QR appears.",
    apk: "Download Android APK",
    notes: "Release notes",
    android: {
      title: "Android · app 0.3.4",
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
  },
  th: {
    status: "มือถือ",
    title: "ทำงานต่อจากมือถือ",
    body: "เห็นคำตอบไหลออกมาสดพร้อมขั้นตอนเครื่องมือ เห็นทุกแชทแยกตามโปรเจกต์ เปิดไฟล์ที่ส่งมอบได้เต็มจอ เลือกโมเดล และตอบคำขออนุญาต หรือคุยกับผู้ช่วยตัวเดียวกันผ่าน Telegram และ Discord ทุกงานยังรันและเก็บข้อมูลบน Windows ส่วน provider key ไม่ออกจากเครื่อง PC",
    requirement: "ต้องใช้ Aetox บน Windows รุ่น 1.9.28 ขึ้นไป (มี Aetox Link) และ Tailscale ที่เปิด HTTPS ทั้งบน PC และมือถือ ต้องเปิด Windows กับ Aetox ค้างไว้ เริ่มที่ PC: ตั้งค่า › มือถือ รอให้ช่องตรวจ Tailscale ขึ้นถูกครบสามข้อ กด เปิดให้มือถือเชื่อมต่อ แล้ว QR สำหรับจับคู่จะขึ้นมา",
    apk: "ดาวน์โหลด APK สำหรับ Android",
    notes: "รายละเอียดรุ่น",
    android: {
      title: "Android · แอป 0.3.4",
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
  },
  zh: {
    status: "手机",
    title: "在手机上接着干活。",
    body: "答案边生成边看，每一步工具动作都看得见；每个聊天按项目分开；交付的文件可以全屏打开；能换模型，也能就地答复审批。还可以通过 Telegram 或 Discord 和同一个助手说话。活和资料仍然在 Windows 上跑、在 Windows 上存，provider key 不离开电脑。",
    requirement: "需要 Windows 版 Aetox 1.9.28 或更高（这版带 Aetox Link），并在电脑和手机上装好 Tailscale 且开启 HTTPS。Windows 和 Aetox 要一直开着。先在电脑上：设置 › 手机，等 Tailscale 的三项检查全绿，按“让我的手机连接”，出现配对二维码。",
    apk: "下载 Android APK",
    notes: "版本说明",
    android: {
      title: "Android · 应用 0.3.4",
      steps: [
        "在手机上安装 Tailscale，登录和电脑同一个账号。",
        "下载下面的 APK 并打开。Android 会问一次是否允许从浏览器安装。",
        "打开 Aetox Mobile，扫电脑上的二维码，然后在电脑上按“允许”。",
      ],
      note: "需要 Android 10 或更高。应用会从电脑上找到更新的 APK，一下就能升级。",
    },
    iphone: {
      title: "iPhone · 网页应用，不用 App Store",
      steps: [
        "从 App Store 安装 Tailscale，登录和电脑同一个账号。",
        "用相机对准电脑上的二维码。Safari 会打开你电脑的地址；在电脑上按“允许”。",
        "在网页应用里打开 设置 › 安装 › 下载 iPhone Web Clip，然后到 iPhone 的 设置 › 已下载描述文件 › 安装。或者在 Safari 里：分享 › 添加到主屏幕。",
      ],
      note: "没有 IPA 文件。这个描述文件只添加这一个全屏网页应用（不含 VPN、MDM 或证书），按你自己电脑的地址生成，可以在 设置 › 通用 › VPN 与设备管理 里删除。更新随 Windows 版 Aetox 一起来。",
    },
  },
};
