// English copy — the base language. Thai in ./th.ts must carry the same keys;
// TypeScript enforces that through the Dict type in ./index.ts.
//
// Strings may use a little inline markup rendered by <Rich>: **bold**, `code`,
// [text](url). Every number here comes from a real run — see
// docs/PUBLISHED-NUMBERS.md for where each one is measured.

export const en = {
  meta: {
    title: "Aetox — An AI agent that does the work on your machine",
    description:
      "Aetox is a Windows app you command in plain language. It reads receipts, reads videos, opens real websites and clicks real buttons, and returns real Excel and Word files. No middle server, no subscription.",
    ogDescription: "Command it in plain language, get back finished files. Work stays on your machine. No middle server.",
  },
  nav: {
    overview: "Overview",
    uses: "What it does",
    pricing: "Pricing",
    safety: "Safety",
    work: "Real work",
    faq: "FAQ",
    privacy: "Privacy",
    get: "Get it free",
    menu: "Menu",
    theme: "Toggle light/dark theme",
    lang: "ไทย",
    langTitle: "อ่านภาษาไทย",
    backToTop: "Aetox — back to top",
  },
  hero: {
    h1Before: "Now you can tell an AI to ",
    h1Highlight: "do the work",
    h1After: " on your own machine",
    lede: "Aetox is an AI agent for Windows. Say what you want in plain language — it reads your files, opens real websites, clicks real buttons, and hands back real Excel, Word and web pages. No middle server. No subscription.",
    download: "Get it from Microsoft Store",
    other: "Other ways to install",
    fine: "Signed by Microsoft, nothing to click past · works instantly with no key · uninstall in one click",
    copy: "copy",
    copied: "copied",
    copyLabel: "Copy the winget command",
    imgAlt:
      "The Aetox window after a job — on the left the chat, on the right the plan card showing 2 of 2 steps done and the session's artifacts panel listing the real files it wrote: a CSV, two Markdown documents and an HTML mock-up",
    frameAddr: "Aetox · plan 2/2 · 5 artifacts",
  },
  modes: {
    items: [
      {
        title: "Assistant",
        lead: "For everyday work, documents and research.",
        body: "Point it at a folder of receipts, a two-hour recording, or a question that needs twenty websites. It reads on its own, works on its own, and the result lands in your folder as a real file — not text in a chat box.",
        addr: "Aetox · assistant",
        alt: "Assistant door — chart drawn in the chat and a summary page opened in the built-in browser",
      },
      {
        title: "Code",
        lead: "For reading code, building systems and debugging.",
        body: "A file tree, a code editor and a real terminal, as many tabs as you like. It works inside the project you opened, hooks up to the n8n or Windmill you run yourself, and writes down what it could not verify instead of reporting all clear.",
        addr: "Aetox · code",
        alt: "Code door — the chat on the left reporting a release check, and on the right tabs for a tool card, Git, PowerShell 7, the project's file tree and an open Go file",
      },
      {
        title: "Agents",
        lead: "For jobs too big for one pair of hands.",
        body: "It splits a job and hands pieces to specialist agents — research, automation, documents, spreadsheets — that work at the same time. A card still working wears a light travelling its edge; when it finishes, the light goes out.",
        addr: "Aetox · agents",
        alt: "Four agents — research, automation, doc, sheet — working in parallel, each card tagged running with a light travelling its edge",
      },
    ],
  },
  uses: {
    h2: "Let Aetox handle the work you repeat every day — on your machine, not in someone's cloud",
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
        body: "It opens a real page in its own window, reads it, then clicks, types, picks from dropdowns and submits the form — while you watch, and can stop it at any moment.",
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
        body: "Twenty-five changed files, one sentence: it groups them into commits that belong together, writes each message, and you tick what goes in. Or commit by hand — the panel shows every diff either way.",
        alt: "The Git panel splitting 25 changed files into 3 commit groups, each with a written message and per-file tick boxes",
      },
      {
        title: "Code map",
        body: "Open a project of 741 files and see it as a map — every dot a file sized by how much it is imported, every line an import. Ask which file is the largest and it opens it on the desk.",
        alt: "A force-directed map of 150 of a project's 741 files, dots sized by import count, beside the chat listing the largest source files",
      },
      {
        title: "Memory",
        body: "It notices what you ask for again and again — and never keeps it on its own. Each habit waits in Settings for you to turn it into a skill, a prompt, or throw it away. One switch turns the whole thing off.",
        alt: "Settings → Learning → Habits: nine repeated requests, each with buttons to build a skill, turn it into a prompt, or discard",
      },
      {
        title: "Video",
        body: "Ask for a short clip and it designs, renders and opens it beside the chat. Say the 3.8-second cut is too short and it stretches it to 8 seconds, checks the file's real duration, and renders again.",
        alt: "The chat reporting an 8-second hero clip re-rendered from 3.8 seconds, with the mp4 playing in the tab beside it",
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
    p: "The program costs nothing — no subscription of ours, no paid tier, no account to sign up for. You only choose which model thinks for you, and you can switch mid-conversation.",
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
      sub: "24 providers",
      points: [
        "You pay them for what you use. We add no markup",
        "Switch provider or model mid-conversation — the context follows",
        "Your machine talks to them directly, never through us",
      ],
      who: "Best for hard jobs · work that needs the largest models",
      more: "+19",
    },
    note: "**No need to decide yet.** The app ships with a demo model you can play with right after install — see the real screen, watch it pick up tools, read its full reasoning, without connecting anything.",
  },
  weight: {
    h2: "Light enough to leave open all day",
    p: "An assistant you close because it slows your machine is one you do not use. Aetox is two files, 80.8 MB together — the window and its engine — drawn with the WebView2 that Windows already ships.",
    benchLabel: "Disk used after install, shorter is better",
    aetoxType: "AI agent",
    cometType: "AI assistant",
    foot: "Smaller than Claude Code **3×** · Cursor **11×** · VS Code **14×**. Different categories, of course — a CLI has no window and an IDE is a tool for a different job; the fair comparison is the disk each takes on a machine like yours. Competitors measured 27 Jul 2026, Aetox 13 Sep 2026 on v1.6.1, both files — method in [BENCHMARK.md](https://github.com/Mikedev115/Aetox/blob/main/BENCHMARK.md).",
    ram: {
      addr: "Task Manager · Processes",
      alt: "Windows Task Manager while Aetox is working: Aetox 64.2 MB of memory, beside Antigravity IDE at 1,757 MB, Google Chrome 531 MB and Discord 473 MB",
      title: "And while it works",
      body: "Task Manager on a real afternoon: the Aetox process at 64 MB while an IDE next to it sat at 1.7 GB. Straight talk, as before — Task Manager files the WebView2 that draws our window under Microsoft Edge WebView2, not under Aetox, so add that in your head. What wins is that you are not keeping a second copy of a browser.",
    },
    kpis: [
      { unit: "MB", k: "Disk on your machine", s: "Two files · installer 33.6 MB" },
      { unit: "tests", k: "Pass before release", s: "Go 3,371 · UI 1,747" },
      { unit: "ms", k: "One turn assembled", s: "174.9 KB memory · 13 Aug 2026" },
      { unit: "tools", k: "In the model's hands from install", s: "About 10,300 tokens per request" },
    ],
  },
  safety: {
    h2: "Built so your data never has to leave your machine",
    sub: "There is no server of ours in the middle for data to travel through. No usage statistics, no account. With a local model, what you type and the files it opens go nowhere at all — not one byte.",
    cards: [
      {
        title: "Your conversations and files stay here",
        body: "Stored on your machine alone, searchable in Thai and English, exportable as a file whenever you want out. If you run a local model with Ollama or LM Studio, it can be cut off from the internet entirely.",
      },
      {
        title: "Keys are encrypted, key stores are locked",
        body: "API keys live in their own file, encrypted to your Windows account and stripped from logs. And it cannot open `.ssh` `.aws` `.gnupg`, the Windows credential store or any browser profile — refused at the door, in every mode.",
      },
    ],
    more: "Learn more",
    scope:
      "On scope, let us be precise: with a project open it works inside that folder plus the ones you added. With no project open it sees the whole machine, and the files it writes land in that session's output folder. Anything that is not a plain read asks you first, and every command is logged.",
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
      body: "It hit real errors along the way, read what the system said back, fixed and retried until it passed — then wrote down what it still could not verify.",
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
          "What it can never open in any mode is the key and password stores — `.ssh` `.aws` `.gnupg`, the Windows credential store and every brand's browser profile. Anything that is not a plain read asks you first, and every command is logged.",
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
          "The program takes 80.8 MB in two files — the window and its engine. Any ordinary machine opens it comfortably.",
          "What takes the power is the model. To run a local model yourself you should have a decent amount of RAM to spare. With another provider's key, your machine barely has to work at all.",
        ],
      },
      {
        q: "Is there a scheduler",
        a: [
          "No, deliberately. Aetox has no cloud, so a timer inside the program would mean your work only runs while you leave the machine on — a promise that cannot be kept. n8n and Windmill are clocks. Aetox is a pair of hands.",
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
    h2: "Try Aetox today",
    p: "Install and run your first job within two minutes. No card, no subscription, nothing left behind if you uninstall.",
    btn: "Get it from Microsoft Store",
    imgAlt: "A fresh Aetox chat asking “what shall I get done for you today?” with four suggested jobs",
    frameAddr: "Aetox · new chat",
  },
  footer: {
    tag: "Built by one person who uses it for real work every day.",
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
