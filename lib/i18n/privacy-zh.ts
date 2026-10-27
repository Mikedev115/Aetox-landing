// Privacy policy, Chinese (Simplified). Mirrors the copy registered with the
// Microsoft Store listing (Aetox/docs/privacy.html) — when one changes, change
// both and move the date. The English text remains the authoritative version;
// this is a translation of it, block for block.
// Blocks render top to bottom through <Rich>, so **bold**, `code` and
// [text](url) work here.

import type { PolicyDict } from "./privacy-en";

export const privacyZh: PolicyDict = {
  title: "隐私政策",
  updated: "最后更新于 2026 年 8 月 24 日",
  description:
    "Aetox 运行在你自己的机器上。开发者没有运营任何接收你的对话、文件或密钥的服务器，应用也不收集任何形式的使用数据。",
  storeNote:
    "本政策与应用一起发布在 [mikedev115.github.io/Aetox-Harness/privacy.html](https://mikedev115.github.io/Aetox-Harness/privacy.html)，也就是 Microsoft Store 商店页面所登记的那个地址。英文版为准。",
  blocks: [
    { t: "lede", text: "**一句话：**Aetox 运行在你的机器上。开发者没有运营任何接收你的对话、文件或密钥的服务器，应用也不收集任何形式的使用数据。" },

    { t: "h2", text: "Aetox 不会做的事" },
    { t: "ul", items: [
      "没有任何使用统计离开你的机器。统计数据是有的，但它留在你身边：见下一节",
      "没有第三方分析，也没有自动错误上报。只有你自己按下上报按钮时，问题才会被送出：见第 6 项",
      "开发者没有运行任何接收你的消息、文件或密钥的服务器",
      "不会把任何东西卖掉或分享给别人，因为我们根本不持有你的数据",
    ] },

    { t: "h2", text: "存在你机器上的东西" },
    { t: "p", text: "它们全部位于你自己电脑上的 `%AppData%\\aetox`。不会同步到任何地方。" },
    { t: "ul", items: [
      "对话与历史记录",
      "你要求智能体保存的按项目记忆",
      "设置、你授予的权限，以及 hooks",
      "各服务商的 API key 和 token，**用 Windows DPAPI 加密**并绑定你的 Windows 用户账户，同一台机器上的其他用户无法解密",
      "你选择安装的可选组件，例如 Tesseract、poppler、ffmpeg 和语音模型",
      "**你自己的使用统计**，例如花掉的 token 和发起的工具调用，留着让你在应用里回看。它留在你的机器上，不发给开发者，也不发到别处",
    ] },
    { t: "p", text: "删除那个文件夹，或卸载应用，就把它们全部清除。" },

    { t: "h2", text: "什么会离开你的机器，去到哪里" },
    { t: "p", text: "Aetox 只在以下六种情况下联网，每一种都源自你自己配置或要求的事情。" },

    { t: "h3", text: "1. 你配置的模型服务商" },
    { t: "p", text: "当你填入某家的 API key 后，你的提示词、附带的文件和对话内容会**直接发送给那家服务商**，适用他们自己的隐私政策与条款。Aetox 不在中间，开发者看不到其中任何内容。" },
    { t: "p", text: "如果你没有配置任何服务商，Aetox 使用内置的 `aetox` provider，它**完全在你的机器上、在应用内部运行，不向任何地方发送数据**。" },

    { t: "h3", text: "2. 检查更新" },
    { t: "p", text: "Aetox 会询问 `api.github.com` 是否有新版本。这个请求只带你正在运行的版本号，不带你任何内容。和任何网页请求一样，GitHub 能看到来源 IP 地址。" },
    { t: "p", text: "可以用环境变量 `AETOX_DISABLE_UPDATE_CHECK=1` 关掉；从 Microsoft Store 安装的版本完全不做检查，因为 Windows 替它管更新。" },

    { t: "h3", text: "3. 可选组件的下载" },
    { t: "p", text: "当你勾选从图片读字、转写语音这类能力时，Aetox 会从事先钉死的 GitHub 和 Hugging Face 地址下载所需程序，并在使用前校验 SHA256。这些请求不携带你的任何数据，而且你不勾选就不会发生。" },

    { t: "h3", text: "4. 你让智能体访问的网站" },
    { t: "p", text: "当你让智能体打开页面或从网上取内容时，请求从你的机器直接到那个网站，和普通浏览器访问完全一样。" },

    { t: "h3", text: "5. 你自己接入的服务" },
    { t: "p", text: "如果你接入 GitHub 账号或配置额外的 MCP server，Aetox 按你的配置联系这些服务，适用它们自己的条款。" },

    { t: "h3", text: "6. 你自己送出的问题报告" },
    { t: "p", text: "“System problems”页面上，每条记录旁都有一个 **Report this problem** 按钮。按下它会用你的浏览器打开 GitHub 的新建 issue 表单，并预填该问题的描述和日志中相关的部分。" },
    { t: "p", text: "送出之前要知道两件事：" },
    { t: "ul", items: [
      "在你于 GitHub 上亲自按下提交之前，什么都不会发出。Aetox 只是打开预填好的表单，所以你总能先看到全文，可以修改，也可以直接关掉。",
      "**GitHub issue 是公开的**，预填的内容可能包含你的文件名、文件夹路径或传给工具的参数。送出去之前先读一遍，把不愿公开的部分删掉。",
    ] },

    { t: "h2", text: "对所有人" },
    { t: "p", text: "Aetox 是给任何会用电脑的人用的电脑助手。没有年龄限制，也不论年龄，都不向任何用户收集个人数据。" },
    { t: "p", text: "有一件事家长该知道：被要求时智能体会打开网页，也就是互联网上的任何页面。年幼的孩子应当在大人身边使用，和用任何浏览器一样。" },

    { t: "h2", text: "本政策的变更" },
    { t: "p", text: "任何变更都会发布在本页，更新日期显示在上方。" },

    { t: "h2", text: "联系" },
    { t: "p", text: "隐私相关的问题，请在 [github.com/Mikedev115/Aetox/issues](https://github.com/Mikedev115/Aetox/issues) 提 issue" },
  ],
};
