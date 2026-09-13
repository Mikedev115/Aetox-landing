import type { Metadata } from "next";
import type { ReactNode } from "react";
import { dict, type Dict, type Lang } from "@/lib/i18n";
import { SITE_URL, pageUrl, type PageKey } from "@/lib/site";
import { currentVersion } from "@/lib/version";
import BrandSprite from "./icons/BrandSprite";
import LightboxProvider from "./dialogs/Lightbox";
import ProviderDialogProvider from "./dialogs/ProviderDialog";
import Header from "./Header";
import Footer from "./Footer";

/** What every route needs to compose its page: the dictionary and the version badge. */
export async function load(lang: Lang) {
  const [t, version] = await Promise.all([dict(lang), currentVersion()]);
  return { t, version };
}

// The frame around every page of the site: sprite, dialogs, header, footer.
// A route decides which sections go in the middle; the shell decides nothing
// about content, only that the header knows which page it is on (so the nav
// marks it and the language button lands on the same page in the other
// language).
export function Shell({ lang, page, t, version, main, children }: {
  lang: Lang; page: PageKey; t: Dict; version: string; main?: string; children: ReactNode;
}) {
  return (
    <LightboxProvider label={t.lightbox.label} close={t.lightbox.close}>
      <ProviderDialogProvider t={t.providers}>
        <BrandSprite />
        <Header t={t.nav} lang={lang} page={page} version={version} />
        <main className={main}>{children}</main>
        <Footer t={t.footer} nav={t.nav} lang={lang} page={page} />
      </ProviderDialogProvider>
    </LightboxProvider>
  );
}

/** The opening of a sub-page: eyebrow, title, one line under it, optional actions. */
export function PageHead({ title, sub, eyebrow = "Aetox", children }: { title: string; sub: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <div className="phead">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="sub">{sub}</p>
        {children}
      </div>
    </div>
  );
}

type Sub = Exclude<PageKey, "home" | "privacy">;

/** <head> for one of the sub-pages; the home page and the policy build their own. */
export async function pageMetadata(lang: Lang, page: Sub): Promise<Metadata> {
  const t = await dict(lang);
  const p = t.pages[page];
  const og = new URL("assets/og.png", SITE_URL).toString();
  const url = pageUrl(lang, page);
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: url, languages: { en: pageUrl("en", page), th: pageUrl("th", page), "x-default": pageUrl("en", page) } },
    openGraph: {
      type: "website", siteName: "Aetox", locale: lang === "th" ? "th_TH" : "en_US", url,
      title: p.metaTitle, description: p.metaDescription,
      images: [{ url: og, width: 1200, height: 630, alt: "Aetox — finish the work on your machine", type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription, images: [og] },
    other: { "theme-color": "#000000" },
  };
}
