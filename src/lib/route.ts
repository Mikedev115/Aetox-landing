// A URL of this site, taken apart. The site is static and its page list is
// fixed, so anything that does not name one of those pages is a 404 rather than
// a page rendered from a stray path.
import { BASE_PATH } from "#lib/base.ts";
import type { Lang } from "#lib/i18n/index.ts";
import { PAGES, type PageKey } from "#lib/site.ts";
import { langOf } from "#lib/lang.ts";

export type Route = { lang: Lang; page: PageKey; slug?: string };

export function routeOf(pathname: string): Route | null {
  const lang = langOf(pathname);
  const withoutBase = BASE_PATH && pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) : pathname;
  const withoutLang = lang === "en" ? withoutBase : withoutBase.slice(`/${lang}`.length);
  const segments = withoutLang.split("/").filter(Boolean);

  if (segments.length === 0) return { lang, page: "home" };
  if (segments[0] === "docs") {
    if (segments.length === 1) return { lang, page: "docs" };
    if (segments.length === 2) return { lang, page: "docs", slug: segments[1] };
    return null;
  }
  if (segments.length > 1) return null;
  const page = PAGES.find((p) => p === segments[0] && p !== "home");
  return page ? { lang, page } : null;
}
