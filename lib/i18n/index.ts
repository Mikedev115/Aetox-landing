import { en } from "./en";
import { fillDeep } from "@/lib/numbers";
import type { PolicyDict } from "./privacy-en";

export type Lang = "en" | "th" | "zh";
export type Dict = typeof en;

export const LANGS: Lang[] = ["en", "th", "zh"];

/** What each language calls itself in the switch. */
export const LANG_LABEL: Record<Lang, string> = { en: "English", th: "ไทย", zh: "中文" };
/** The two-letter code shown on the button. */
export const LANG_CODE: Record<Lang, string> = { en: "EN", th: "TH", zh: "ZH" };
/** <html lang> and the Open Graph locale for each language. */
export const LANG_TAG: Record<Lang, string> = { en: "en", th: "th", zh: "zh-Hans" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", th: "th_TH", zh: "zh_CN" };

/** Where each language lives. English is the root; Thai and Chinese are sibling routes. */
export const langPath = (lang: Lang) => (lang === "en" ? "/" : `/${lang}/`);

export async function policy(lang: Lang): Promise<PolicyDict> {
  if (lang === "th") return (await import("./privacy-th")).privacyTh;
  if (lang === "zh") return (await import("./privacy-zh")).privacyZh;
  return (await import("./privacy-en")).privacyEn;
}

// Strings may carry {DISK_MB}-style placeholders for the published numbers
// (lib/numbers.ts); they are filled here, once, so every consumer sees text.
export async function dict(lang: Lang): Promise<Dict> {
  if (lang === "th") return fillDeep((await import("./th")).th);
  if (lang === "zh") return fillDeep((await import("./zh")).zh);
  return fillDeep(en);
}
