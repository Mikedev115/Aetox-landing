import { en } from "./en";
import { fillDeep } from "@/lib/numbers";
import type { PolicyDict } from "./privacy-en";

export type Lang = "en" | "th";
export type Dict = typeof en;

export const LANGS: Lang[] = ["en", "th"];

/** Where each language lives. English is the root; Thai is a sibling route. */
export const langPath = (lang: Lang) => (lang === "en" ? "/" : "/th/");

export async function policy(lang: Lang): Promise<PolicyDict> {
  if (lang === "th") return (await import("./privacy-th")).privacyTh;
  return (await import("./privacy-en")).privacyEn;
}

// Strings may carry {DISK_MB}-style placeholders for the published numbers
// (lib/numbers.ts); they are filled here, once, so every consumer sees text.
export async function dict(lang: Lang): Promise<Dict> {
  const raw = lang === "th" ? (await import("./th")).th : en;
  return fillDeep(raw);
}
