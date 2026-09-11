import { en } from "./en";
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

export async function dict(lang: Lang): Promise<Dict> {
  if (lang === "th") return (await import("./th")).th;
  return en;
}
