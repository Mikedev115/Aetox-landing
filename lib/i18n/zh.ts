// Chinese copy (Simplified) — the third language, key for key with ./en.ts.
// TypeScript enforces that through the Dict type in ./index.ts.
//
// Strings may use a little inline markup rendered by <Rich>: **bold**, `code`,
// [text](url). Every number here comes from a real run — the sizes and
// counts are {NAME} placeholders filled from lib/numbers.ts, so they are
// written once; docs/PUBLISHED-NUMBERS.md says where each one is measured.

export const zh = {
  meta: {
    title: "Aetox · 交给它，就有人做",
    description:
      "说出你要什么，Aetox 把活干完：一台属于你的智能体公司处理日常事务，加上一套让现有模型发挥更好的编码系统。免费，Windows 专用。",
    ogDescription: "在你的电脑上组建一家公司。普通模型也能做到超出你想象的事。",
    ogAlt: "Aetox：交给它，就有人做。在你的电脑上组建一家公司。同一个模型下，安全代码 93.3% 对 68.9%",
  },
  nav: {
    overview: "总览",
    uses: "能做什么",
    allUses: "全部能力",
    pricing: "实际价格",
    safety: "安全",
    work: "真实工作",
    faq: "常见问题",
    supporters: "支持项目",
    download: "下载",
    privacy: "隐私",
    menu: "菜单",
    theme: "切换明暗主题",
    lang: "中文",
    langTitle: "切换语言",
    announceBefore: "Aetox ",
    announceAfter: " 已发布 · 看看改了什么",
    backToTop: "Aetox · 回到顶部",
  },
  hero: {
    eyebrow: "The Model Multiplier.",
    h1Before: "把活交给我们，",
    h1Highlight: "把结果交回你手",
    h1After: "",
    lede: "说出你想要什么。Aetox 排好团队和工具，把做完的活交回给你。",
    download: "下载 Windows 版",
    other: "查看全部安装方式",
    fine: "单个安装包 {INSTALLER_MB} MB · 用你已有的模型，或在本地免费运行一个",
  },
  doors: {
    ceo: {
      k: "助手 · 团队",
      h1: "顺着你的工作来，",
      hl: "不用你去迁就它",
      kicker: "在你的电脑上组建一家公司：你是 CEO，其余是你的团队。",
      p: "会议录音、小票、文件或调研，回来的都是你文件夹里的真实文件，而不是聊天框里的文字。它按部分了解你，不必把一切塞进每次请求。定下目标就把整件活交出去：内容团队随安装包一起来，只管开工；对外发布的东西由你点头。",
      chain: ["你", "助手", "公司", "部门", "团队", "智能体"],
      feed: [
        { who: "content", what: "可可新品的推文草稿写完，已交给 editor" },
        { who: "editor", what: "审过，回退两处用词" },
        { who: "video", what: "15 秒短片渲染完成 · menu-cocoa.mp4" },
        { who: "等你", what: "批准推文发到店铺页面", ask: true },
      ],
      more: "助手和团队怎么运作",
    },
    code: {
      k: "开发",
      h1: "写出跑得起来的代码，",
      hl: "并记住这个项目定过什么",
      p: "打开真实项目：真实文件、编辑器、终端、语言服务器和 git。说完工之前先跑项目自己的测试，按项目分别记忆，不必重复交代。系统让模型把代码写得更好——这是我们在代码上唯一卖的东西，不是模型本身的聪明。",
      nums: [
        { n: "{SECURE_US}%", vs: "对 {SECURE_NEXT}%", s: "安全代码 · GPT-6 Luna" },
        { n: "{SECURE_TERRA}%", vs: "对 {SECURE_TERRA_NEXT}%", s: "安全代码 · GPT-5.6 Terra" },
      ],
      cond: "CWEval，隐藏测试，三轮，对比次优的一份 harness（Luna 上是 omp；Terra 上 OpenCode、omp、pi 并列）；每个 harness 用同一个模型。[报告，以及 Aetox 输在哪里](REPORTS)",
      more: "开发台怎么工作",
    },
  },
  // The proof wall on /features/: one card per area, every card the same shape.
  wall: {
    cards: [
      { k: "代码 · 安全", n: "{SECURE_US}%", vs: "对 {SECURE_NEXT}%，次优的一份 harness：[{SECURE_NEXT_NAME}](CODING_LUNA)", cond: "CWEval 上的安全代码 · GPT-6 Luna · 三轮，隐藏测试" },
      { k: "代码 · 长任务", n: "{MULTI_US}%", vs: "对 {MULTI_NEXT}%，次优的一份 harness：[{MULTI_NEXT_NAME}](CODING_TERRA)", cond: "SlopCodeBench 上通过的测试 · GPT-5.6 Terra · 三轮" },
      { k: "幻灯片", n: "{SLIDES_ON}", vs: "对 {SLIDES_OFF}，同一个应用关掉技能", cond: "泰语幻灯片，自动检查 · GPT-6 Luna · 三次" },
      { k: "泰语发票", n: "{INVOICE_US}", vs: "对 {INVOICE_OTHERS}，另外两份 harness", cond: "增值税、预扣税、佛历年 · [17 项隐藏测试，我们团队自己写的](INVOICE_TESTS) · GPT-6 Luna" },
      { k: "团队", n: "{CTX_HELPERS}", vs: "对 {CTX_ALONE}，同样的活但不用帮手", cond: "只算主智能体的上下文，在一次真实会话里，不是控制变量的实验 · 非 OpenAI 价格下成本降低 {HELPER_SAVE}%" },
      { k: "视频", n: "{CUT_TO} 秒", vs: "从原片 {CUT_FROM} 秒", cond: "掐掉四段静音、剪掉一处口头语 · 是真文件，可以继续剪" },
    ],
    note: "每张卡两边用的是同一个模型，都是 OpenAI 的公开模型：[GPT-6 Luna](MODEL_LUNA) 和 [GPT-5.6 Terra](MODEL_TERRA)。Aetox 落后之处：比别的 harness 花更多 token（约 90% 是缓存命中）—— 这是把广度一次性交给大任务的代价，而不是一片一片地要；普通任务不会多花。在大模型上也不是最快的。[方法、每一轮结果和它输在哪里](REPORTS)",
  },
  why: {
    h2: "模型负责想，其余交给这套环境",
    items: [
      { b: "手。", s: "真实的文件、真实的浏览器、真实的终端。模型写，Aetox 把 .xlsx、幻灯片、commit 交回来。" },
      { b: "自己的上下文架构。", s: "不会因为存在就发送。系统知道的东西被映射成结构 —— 分成类别，作为节点彼此相连 —— 运行只发送这项活碰到的点，prompt 按活组装。技能和 MCP 是一个只有名字的架子，打开时才为正文付费：五十个技能和一个技能同价，每个 agent 各取所需。" },
      { b: "模型不知道的知识。", s: "技能里装着模型猜不到的东西：幻灯片房间的 1280×720 画布、攻击者怎么绕开路径检查、泰语发票怎么取整。" },
      { b: "技能长在系统里，不是贴上去的。", s: "每个技能都对着 Aetox 自己的工具、检查器和文件生成器来写，模型读完就能用上合手的手。新技能或改过的技能都要在同一个模型上开、关各测一遍；没帮上忙的就拿掉。" },
      { b: "交回之前先自查。", s: "跑测试、打开自己做出来的文件，然后直说哪部分它证明不了。" },
    ],
    foot: "同一套 harness 驱动全部 {PROVIDERS} 家服务商，换模型时提升也跟着走。",
  },
  demo: {
    h2: "一件活，从下指令到做完",
    sub: "一个单页咖啡店网站：计划、每一步工具动作，以及做完的页面，都在真实运行的应用里。",
    note: "用真实应用走过的演示，不是跑分。",
    imgAlt:
      "Aetox 窗口：要求做一个单页咖啡店网站，聊天里出现四步计划并逐步打勾，右侧成果面板显示完整计划以及它如何判断做完",
    frameAddr: "Aetox · 计划 4/4",
  },
  models: {
    h2: "用你已经在付费的模型",
    p: "三条路，挑你手上已有的那条。聊天中途也能换模型，全部上下文跟着走。",
    ways: [
      { k: "直接登录", h: "你已有账号", s: "点登录就行，不用复制 key。" },
      { k: "填 key", h: "你在付费的服务商", s: "任何一家的 API key，或你自己的 OpenAI 兼容端点。" },
      { k: "在自己机器上", h: "不花钱", s: "输入的内容不出这台机器，断网也照样用。" },
    ],
    free: "免费",
    pics: { comfy: "ComfyUI · 生成图片", sd: "Stable Diffusion WebUI · 生成图片" },
    picsNote: "用你自己的显卡出图，接 ComfyUI 或 Stable Diffusion WebUI（Forge Neo、Forge 或 A1111），也包括 FLUX.2 klein",
    more: "查看全部 {PROVIDERS} 家",
  },
  areas: {
    h2: "一个方面一个方面看进去",
    rows: [
      { k: "开发", s: "Agent 模式把整个项目做到底；Editor 模式让你自己写，它在旁边帮。真实的语言服务器、Git 和终端。" },
      { k: "助手", s: "会议、小票、调研和原始数据，变成能直接打开的文件：摘要、Excel、Word 和 PowerPoint。" },
      { k: "团队", s: "把整件活交给现成的团队。看得见谁做了什么、交回了什么、花了多少钱。" },
      { k: "工作室", s: "长视频变成带字幕的短片，接着自己剪。" },
      { k: "手机", s: "在安卓或 iPhone 上用电脑上的 Aetox，key 不离开电脑。" },
      { k: "CLI", s: "终端里的代码台，和应用共用 key、聊天记录和记忆。" },
    ],
  },
  close: {
    h2: "你的机器、你的 key、你说了算",
    p: "聊天和文件都留在你的磁盘上，中间没有我们的服务器。key 锁在你的 Windows 账户上，至于它可以不问就做多少事，由你定。",
    safety: "安全细节",
    btn: "下载 Windows 版",
    ways: "Microsoft Store · 安装包 · CLI",
  },
  security: {
    eyebrow: "aetox-security",
    h2: "我们的安全技能：同一个模型，写出扛得住攻击的代码",
    sub: "每个 harness 用同一个 GPT 模型测：{SECURE_US}% 对 {SECURE_NEXT}%，{SECURE_TERRA}% 对 {SECURE_TERRA_NEXT}%。",
    chart: "只打开这一个技能，同一个模型在 15 个函数里写出 {SKILL_ON} 个既正确又扛得住攻击的，原来是 {SKILL_OFF} 个。",
    models: { budget: "GPT 经济款模型", large: "GPT 大模型" },
    off: "关闭技能",
    on: "开启技能",
    others: "其他 harness",
    holesTitle: "补上的漏洞 · 十次里漏了几次",
    holes: [
      { b: "SSRF：让服务器去请求攻击者指定的地址", n: "{HOLE_SSRF}" },
      { b: "往 HTTP header 里注入换行", n: "{HOLE_HEADER}" },
      { b: "往日志里注入换行", n: "{HOLE_LOG}" },
      { b: "用户传来的正则把机器吃满", n: "{HOLE_REGEX}" },
    ],
    note: "开了技能，代码功能一样好用：它只是加防护，不拿功能来换。关掉技能时，Aetox 和其他 harness 落在同一档——差距就是这一项技能，而它从安装起就开着。用 GPT-6 Luna（经济款）和 GPT-5.6 Terra（大模型）测，CWEval，每种设置五轮 · [看这次测试](SECURITY_BENCH)",
  },
  network: {
    lines: [
      "你用着的每一个模型、每一个编辑器、每一个运行时，",
      "同一套 harness 从每一个里多榨出一点。",
    ],
  },
  modes: {
    items: [
      {
        title: "助手",
        lead: "把活做完的助手，不只是回答问题。",
        body: "指给它一文件夹小票、两小时的会议录音，或者一个要翻二十个网站的问题。它自己读、自己做，把你的待办和会议笔记留着，也能读你的日历，最后结果落到你的文件夹里，是真实文件，不是聊天框里的文字。活大了就从同一个聊天里交给团队、部门或整家你任命好的公司。",
        addr: "Aetox · 助手",
        alt: "助手之门：问哪些商品卖得最好，它逐个工具读销售文件，回答前三名的表格，然后它写出的 Excel 摘要就在聊天旁边打开",
      },
      {
        title: "开发",
        lead: "写完、跑测试、通过，才说做完了。",
        body: "文件树、编辑器、真实终端，标签页想开多少开多少。它在你打开的项目里干活，读 AETOX.md 或 CLAUDE.md，说完工之前先跑项目自己的测试，按项目记忆，并直白写下哪部分它没法验证。",
        proof: {
          label: "同一个模型下的安全代码 · CWEval func-sec@1，GPT 经济款模型",
          note: "11 个任务 × 2 个模型 × 3 轮，用隐藏测试判定。领先来自随应用带的安全技能；关掉它，Aetox 就和其他几份落在同一档。输的地方是经济款模型上的一个 SWE-bench bug，以及大模型上的耗时，另外它花更多 token。[看报告](CODING_BENCH)",
        },
        addr: "Aetox · 开发",
        alt: "开发台：要求修一个叠加优惠券算错的总额，它读代码，改两个文件并给出 diff，然后在旁边的终端跑 npm test：42 个全过",
      },
    ],
  },
  company: {
    kick: "团队 · 部门 · 公司",
    h2: ["你的 AI 公司", "为整栋楼干活"],
    p: "告诉一个助手就行。它把整件活交给团队、部门或你任命的整家公司，而你在公司房间里看每个人干活。",
    alt: "Aetox 的公司房间：玻璃墙后木地板的办公室，content、editor、video 三个机器人智能体坐在各自桌前，房间中央是投影地球",
    live: "实时 · 公司房间 · 内容团队",
    kpi: ["今天完成", "正在做", "等你"],
    pins: [
      { tool: "doc_write", what: "新品推文" },
      { tool: "review", what: "改两处" },
      { tool: "video · render", what: "" },
      { tool: "Team head", what: "汇总中" },
    ],
    feed: [
      { who: "content", what: "热可可新品推文草稿完成，交给 editor" },
      { who: "editor", what: "审过，回退两处用词" },
      { who: "content", what: "按 editor 的意见改好，第二轮发出" },
      { who: "video", what: "15 秒短片渲染完成 · menu-cocoa.mp4" },
      { who: "team head", what: "推文、封面和短片收齐，交给助手" },
      { who: "等你", what: "批准推文发到店铺页面", ask: true },
    ],
    chain: ["你", "助手", "公司", "部门", "团队", "智能体"],
    pillars: [
      { title: "看得见每个人在干活", body: "每个智能体坐在自己的桌前，随着正在用的工具动作。负责人有自己的桌子和职级，做完的活会被搬走送出去，房间可以选园区或单栋楼。" },
      { title: "每一层负责人自己会想", body: "你的原话一字不改地送到每一层负责人手上。负责人拆活、审手下、打回重做，部门可以同时把活派给几个团队。" },
      { title: "结果是真的文件", body: "成果落在团队的文件夹里，再以卡片出现在助手的回答中。任何要对外发布或送出去的东西，助手都先问你。" },
    ],
  },
  video: {
    kick: "做视频、剪视频",
    h2: "一句话下单，然后自己接着剪",
    lead: "一句话要一条短片：它自己设计、渲染，然后在聊天旁边打开给你看。哪里不满意就说，或者打开同一个 `.cut` 文件，在多轨时间线上自己改：智能体和你改的是同一个文件。",
    body: "按词切、压掉静音、改听错的词，加文字、字幕和关键帧，整条时间线可以实时播放。关掉应用再打开，撤销依然有效；转写和渲染这类长活放到后台跑，带进度。",
    chips: ["宣传短片", "口播视频，按词切", "从语音生成字幕"],
    proof: "这条片子里：17.5 秒的屏幕演示在本机转写，掐掉四处静音、剪掉一个口头语，剩下 11.1 秒。然后人把语音引擎听错的那句改回来，再播一遍。",
    addr: "Aetox · 剪辑室 · promo.cut",
    alt: "聊天旁边的 Aetox 剪辑室：从屏幕演示剪出来的宣传片在多轨时间线上，有标题、口播片段、字幕、词和背景音乐。人双击第一句字幕，改掉听错的应用名，然后播放：标题渐渐放大，字幕跟着语音走。",
  },
  uses: {
    h2: "让 Aetox 接下你每天重复的活，在你的机器上，不在别人的云里",
    prev: "上一个",
    next: "下一个",
    cards: [
      {
        title: "小票与发票",
        body: "一文件夹小票变成真的 Excel。图像里的字它自己读，泰文英文都行，日期能排序，SUM 能算。图片不出这台机器。",
        alt: "Aetox 从图片里读出文字，再用文字回答",
      },
      {
        title: "视频与音频",
        body: "两小时的会议变成一份摘要，说清每件事在第几分钟。它在本机转写，也读屏幕上的字，还能把听不懂的语言的短片翻出来。",
        alt: "Aetox 把短片转写成文字，附泰语翻译和时间点",
      },
      {
        title: "会议室",
        body: "开会前先写议程，录音可以中途停再续，最后拿到原始音频、逐字稿，以及一份写明谁在第几分钟说了什么的摘要。转写在你自己的机器上完成。",
        alt: "一次录制会议的摘要：讨论的事和结论，各自标着第几秒说的，还有两项待办，带负责人和截止时间",
      },
      {
        title: "网页",
        body: "它在自己窗口里打开真实页面，读，然后点击、输入、选下拉、提交表单，你在旁边看着，随时可以叫停。",
        alt: "Aetox 在应用内驱动真实浏览器，开着五个标签页",
      },
      {
        title: "找资料",
        body: "“找 20 家泰国中小企业真能用的 CRM，做成对比表格。”6 分 51 秒后拿到一份 20 行的 .xlsx，按价格排好，每一行都带着数字的出处链接。",
        alt: "",
      },
      {
        title: "自动化",
        body: "用人话说明白，就得到一条每个节点都接好的 n8n 工作流。它会接你自己跑的 n8n 或 Windmill，撞上真实的报错，读懂系统回的话，再试到通过。",
        alt: "Aetox 自己搭出来的十一个节点的 n8n 工作流",
      },
      {
        title: "Git",
        body: "二十五个改动过的文件，一句话：它把文件分成该在一起的几组提交，每条信息自己写，要提交哪些由你勾。也可以手动提交：两种情况面板都显示每一处 diff。",
        alt: "Git 面板把 25 个改动文件分成 3 组提交，每组都有写好的信息，每个文件都有勾选框",
      },
      {
        title: "代码地图",
        body: "打开一个 741 个文件的项目，看成一张地图：每个点是文件，大小按被引用次数，每条线是一次引用。问哪个文件最大，它就把它在你的桌面上打开。",
        alt: "项目 741 个文件中 150 个的力导向地图，点的大小按引用次数，旁边聊天里列出最大的源文件",
      },
      {
        title: "团队",
        body: "把想要的说给助手。它自己做，或者用你的原话把整件活交给团队、部门或整家你任命的公司，然后在同一个聊天里回报。工作显示成一棵树。任何一行都能停，问题就在被问的地方回答。",
        alt: "委派树：助手把活交给内容团队，负责人再分给写手、设计和编辑，每一行都带状态和文件",
      },
      {
        title: "一句话装扩展",
        body: "贴一个 MCP 链接、一行 claude mcp add、一个 GitHub 页面，或者只说个名字。它找到官方服务端，检查要不要 key 或登录，然后给你一张卡片。你不按，就什么都不装。",
        alt: "Playwright MCP 安装卡片：来源 npm、将要执行的命令、不需要 key、谁能用，还有一个等着的安装按钮",
      },
      {
        title: "在终端里",
        body: "不带窗口的代码台：在任意项目文件夹输入 aetox。工作内容打印在输入框上方，审批就地回答，和应用的 key、聊天、记忆共用。独立安装包，不在 Microsoft Store。",
        alt: "Windows Terminal 里的 aetox 控制台：一次代码搜索和一次修改，然后输入框上方一张请求运行 npm test 的卡片",
      },
    ],
    researchStats: {
      label: "那次活里的数字",
      items: [
        { unit: "分", k: "从下指令到拿到文件" },
        { unit: "次", k: "工具调用" },
        { unit: "行", k: "在表格里" },
        { unit: "行", k: "留空并写明原因" },
      ],
    },
  },
  pricing: {
    h2: "免费，想清楚让谁来做",
    p: "程序本身不要钱：没有我们的订阅、没有付费档、不用注册账号。你只挑让哪个模型来想，聊天中途也能换。免费用，但不附赠云端模型：真要做活就得有模型——你的账号或 key，或者跑在自己机器上的一个。",
    all: "查看全部服务商",
    local: {
      title: "跑在你自己的机器上",
      price: "免费",
      sub: "不需要 key",
      points: ["接你已装好的 Ollama 或 LM Studio", "输入的内容不出这台机器", "断网也能继续用"],
      who: "适合日常活 · 不能出组织的资料",
    },
    provider: {
      title: "用你信得过的服务商",
      price: "按用量付费",
      sub: "{PROVIDERS} 家可选",
      points: [
        "你按用量付给他们，我们不加成",
        "聊天中途换服务商或模型，上下文完整跟过去",
        "你的机器直接和他们通信，不经过我们",
      ],
      who: "适合难题 · 需要最强模型的工作",
      more: "+{PROVIDERS_MORE}",
    },
    note: "**现在不用急着决定** 装好后可以直接打开应用和它的指南。真要它干活时再接模型：用已有的账号或 key，或者通过 Ollama / LM Studio 跑本地模型。",
  },
  weight: {
    h2: "轻到可以整天开着",
    p: "一个因为卡机器而被你关掉的助手，最后就是你不会用的助手。Aetox 是两个文件，一共 {DISK_MB} MB（窗口和引擎），界面用 Windows 自带的 WebView2 画出来。",
    benchLabel: "安装后占用的磁盘，越短越好",
    aetoxType: "AI agent",
    cometType: "AI 助手",
    foot: "约为 Claude Code 的 **1/2** · Cursor 的 **1/7** · VS Code 的 **1/9**（按整数说）。当然类别不同：CLI 没有窗口，IDE 是另一种活用的工具；公平的比法是各自在你这样的机器上占多少盘。对手测于 2026 年 7 月 27 日，Aetox 测于 2026 年 10 月 26 日，v1.10.17，两个文件都算。方法在 [BENCHMARK.md](https://github.com/Mikedev115/Aetox/blob/main/docs/reports/BENCHMARK.md)。测试数量和运行数字沿用 README 里的日期。",
    kpis: [
      { unit: "MB", k: "占你机器上的磁盘", s: "两个文件 · 安装包 {INSTALLER_MB} MB" },
      { unit: "项", k: "每次发布前都通过", s: "Go {TESTS_GO} · UI {TESTS_UI}" },
      { unit: "ms", k: "组装一轮", s: "占用内存 174.9 KB · 2026 年 8 月 13 日测" },
      { unit: "个", k: "装好就在模型手里", s: "每次请求约 {TOKENS_PER_REQUEST} token" },
    ],
  },
  safety: {
    h2: "中间没有我们的服务器",
    sub: "历史记录和文件留在干活的那台机器上。没有使用统计，没有账号。用云端模型时，发给模型的内容从你的机器直接到他们那里。就算模型跑在本地，网页搜索、接进来的服务和在线语音仍然要联网。",
    cards: [
      {
        title: "你的对话和文件留在这里",
        body: "只存在你的机器上，泰文和英文都能搜，想带走就导出成文件。如果用 Ollama 或 LM Studio 跑本地模型，整台机器断网也照样用。",
      },
      {
        title: "key 加密，密码库锁死",
        body: "API key 放在它自己的文件里，用你的 Windows 账户加密，并自动从日志里剔除。`.ssh` `.aws` `.gnupg`、Windows 凭据库、任何浏览器的用户配置，它都打不开：所有模式一律在门口拒绝。",
      },
    ],
    more: "进一步了解",
    scope:
      "关于范围，说清楚：打开项目时，它在那个文件夹加上你额外添加的里面干活；没打开项目时，它看得见整台机器，写出的文件落在该会话的 output 文件夹。问不问、问多勤，取决于你选的权限级别；对外发布在任何级别都会问，而且每条命令都有记录。这些规矩是 Aetox 自己代码里的检查，不是操作系统沙箱：如果机器上有丢了就回不来的资料，给 Aetox 单独一把 API key，并把它放在 VM 或 Windows Sandbox 里跑。",
  },
  work: {
    h2: "真做过的活，不是摆拍的演示",
    sub: "这一页每个数字都来自真跑过的活，有日志可以回看。",
    crm: {
      addr: "crm-compare.xlsx",
      cap: "2 个智能体 · 42 次工具调用 · 20 行 · 2026 年 8 月 15 日",
      title: "20 家泰国中小企业真能用的 CRM，比在一张表里",
      body: "六个空格是最可信的部分。哪家只在要报价单时才给价格，它就把格子留空，把原因写在旁边。一个空格都没有的表，是猜出来的表。",
    },
    n8n: {
      addr: "n8n · 11 个节点",
      alt: "Aetox 从头搭到尾的十一个节点 n8n 工作流",
      title: "十一个节点的 n8n 工作流，一句话接完整条线",
      body: "中途撞上真实的报错，读懂系统回的话，改完再试到通过，然后把还验证不了的部分写下来。",
    },
    video: {
      addr: "youtube · 1:07",
      alt: "Aetox 写成文件、并在它自己浏览器里打开的网页",
      title: "一句话做出网页，看视频",
      body: "一分零七秒，真实应用在做一个页面。它做过的其他页面在[案例研究](CASE_STUDIES_URL)里。",
    },
  },
  faq: {
    h2: "下载前大家会问的问题",
    sub: "直说，包括它现在还做不好的地方。",
    items: [
      {
        q: "和网页上的 AI 有什么不同",
        a: [
          "网页上的助手回答问题，剩下的你自己去做。Aetox 把活做完：因为它在你机器上，所以能打开真实文件、写真实文件、开真实网站、点真实按钮。",
          "你拿到的是文件夹里的文件，而不是聊天框里要再复制出去的文字。",
        ],
      },
      {
        q: "需要会写代码吗",
        a: [
          "不用。用人话说明白你要什么，剩下的它处理。不做代码的活，另有一扇助手之门。",
          "说实话：随应用带的 8 个预设偏向网页和代码类的活。其他活照样用人话下指令，用得顺的就存下来自己复用。",
        ],
      },
      {
        q: "我的数据安全到什么程度",
        a: [
          "对话和工作文件只存在你的机器上。我们没有中间服务器，不收集使用统计，也没有账号。用本地模型时，数据完全不离开机器。",
          "如果填了别家服务商的 key，你输入的内容从你的机器直接到他们那里，不经过我们。key 用你的 Windows 账户加密，存在自己的文件里，并从日志中剔除。有一点必须说清：这套加密只属于 Windows，这也是目前只发布 Windows 版的原因之一。",
        ],
      },
      {
        q: "它能访问我机器上的什么",
        a: [
          "打开项目时，它就在那个文件夹加上你额外添加的里面。没打开项目时，它看得见整台机器，写出的文件落在该会话的 output 文件夹。",
          "任何模式都打不开的是密钥和密码库：`.ssh` `.aws` `.gnupg`、Windows 凭据库，以及各家浏览器的用户配置。问不问、问多勤取决于你选的权限级别；对外发布在任何级别都会问，而且每条命令都有记录。",
          "这些规矩是 Aetox 自己代码里的检查，不是操作系统沙箱。机器上有丢了就回不来的资料，就给 Aetox 单独一把 API key，并放在 VM 或 Windows Sandbox 里跑。",
        ],
      },
      {
        q: "多少钱",
        a: [
          "程序免费。没有我们的订阅、没有付费档，也不用注册账号。",
          "用本地模型完全不花钱。用别家的 key，就按用量付给他们。我们不在中间，也不加价。",
        ],
      },
      {
        q: "是开源的吗",
        a: [
          "不是。Aetox 免费使用，可以装在任何多台机器上，也可以用于商业工作，但许可证不允许修改、再分发、换品牌或出售。你自己写的技能、智能体、prompt 和 MCP server 属于你，可以拿去卖。",
          "公开仓库里的源码停在 v1.7.0，留在那里可以读、可以审。之后的版本只发安装包，所以你正在跑的这版没有源码可读。",
          "没有源码也能自己查的：每次发布都有 `checksums.txt`，列出每个文件的 SHA-256，并用应用更新密钥签名；2026 年 10 月 21 日之后构建的版本还带 `sbom.txt`，列出打进包里的每个 Go module 和 web 包。Microsoft Store 那一版由 Microsoft 签名。",
        ],
      },
      {
        q: "机器要多强",
        a: [
          "程序本身占 {DISK_MB} MB，两个文件：窗口和引擎。普通机器开着毫无压力。",
          "吃性能的是模型。想在本机跑模型，最好留出够用的内存；用别家的 key，你的机器几乎不用出力。",
        ],
      },
      {
        q: "有定时任务吗",
        a: [
          "有。可以定时让 Aetox 的会话自己跑，全部定时任务在指挥中心里看。任务在 Aetox 开着的时候运行；关机错过了那一轮，会在下次打开应用时补跑一次。必须关机也不停的活，还是更适合 n8n 或 Windmill。",
        ],
      },
      {
        q: "不喜欢的话怎么卸载",
        a: ["和普通应用一样在 Windows 的“添加或删除程序”里卸载。没有账号要去注销，除了你自己的机器，别处不留你的任何数据。"],
      },
      {
        q: "支持 Mac 或 Linux 吗",
        a: [
          "还不支持。现在先把 Windows 做好，因为写它的是一个人，而他每天真的在用 Windows 干活。",
          "引擎已经能在 Linux 和 macOS 上编译，但浏览器部分和 key 加密在这两个系统上还没做完。其他系统是接下来的计划。",
        ],
      },
    ],
  },
  cta: {
    h2: "把你手上的模型放到 Aetox 上跑",
    p: "装上，接上你已经在用的模型，给它一件你很熟的活，自己比一比。不用绑卡，没有订阅。",
    btn: "下载安装包",
  },
  // One entry per page of the site (lib/site.ts PAGES). `title` and `sub` open
  // the page; `meta` is the <title> and description. The home page uses `meta`
  // at the top of this file instead.
  pages: {
    features: {
      title: "它能做什么",
      sub: "开发、助手、团队、工作室和它能跑的模型，然后是 Aetox 自己动手做的十一件活，每一件都是真跑，最后都落到真文件。",
      metaTitle: "Aetox harness 能做什么：小票、调研、浏览器、代码、视频",
      metaDescription: "Aetox 在 Windows 机器上自己处理的活：把小票读成 Excel、跨二十个网站找资料、驱动真实网站、Git、代码地图、视频，以及每种活长什么样。",
      all: "看它能做的全部",
    },
    pricing: {
      title: "价格",
      sub: "程序免费。你只需要决定让谁来做：自己机器上的模型，还是你已经在付费的服务商。",
      metaTitle: "Aetox harness 价格：免费，用本地模型或你自己的 key",
      metaDescription: "Aetox 不要钱，也没有订阅。用 Ollama 或 LM Studio 跑本地模型完全免费，或带上 {PROVIDERS} 家中任一家的 key。两个文件，磁盘上 {DISK_MB} MB。",
      teaser: {
        h2: "免费，想清楚让谁来做",
        p: "没有订阅、没有付费档、不用账号。本地模型一分不花，也可以带上你已有的 key，聊天中途随时换。",
        local: "用 Ollama 或 LM Studio",
        provider: "家可选，用你自己的 key",
        btn: "看价格",
      },
    },
    safety: {
      title: "安全",
      sub: "中间没有我们的服务器，不收集使用统计，不用账号。它在你机器上能碰什么、不能碰什么，都写明白。",
      metaTitle: "Aetox harness 安全：你的数据不必离开这台机器",
      metaDescription: "Aetox 怎样把对话、文件和 API key 留在你的机器上：没有中间服务器、key 加密、凭据库在门口就拒绝、每条命令留记录、每次写入先问过。",
      more: "读安全细节",
      policies: "全部政策",
      policiesSub: "本网站上的隐私政策与提交给 Microsoft Store 的那份相同。许可证和第三方声明在应用仓库里。",
    },
    supporters: {
      title: "Aetox harness 的支持者",
      sub: "愿意支持 Aetox harness、并同意在这里显示名字的人。",
      metaTitle: "Aetox harness 支持者",
      metaDescription: "支持 Aetox harness 的人，以及项目已确认的支持总额。",
      total: "支持总额",
      totalSub: "按已确认的支持记录计算",
      promptPay: "用 PromptPay 支持",
      promptPayTitle: "扫码支持 Aetox harness",
      promptPaySub: "用泰国银行 App 扫这个二维码来支持项目。",
      promptPayAlt: "用于支持 Aetox harness 的 PromptPay 二维码",
      list: "支持者名单",
      anonymous: "不愿署名",
    },
    work: {
      title: "真实的活",
      sub: "三件真跑过的活，有日志可以回看，不是摆拍的演示。",
      metaTitle: "Aetox harness 真实的工作：CRM 调研、n8n、视频里的网页",
      metaDescription: "Aetox 真跑过的活：二十家 CRM 比在一张表里、一句话接出十一个节点的 n8n 工作流、把做网页的过程拍成视频。每个数字都来自日志。",
      more: "看真实的活",
      cases: "看案例研究",
      casesSub: "Aetox 做过的更多页面和文件，按出来的样子留着，在应用仓库的案例研究里。",
    },
    faq: {
      title: "常见问题",
      sub: "它是什么、多少钱、能碰到什么、怎么卸载，都直说。",
      metaTitle: "Aetox harness 常见问题：价格、安全、机器配置、卸载",
      metaDescription: "Aetox 和网页 AI 有什么不同、要不要会写代码、数据安全到什么程度、能访问什么、多少钱、机器要多强、怎么卸载。",
    },
    download: {
      title: "下载 Windows 版 Aetox",
      sub: "一个来自 GitHub 的安装包。装上，接上你在用的模型或本地模型，就能跑第一件活。不用绑卡，没有我们的账号。",
      metaTitle: "下载 Windows 版 Aetox harness：安装包、Aetox CLI、Microsoft Store",
      metaDescription: "从 GitHub 下载 Aetox 安装包（{INSTALLER_MB} MB，磁盘上 {DISK_MB} MB）、终端用的 Aetox CLI，或者用一行 winget 命令从 Microsoft Store 装。卸载一键完成。",
      setup: "下载安装包",
      cliSetup: "Aetox CLI",
      store: "Microsoft Store",
      fine: "安装包还没有代码签名。如果 SmartScreen 提示 \"Windows protected your PC\"，点 **More info → Run anyway** · 想完全不见提示，用 Microsoft Store 或上面那行 winget",
      copy: "复制",
      copied: "已复制",
      copyLabel: "复制 winget 命令",
      facts: [
        { k: "当前版本", s: "构建时从 GitHub Releases 读取" },
        { k: "安装包", s: "装好后占磁盘 {DISK_MB} MB，两个文件" },
        { k: "运行在 Windows", s: "用 Windows 自带的 WebView2 绘制界面" },
      ],
      ways: [
        {
          title: "安装包",
          body: "一个 `.exe`，装进 Program Files，并加一个开始菜单快捷方式。应用每天自查一次新版本。想更新就在应用里点 **下载更新**，再点 **重启以更新**。",
        },
        {
          title: "Microsoft Store 与 winget",
          body: "由 Microsoft 签名，所以没有要点的警告，版本也由 Windows 自动更新。从 Store 页面安装，或把上面的命令贴进 PowerShell。",
        },
        {
          title: "Scoop 或免安装 zip",
          body: "不想安装？解压后把两个文件放在一起，或者用 Scoop 装应用和 CLI。每个文件和发布说明都在 [GitHub Releases](RELEASES)。",
        },
      ],
      cli: {
        title: "终端里的 Aetox",
        body: "全屏控制台版的代码台：在任意项目文件夹输入 `aetox`，看工作内容出现在输入框上方，审批就地回答。和主应用分开的安装包：装进你自己的用户文件夹，自己加进 PATH，不需要管理员权限，也不在 Microsoft Store。",
        button: "下载 Aetox CLI",
        note: "装好后开一个新的终端输入 `aetox` · 卸载在 设置 → 应用 → Aetox CLI · 还没有代码签名，SmartScreen 会问一次",
      },
      oneChannel: {
        title: "挑一个渠道，然后一直用它",
        body: "从 Store 装的和从安装包装的，是同一台机器上两个不同的 Aetox：设置、历史、记忆和 key 都不共用。要换渠道，先把旧的卸掉。",
      },
      uninstallTitle: "如果不喜欢",
      uninstallBody: "像普通应用一样在 Windows 设置里卸载。之后后台什么都不跑，也不留残留。对话和输出文件夹都是普通文件，想留想删都行。",
    },
  },
  footer: {
    tag: "由一个人写出来，也是他每天真用来干活的东西。",
    site: "网站",
    project: "项目",
    releases: "全部版本",
    policies: "政策",
    privacy: "隐私政策",
    license: "许可证",
    third: "第三方声明",
    contact: "联系",
    mail: "商务与合作",
    rights: "保留所有权利",
  },
  providers: {
    title: "支持的全部服务商",
    localTitle: "跑在你自己的机器上",
    localSub: "免费，不需要 key · 输入的内容不出这台机器",
    provTitle: "用你信得过的服务商",
    provSub: "填你已有那家的 key，或用 GitHub Copilot · ChatGPT · OpenRouter 登录 · 从你的机器直接和他们通信，不经过我们",
    foot: "点名字看每家的细节 · 也包括你自己的 OpenAI 兼容端点 · 随时可换，不绑定",
    close: "关闭",
  },
  lightbox: { label: "放大图片", close: "关闭" },
};
