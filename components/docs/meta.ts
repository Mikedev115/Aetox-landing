import type { Metadata } from "next";
import { OG_LOCALE, dict, type Lang } from "@/lib/i18n";
import { docsUrl, ogImage } from "@/lib/site";
import { docs as loadDocs, findDoc } from "@/lib/docs";

// <head> for one docs page, or for the section's index when no slug is given.
// The same page exists in all three languages, so every language is declared as
// an alternate of every other — the header's language button relies on it.
export async function docsMetadata(lang: Lang, slug?: string): Promise<Metadata> {
  const [t, d] = [await dict(lang), loadDocs(lang)];
  const doc = findDoc(d, slug);
  const title = doc ? doc.metaTitle : d.ui.homeTitle;
  const description = doc ? doc.metaDescription : d.ui.homeSub;
  const url = docsUrl(lang, slug);
  const og = ogImage(lang);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: docsUrl("en", slug), th: docsUrl("th", slug), zh: docsUrl("zh", slug), "x-default": docsUrl("en", slug) },
    },
    openGraph: {
      type: "article", siteName: "Aetox", locale: OG_LOCALE[lang], url,
      title, description,
      images: [{ url: og, width: 1200, height: 630, alt: t.meta.ogAlt, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [og] },
    other: { "theme-color": "#000000" },
  };
}
