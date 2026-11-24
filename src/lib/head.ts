// <head> for one page, built once at build time. Every page exists in all three
// languages, so each language is declared as an alternate of every other — the
// header's language button and a search engine both rely on it.
import { docs as loadDocs, findDoc } from "#lib/docs/index.ts";
import { dict, OG_LOCALE, policy, type Lang } from "#lib/i18n/index.ts";
import { docsUrl, ogImage, pageUrl, type PageKey } from "#lib/site.ts";

export type Head = {
  title: string;
  description: string;
  /** The share card carries the longer description on the home page only. */
  ogDescription: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  ogType: "website" | "article";
  locale: string;
  image: string;
  imageAlt: string;
  themeColor: string;
};

const abs = (l: Lang, page: PageKey, slug?: string) => (page === "docs" ? docsUrl(l, slug) : pageUrl(l, page));

export async function buildHead(lang: Lang, page: PageKey, slug?: string): Promise<Head> {
  const t = await dict(lang);
  const alternates = [
    { hreflang: "en", href: abs("en", page, slug) },
    { hreflang: "th", href: abs("th", page, slug) },
    { hreflang: "zh", href: abs("zh", page, slug) },
    { hreflang: "x-default", href: abs("en", page, slug) },
  ];
  const base = {
    canonical: abs(lang, page, slug),
    alternates,
    locale: OG_LOCALE[lang],
    image: ogImage(lang),
    imageAlt: t.meta.ogAlt,
    themeColor: "#000000",
  };

  if (page === "home") {
    return {
      ...base,
      title: t.meta.title,
      description: t.meta.description,
      ogDescription: t.meta.ogDescription,
      ogType: "website",
    };
  }

  if (page === "privacy") {
    const p = await policy(lang);
    return { ...base, title: `${p.title} · Aetox`, description: p.description, ogDescription: p.description, ogType: "article" };
  }

  if (page === "docs") {
    const d = loadDocs(lang);
    const doc = findDoc(d, slug);
    const title = doc ? doc.metaTitle : d.ui.homeTitle;
    const description = doc ? doc.metaDescription : d.ui.homeSub;
    return { ...base, title, description, ogDescription: description, ogType: "article" };
  }

  const p = t.pages[page as Exclude<PageKey, "home" | "privacy" | "docs">];
  return { ...base, title: p.metaTitle, description: p.metaDescription, ogDescription: p.metaDescription, ogType: "website" };
}
