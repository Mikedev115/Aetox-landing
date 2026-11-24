// Which language a path belongs to. English is the root; Thai and Chinese are
// sibling subtrees. The base path comes off first, because with paths.base set
// every prerendered URL arrives as /Aetox-landing/th/… rather than /th/….
import { BASE_PATH } from "#lib/base.ts";
import type { Lang } from "#lib/i18n/index.ts";

export function langOf(pathname: string): Lang {
  const rest = BASE_PATH && pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) : pathname;
  if (rest === "/th" || rest.startsWith("/th/")) return "th";
  if (rest === "/zh" || rest.startsWith("/zh/")) return "zh";
  return "en";
}
