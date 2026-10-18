// English copy — the base language. Thai in ./th.ts must carry the same keys;
// TypeScript enforces that through the Dict type in ./index.ts.
//
// Strings may use a little inline markup rendered by <Rich>: **bold**, `code`,
// [text](url). Every number here comes from a real run — the sizes and
// counts are {NAME} placeholders filled from lib/numbers.ts, so they are
// written once; docs/PUBLISHED-NUMBERS.md says where each one is measured.

export const en = {
  meta: {
    title: "Aetox · The best harness for the AI you already use",
    description:
      "Aetox is the best harness for the AI you already use. It runs everything around the model, the tools, skills, context and the checks before it hands work back, so your model does better work on documents, websites and code. Free, for Windows.",
    ogDescription: "Don't change your model. Change the harness. Same model, same tasks: Aetox gets more out of it.",
  },
  nav: {
    overview: "Overview",
    uses: "What it does",
    allUses: "All capabilities",
    pricing: "Pricing in practice",
    safety: "Safety",
    work: "Real work",
    faq: "FAQ",
    supporters: "Support the project",
    download: "Download",
    privacy: "Privacy",
    menu: "Menu",
    theme: "Toggle light/dark theme",
    lang: "ไทย",
    langTitle: "อ่านภาษาไทย",
    announceBefore: "Aetox ",
    announceAfter: " is out. See what changed",
    backToTop: "Aetox, back to top",
  },
  hero: {
    eyebrow: "The Model Multiplier.",
    h1Before: "The best harness ",
    h1Highlight: "for the AI you already use", // no-break spaces keep "for the" off the first line
    h1After: "",
    lede: "Don't change your model. Change the harness. Aetox runs everything around the model, the tools, skills, context and the checks before it hands work back, so your model works at full strength on documents, websites and code. On Windows.",
    download: "Download the installer",
    other: "All ways to install",
    fine: "One {INSTALLER_MB} MB .exe from GitHub · bring your own model, or run one locally for free · uninstall in one click",
    imgAlt:
      "The Aetox window: a request for a one-page coffee shop site, a four-step plan appearing in the chat and ticking off one step at a time, while the artifacts panel on the right shows the full plan and how it will know it is done",
    frameAddr: "Aetox · plan 4/4",
  },
  proof: {
    h2: "Same model, same tasks, judged by hidden tests",
    stats: [
      { n: "{SECURE_US}%", vs: "vs {SECURE_NEXT}%", k: "Secure code", s: "GPT-6 Luna, against the best of four other harnesses (CWEval func-sec@1)" },
      { n: "{MULTI_US}%", vs: "vs {MULTI_NEXT}%", k: "Long multi-turn coding", s: "Tests passed on GPT-5.6 Terra, and the top score on both models (SlopCodeBench)" },
      { n: "{PRICE_X}×", vs: "cheaper model", k: "The same range, in less time", s: "GPT-6 Luna on Aetox passes {CHEAP_PCT}% in {CHEAP_MIN} min. GPT-5.6 Terra on the others passes {BIG_PCT}% in {BIG_MIN} min" },
    ],
    note: "11 coding tasks × 2 models × 3 rounds, the same account for every harness. The secure-code lead comes from the security skill Aetox ships with. Aetox uses more tokens and loses one SWE-bench bug on Luna. [Read the report](CODING_BENCH)",
  },
  network: {
    lines: [
      "Every model, every editor, every runtime you already use,",
      "one harness that gets more out of every one of them.",
    ],
  },
  modes: {
    items: [
      {
        title: "Assistant",
        lead: "Let your AI work at full strength.",
        body: "Point it at a folder of receipts, a two-hour meeting recording, or a question that needs twenty websites. It reads on its own, keeps your tasks and meeting notes, reads your calendar, and the result lands in your folder as a real file, not text in a chat box. For a bigger job it hands the whole thing to a team, a department or the whole company you appointed, from the same chat.",
        addr: "Aetox · assistant",
        alt: "Assistant door: asked which items sold best, it reads the sales files tool by tool, answers with a top-three table, and the Excel summary it wrote opens beside the chat",
      },
      {
        title: "Code",
        lead: "We multiply the model by owning the whole harness.",
        body: "A file tree, a code editor and a real terminal, as many tabs as you like. It works inside the project you opened, runs the project's own tests before it says done, hooks up to the n8n or Windmill you run yourself, and writes down what it could not verify instead of reporting all clear.",
        proof: {
          label: "Secure code, same model · CWEval func-sec@1 on GPT-6 Luna",
          note: "11 tasks × 2 models × 3 rounds, judged by hidden tests. The lead comes from the security skill it ships with; with that skill off, Aetox lands with the rest. It loses on one SWE-bench bug on Luna and on time on Terra, and uses more tokens. [Read the report](CODING_BENCH)",
        },
        addr: "Aetox · code",
        alt: "Code door: asked to fix a wrong total with stacked coupons, it reads the code, edits two files with diffs, and runs npm test in the terminal beside it: all 42 pass",
      },
    ],
  },
  company: {
    kick: "Team · department · company",
    h2: ["Your AI company", "works the whole building"],
    p: "Tell one assistant. It hands the whole job to a team, a department or the company you appointed, and you watch every one of them work in the company room.",
    alt: "The Aetox company room: a wooden-floored office behind glass walls, robot agents named content, editor and video at their desks, a hologram globe in the middle",
    live: "Live · company room · content team",
    kpi: ["Done today", "Working", "Waiting on you"],
    pins: [
      { tool: "doc_write", what: "launch post" },
      { tool: "review", what: "2 fixes" },
      { tool: "video · render", what: "" },
      { tool: "Team head", what: "collecting" },
    ],
    feed: [
      { who: "content", what: "Draft of the hot cocoa launch post done, sent to editor" },
      { who: "editor", what: "Reviewed, sent back with 2 word fixes" },
      { who: "content", what: "Fixed what editor asked, second round sent" },
      { who: "video", what: "15-second clip rendered · menu-cocoa.mp4" },
      { who: "team head", what: "Post, cover and clip collected, sent to the assistant" },
      { who: "waiting on you", what: "Approve the post for the shop page", ask: true },
    ],
    chain: ["You", "Assistant", "Company", "Department", "Team", "Agent"],
    pillars: [
      { title: "Watch everyone work", body: "Each agent sits at a desk and moves with the tool it is using. Heads have their own desk and rank, finished work is carried over, and the room comes as a campus or a single building." },
      { title: "Every head thinks for itself", body: "Your words reach the head of every rung exactly as you wrote them. Heads split the work, review their people and send it back for fixes. A department hands work to several teams at once." },
      { title: "The result is real files", body: "Work lands in the team's folder and shows up as cards in the assistant's answer. Anything that would be posted or sent outside, the assistant asks you about first." },
    ],
  },
  uses: {
    h2: "Let Aetox handle the work you repeat every day, on your machine, not in someone's cloud",
    prev: "Previous",
    next: "Next",
    cards: [
      {
        title: "Receipts",
        body: "A folder of receipts becomes a real Excel file. It reads the text in the images itself, Thai and English, so dates sort and SUM works. Images never leave your machine.",
        alt: "Aetox reading text out of an image and answering in text",
      },
      {
        title: "Video and audio",
        body: "A two-hour meeting becomes a summary that says which minute each thing happens at. It transcribes on your machine, reads text on screen too, and translates a clip in a language you do not know.",
        alt: "Aetox transcribing a clip with Thai translation and timestamps",
      },
      {
        title: "The web",
        body: "It opens a real page in its own window, reads it, then clicks, types, picks from dropdowns and submits the form while you watch, and can stop it at any moment.",
        alt: "Aetox driving a real browser inside the app with five tabs open",
      },
      {
        title: "Research",
        body: "“Find 20 CRMs Thai SMEs can actually use and build me a comparison spreadsheet.” 6 minutes 51 seconds later there was a 20-row .xlsx, sorted by price, every row carrying the link it took the number from.",
        alt: "",
      },
      {
        title: "Automation",
        body: "Say it in plain language, get an n8n workflow wired through every node. It hooks to the n8n or Windmill you run yourself, hits real errors, reads what the system said, and retries until it passes.",
        alt: "An eleven-node n8n workflow Aetox built on its own",
      },
      {
        title: "Git",
        body: "Twenty-five changed files, one sentence: it groups them into commits that belong together, writes each message, and you tick what goes in. Or commit by hand: the panel shows every diff either way.",
        alt: "The Git panel splitting 25 changed files into 3 commit groups, each with a written message and per-file tick boxes",
      },
      {
        title: "Code map",
        body: "Open a project of 741 files and see it as a map: every dot a file sized by how much it is imported, every line an import. Ask which file is the largest and it opens it on the desk.",
        alt: "A force-directed map of 150 of a project's 741 files, dots sized by import count, beside the chat listing the largest source files",
      },
      {
        title: "Video",
        body: "Ask for a short clip and it designs, renders and opens it beside the chat. Say the 3.8-second cut is too short and it stretches it to 8 seconds, checks the file's real duration, and renders again.",
        alt: "The chat reporting an 8-second hero clip re-rendered from 3.8 seconds, with the mp4 playing in the tab beside it",
      },
      {
        title: "Team",
        body: "Tell the assistant what you want. It does the work itself, or hands the whole job to a team, a department or the whole company you appointed, in your own words, and reports back in the same chat. The work shows as one tree. Stop any row, answer a question right where it was asked.",
        alt: "The delegation tree: the assistant hands the job to the content team, whose head splits it between a writer, a designer and an editor, each row with its status and files",
      },
      {
        title: "Install by asking",
        body: "Paste an MCP link, a claude mcp add line, a GitHub page or just a name. It finds the official server, checks whether it needs a key or a sign-in, and shows a card. Nothing installs until you press it.",
        alt: "The Playwright MCP install card: source npm, the command it will run, no key needed, who gets it, and an Install button waiting to be pressed",
      },
      {
        title: "In the terminal",
        body: "The Code desk without the window: type aetox in any project folder. The work prints above the input, approvals are answered in place, and it shares keys, chats and memory with the app. A separate installer, not in the Store.",
        alt: "The aetox console in Windows Terminal: a code search and an edit, then a card asking to run npm test above the input",
      },
    ],
    researchStats: {
      label: "Numbers from that job",
      items: [
        { unit: "min", k: "from command to file" },
        { unit: "times", k: "tools picked up" },
        { unit: "rows", k: "in the spreadsheet" },
        { unit: "rows", k: "left blank, with the reason" },
      ],
    },
  },
  pricing: {
    h2: "Free. Choose who does the thinking",
    p: "The program costs nothing: no subscription of ours, no paid tier, no account to sign up for. You only choose which model thinks for you, and you can switch mid-conversation.",
    all: "See all providers",
    local: {
      title: "Run it on your own machine",
      price: "Free",
      sub: "no key needed",
      points: [
        "Connects to the Ollama or LM Studio you already have",
        "What you type never leaves the machine",
        "Keeps working if the internet drops",
      ],
      who: "Best for everyday work · data that must not leave the organisation",
    },
    provider: {
      title: "Use a provider you trust",
      price: "Pay as you go",
      sub: "{PROVIDERS} providers",
      points: [
        "You pay them for what you use. We add no markup",
        "Switch provider or model mid-conversation and the context follows",
        "Your machine talks to them directly, never through us",
      ],
      who: "Best for hard jobs · work that needs the largest models",
      more: "+{PROVIDERS_MORE}",
    },
    note: "**No need to decide yet.** Open the app and its guide right after install. When you want it to do the work, connect a model: an account or key you already have, or a local model through Ollama or LM Studio.",
  },
  weight: {
    h2: "Light enough to leave open all day",
    p: "An assistant you close because it slows your machine is one you do not use. Aetox is two files, {DISK_MB} MB together (the window and its engine), drawn with the WebView2 that Windows already ships.",
    benchLabel: "Disk used after install, shorter is better",
    aetoxType: "AI agent",
    cometType: "AI assistant",
    foot: "Smaller than Claude Code **2×** · Cursor **7×** · VS Code **10×**, rounded to whole numbers. Different categories, of course: a CLI has no window and an IDE is a tool for a different job; the fair comparison is the disk each takes on a machine like yours. Competitors measured 27 Jul 2026, Aetox 18 Oct 2026 on v1.9.28, both files. Method in [BENCHMARK.md](https://github.com/Mikedev115/Aetox/blob/main/docs/reports/BENCHMARK.md). Test counts and runtime figures retain the dates in the README.",
    kpis: [
      { unit: "MB", k: "Disk on your machine", s: "Two files · installer {INSTALLER_MB} MB" },
      { unit: "tests", k: "Pass before release", s: "Go {TESTS_GO} · UI {TESTS_UI}" },
      { unit: "ms", k: "One turn assembled", s: "174.9 KB memory · 13 Aug 2026" },
      { unit: "tools", k: "In the model's hands from install", s: "About {TOKENS_PER_REQUEST} tokens per request" },
    ],
  },
  safety: {
    h2: "No server of ours in the middle",
    sub: "History and files stay on the machine doing the work. No usage statistics, no account. A cloud model receives what is sent to it, straight from your machine. Web search, connected services and online speech still use the network when the model runs locally.",
    cards: [
      {
        title: "Your conversations and files stay here",
        body: "Stored on your machine alone, searchable in Thai and English, exportable as a file whenever you want out. If you run a local model with Ollama or LM Studio, it can be cut off from the internet entirely.",
      },
      {
        title: "Keys are encrypted, key stores are locked",
        body: "API keys live in their own file, encrypted to your Windows account and stripped from logs. And it cannot open `.ssh` `.aws` `.gnupg`, the Windows credential store or any browser profile. Refused at the door, in every mode.",
      },
    ],
    more: "Learn more",
    scope:
      "On scope, let us be precise: with a project open it works inside that folder plus the ones you added. With no project open it sees the whole machine, and the files it writes land in that session's output folder. How often it asks first depends on the permission level you pick; publishing anything outside is asked about at every level, and every command is logged.",
  },
  work: {
    h2: "Real work, not staged demos",
    sub: "Every number on this page comes from a job that actually ran, with a log you can read back.",
    crm: {
      addr: "crm-compare.xlsx",
      cap: "2 agents · 42 tool calls · 20 rows · 15 Aug 2026",
      title: "Twenty CRMs Thai SMEs can actually use, compared in one spreadsheet",
      body: "The six blank cells are the most trustworthy part. Where a vendor only quotes on request, it left the cell empty and wrote the reason beside it. A table with no blanks is a table that guessed.",
    },
    n8n: {
      addr: "n8n · 11 nodes",
      alt: "An eleven-node n8n workflow Aetox built end to end",
      title: "An eleven-node n8n workflow, wired end to end from one sentence",
      body: "It hit real errors along the way, read what the system said back, fixed and retried until it passed, then wrote down what it still could not verify.",
    },
    video: {
      addr: "youtube · 1:07",
      alt: "A web page Aetox wrote as a file and opened in its own browser",
      title: "A web page from one sentence, on video",
      body: "One minute and seven seconds of the real app building a page. More pages it has built are in the [case studies](CASE_STUDIES_URL).",
    },
  },
  faq: {
    h2: "Questions people ask before downloading",
    sub: "Straight answers, including the things it still does not do well.",
    items: [
      {
        q: "How is this different from asking an AI on the web",
        a: [
          "A web assistant answers your question and you go do the rest yourself. Aetox finishes the job. Because it is on your machine, it can open real files, write real files, open real websites and click real buttons.",
          "What you get back is a file in your folder, not text in a chat box you have to copy and paste onwards.",
        ],
      },
      {
        q: "Do I need to know how to code",
        a: [
          "No. You type in plain language what you want, and it handles the rest. There is an assistant door set aside for work that is not coding.",
          "To be honest, the 8 built-in presets lean toward web and code work. For anything else you command it in plain language as usual, and keep the instructions that work to reuse yourself.",
        ],
      },
      {
        q: "How safe is my data",
        a: [
          "Conversations and work files live on your machine alone. We have no middle server, keep no usage statistics, and there is no account. With a local model the data never leaves your machine.",
          "If you enter another provider's key, what you type goes from your machine to them directly, not through us. The key is encrypted to your Windows account, kept in its own file, and stripped from the log. One limit to state: that encryption is Windows-only, which is one reason it ships on Windows only for now.",
        ],
      },
      {
        q: "What can it access on my machine",
        a: [
          "With a project open, it stays in that folder plus the ones you added. With no project open, it sees the whole machine, and the files it writes land in that session's output folder.",
          "What it can never open in any mode is the key and password stores: `.ssh` `.aws` `.gnupg`, the Windows credential store and every brand's browser profile. How often it asks first depends on the permission level you pick; publishing anything outside is asked about at every level, and every command is logged.",
        ],
      },
      {
        q: "How much does it cost",
        a: [
          "The program is free. No subscription of ours, no paid tier, no account to sign up for.",
          "With a local model there is no cost at all. With another provider's key, you pay them for what you use. We are not in the middle and add nothing on top.",
        ],
      },
      {
        q: "How powerful does my machine need to be",
        a: [
          "The program takes {DISK_MB} MB in two files: the window and its engine. Any ordinary machine opens it comfortably.",
          "What takes the power is the model. To run a local model yourself you should have a decent amount of RAM to spare. With another provider's key, your machine barely has to work at all.",
        ],
      },
      {
        q: "Is there a scheduler",
        a: [
          "Yes. You can schedule an Aetox chat to run on its own, and see every scheduled job in the command center. Jobs run while Aetox is open; a run missed while the machine was off happens once when you open the app again. For work that must keep running with the machine off, n8n or Windmill is still the better fit.",
        ],
      },
      {
        q: "If I do not like it, how do I uninstall",
        a: [
          "Uninstall from Windows' Add or remove programs as usual. There is no account to go delete, and no data of yours left anywhere except on your own machine.",
        ],
      },
      {
        q: "Does it support Mac or Linux",
        a: [
          "Not yet. Right now it does Windows first and well, because there is one person writing it and they use Windows every day for real work.",
          "The engine already compiles on Linux and macOS, but the browser part and the key encryption are not done there yet. Other systems are the plan after this.",
        ],
      },
    ],
  },
  cta: {
    h2: "Run your model on Aetox",
    p: "Install, connect the model you already use, give it a job you know well, and compare. No card, no subscription.",
    btn: "Download the installer",
  },
  // One entry per page of the site (lib/site.ts PAGES). `title` and `sub` open
  // the page; `meta` is the <title> and description. The home page uses `meta`
  // at the top of this file instead.
  pages: {
    features: {
      title: "What it does",
      sub: "Eleven jobs Aetox does on its own, on your machine, each one a real run with a real file at the end.",
      metaTitle: "What Aetox harness does: receipts, research, browsers, code, video",
      metaDescription: "The jobs Aetox handles on its own on a Windows machine: reading receipts into Excel, research across twenty sites, driving real websites, Git, code maps, video, and what each one looks like.",
      all: "See everything it does",
    },
    pricing: {
      title: "Pricing",
      sub: "The program is free. You only choose who does the thinking: a model on your own machine, or a provider you already pay.",
      metaTitle: "Aetox harness pricing: free, with a local model or your own key",
      metaDescription: "Aetox costs nothing and has no subscription. Run a local model with Ollama or LM Studio for free, or bring a key from one of {PROVIDERS} providers. Two files, {DISK_MB} MB on disk.",
      teaser: {
        h2: "Free. Choose who does the thinking",
        p: "No subscription, no paid tier, no account. Run a local model for nothing at all, or bring a key you already have, and switch mid-conversation.",
        local: "with Ollama or LM Studio",
        provider: "supported, your own key",
        btn: "See pricing",
      },
    },
    safety: {
      title: "Safety",
      sub: "No server of ours in the middle, no usage statistics, no account. What it can and cannot touch on your machine, spelled out.",
      metaTitle: "Aetox harness safety: your data never has to leave your machine",
      metaDescription: "How Aetox keeps conversations, files and API keys on your machine: no middle server, encrypted keys, credential stores refused at the door, every command logged and every write asked first.",
      more: "Read about safety",
      policies: "The policies in full",
      policiesSub: "The privacy policy on this site is the one registered with the Microsoft Store listing. The license and third-party notices are in the app repo.",
    },
    supporters: {
      title: "Aetox supporters",
      sub: "People who choose to support Aetox and allow their name to be shown here.",
      metaTitle: "Aetox harness supporters",
      metaDescription: "The people supporting Aetox, with the total confirmed support recorded for the project.",
      total: "Total support",
      totalSub: "Calculated from confirmed contributions",
      promptPay: "Support with PromptPay",
      promptPayTitle: "Scan to support Aetox",
      promptPaySub: "Scan this QR code with a Thai banking app.",
      promptPayAlt: "PromptPay QR code to support Aetox",
      list: "Supporters",
      anonymous: "Anonymous",
    },
    work: {
      title: "Real work",
      sub: "Three jobs that actually ran, with the log to read back, not staged demos.",
      metaTitle: "Real work done by Aetox harness: CRM research, n8n, a web page on video",
      metaDescription: "Jobs Aetox ran for real: twenty CRMs compared in one spreadsheet, an eleven-node n8n workflow wired from one sentence, and a web page built on video. Every number comes from a log.",
      more: "See the real work",
      cases: "Browse the case studies",
      casesSub: "More pages and files Aetox has built, kept as they came out, in the app repo's case studies.",
    },
    faq: {
      title: "Questions",
      sub: "Straight answers on what it is, what it costs, what it can reach, and how to get rid of it.",
      metaTitle: "Aetox harness FAQ: cost, safety, hardware, uninstall",
      metaDescription: "Answers on how Aetox differs from a web AI, whether you need to code, how safe your data is, what it can access, what it costs, what machine it needs, and how to uninstall.",
    },
    download: {
      title: "Download Aetox for Windows",
      sub: "One installer file from GitHub. Install, connect a model you already use or a local one, and run your first job. No card, no account of ours.",
      metaTitle: "Download Aetox harness for Windows: installer, Aetox CLI, Microsoft Store",
      metaDescription: "Download the Aetox installer from GitHub ({INSTALLER_MB} MB, {DISK_MB} MB on disk), the Aetox CLI for your terminal, or get it from the Microsoft Store with one winget command. Uninstalls in one click.",
      setup: "Download the installer",
      cliSetup: "Aetox CLI",
      store: "Microsoft Store",
      fine: "The installer is not code-signed yet. If SmartScreen says \"Windows protected your PC\", press **More info → Run anyway** · for no warning at all, use the Microsoft Store or the winget line above",
      copy: "copy",
      copied: "copied",
      copyLabel: "Copy the winget command",
      facts: [
        { k: "Current version", s: "Read from GitHub Releases at build time" },
        { k: "Installer", s: "{DISK_MB} MB on disk after install, two files" },
        { k: "Runs on Windows", s: "Draws with the WebView2 that Windows already ships" },
      ],
      ways: [
        {
          title: "Installer",
          body: "One `.exe`. It installs to Program Files with a Start-menu shortcut. The app checks for a new release once a day. Press **Download the update**, then **Restart to update**, right inside the app.",
        },
        {
          title: "Microsoft Store and winget",
          body: "Microsoft signs the package, so there is no warning to click past, and Windows keeps it updated. Install from the Store page or paste the command above into PowerShell.",
        },
        {
          title: "Scoop or a portable zip",
          body: "Rather not install? Unzip and keep both files together, or use Scoop for the app and the CLI. Every file and its release notes are on [GitHub Releases](RELEASES).",
        },
      ],
      cli: {
        title: "Aetox in the terminal",
        body: "The Code desk as a full-screen console: type `aetox` in any project folder, watch the work land above the input, answer approvals in place. A separate installer from the app: it goes into your own user folder, adds itself to PATH, needs no administrator rights, and is not in the Microsoft Store.",
        button: "Download Aetox CLI",
        note: "Open a new terminal after installing and type `aetox` · remove it from Settings → Apps → Aetox CLI · not code-signed yet, so SmartScreen asks once",
      },
      oneChannel: {
        title: "Pick one channel and stay with it",
        body: "The Store copy and the installer copy are two separate Aetox apps on the same machine, with separate settings, history, memory and keys. To switch channels, uninstall the old one first.",
      },
      uninstallTitle: "If you do not like it",
      uninstallBody: "Uninstall from Windows Settings like any other app. Nothing runs in the background afterwards and nothing is left behind. Your conversations and output folders are plain files you can keep or delete.",
    },
  },
  footer: {
    tag: "Built by one person who uses it for real work every day.",
    site: "Site",
    project: "Project",
    releases: "Releases",
    policies: "Policies",
    privacy: "Privacy policy",
    license: "License",
    third: "Third-party notices",
    contact: "Contact",
    mail: "Business and partnerships",
    rights: "All rights reserved",
  },
  providers: {
    title: "All supported providers",
    localTitle: "Run on your own machine",
    localSub: "Free, no key · prompt never leaves the machine",
    provTitle: "Use a provider you trust",
    provSub: "Enter a key for one you already have, or log in with GitHub Copilot · ChatGPT · OpenRouter · talk straight from your machine to them, not through us.",
    foot: "Click a name to see each provider's details · plus any OpenAI-compatible endpoint of your own · switch at any time, no lock-in",
    close: "Close",
  },
  lightbox: { label: "Expanded image", close: "Close" },
};
