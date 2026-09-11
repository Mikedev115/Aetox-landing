// Privacy policy, English. Mirrors the copy registered with the Microsoft
// Store listing (Aetox/docs/privacy.html) — when one changes, change both and
// move the date. Blocks render top to bottom through <Rich>, so **bold**,
// `code` and [text](url) work here.

export type PolicyBlock =
  | { t: "lede" | "h2" | "h3" | "p"; text: string }
  | { t: "ul"; items: string[] };

export type PolicyDict = {
  title: string;
  updated: string;
  description: string;
  storeNote: string;
  blocks: PolicyBlock[];
};

export const privacyEn: PolicyDict = {
  title: "Privacy Policy",
  updated: "Last updated 24 August 2026",
  description:
    "Aetox runs on your machine. The developer operates no server that receives your conversations, your files, or your keys, and the app collects no usage data of any kind.",
  storeNote:
    "This is the same policy the Microsoft Store listing points to at [mikedev115.github.io/Aetox/privacy.html](https://mikedev115.github.io/Aetox/privacy.html).",
  blocks: [
    { t: "lede", text: "**In one line:** Aetox runs on your machine. The developer operates no server that receives your conversations, your files, or your keys, and the app collects no usage data of any kind." },

    { t: "h2", text: "What Aetox does not do" },
    { t: "ul", items: [
      "No usage statistics leave your machine. Statistics exist, but they stay with you: see the next section",
      "No third-party analytics, and no automatic error reporting. A problem is only reported when you press the button to report it yourself: see case 6",
      "The developer runs no server that receives your messages, files, or keys",
      "Nothing is sold or shared with anyone, because none of your data is held by us",
    ] },

    { t: "h2", text: "What is stored on your machine" },
    { t: "p", text: "All of it lives in `%AppData%\\aetox` on your own computer. Nothing is synced anywhere." },
    { t: "ul", items: [
      "Conversations and history",
      "Per-project memory you asked the agent to keep",
      "Settings, the permissions you granted, and hooks",
      "Provider API keys and tokens, **encrypted with Windows DPAPI** and tied to your Windows user account, so another user on the same machine cannot decrypt them",
      "Optional components you chose to install, such as Tesseract, poppler, ffmpeg and the speech model",
      "**Your own usage statistics**, such as tokens spent and tool calls made, kept so that you can look back at them inside the app. They stay on your machine. They are not sent to the developer and are not sent anywhere else",
    ] },
    { t: "p", text: "Deleting that folder, or uninstalling the app, removes all of it." },

    { t: "h2", text: "What leaves your machine, and to whom" },
    { t: "p", text: "Aetox reaches the network in exactly these six cases, and every one of them follows from something you configured or asked for." },

    { t: "h3", text: "1. The model provider you configured" },
    { t: "p", text: "When you enter a provider's API key, your prompts, the files you attach and the conversation content are sent **directly to that provider**, under that provider's own privacy policy and terms. Aetox is not in the middle, and the developer does not see any of it." },
    { t: "p", text: "If you have configured no provider, Aetox uses its built-in `aetox` provider, which **runs entirely inside the app on your machine and sends nothing anywhere**." },

    { t: "h3", text: "2. The update check" },
    { t: "p", text: "Aetox asks `api.github.com` whether a newer release exists. The request carries only the version you are running and none of your content. As with any web request, GitHub sees the IP address it came from." },
    { t: "p", text: "It can be switched off with the environment variable `AETOX_DISABLE_UPDATE_CHECK=1`, and builds installed from the Microsoft Store never check at all, because Windows handles updates for them." },

    { t: "h3", text: "3. Optional component downloads" },
    { t: "p", text: "When you tick a capability such as reading text from images or transcribing speech, Aetox downloads the program it needs from URLs pinned in advance on GitHub and Hugging Face, and verifies a SHA256 checksum before using it. None of your data is sent with these requests, and none of them happen unless you ticked the box." },

    { t: "h3", text: "4. Sites you ask the agent to visit" },
    { t: "p", text: "When you ask the agent to open a page or fetch from the web, the request goes from your machine to that site directly, exactly as an ordinary browser visit would." },

    { t: "h3", text: "5. Services you connect yourself" },
    { t: "p", text: "If you connect a GitHub account or configure additional MCP servers, Aetox contacts those services as you configured, under their own terms." },

    { t: "h3", text: "6. Problem reports you send yourself" },
    { t: "p", text: "The “System problems” page has a **Report this problem** button beside each entry. Pressing it opens your browser at GitHub's new-issue form, pre-filled with a description of that problem and the relevant part of the log." },
    { t: "p", text: "Two things to know before you send one:" },
    { t: "ul", items: [
      "Nothing is sent until you press submit on GitHub yourself. Aetox only opens the pre-filled form, so you always see the whole text first, and you can edit it or close it.",
      "**GitHub issues are public**, and the pre-filled detail can include your file names, folder paths, or the arguments passed to a tool. Read it and remove anything you would rather not publish before you send it.",
    ] },

    { t: "h2", text: "For everyone" },
    { t: "p", text: "Aetox is a computer assistant for anyone who can use a computer. There is no age limit, and no personal data is collected from any user, whatever their age." },
    { t: "p", text: "One thing a parent should know: the agent opens web pages when asked, which means any page on the internet. A young child should have an adult nearby, the same as with any browser." },

    { t: "h2", text: "Changes to this policy" },
    { t: "p", text: "Any change will be published on this page, with the updated date shown above." },

    { t: "h2", text: "Contact" },
    { t: "p", text: "For privacy questions, open an issue at [github.com/Mikedev115/Aetox/issues](https://github.com/Mikedev115/Aetox/issues)" },
  ],
};
