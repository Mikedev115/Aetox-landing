import type { Metadata } from "next";
import { dict, type Lang } from "@/lib/i18n";
import { SITE_URL, pageUrl } from "@/lib/site";
import { Shell, load } from "./Page";
import Hero from "./Hero";
import Why from "./Why";
import Demo from "./Demo";
import Models from "./Models";
import Areas from "./Areas";
import HomeClose from "./HomeClose";

// The home page says one thing: the same model does better work here. The hero
// carries the proof for every area; the rest explains why, shows one job, and
// leads to each area's page. The detail (modes, teams, the studio, the security
// test, every provider, all eleven jobs) lives on /features/, not here.
export default async function Landing({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="home" t={t} version={version}>
      <Hero t={t.hero} wall={t.wall} lang={lang} />
      <Why t={t.why} />
      <Demo t={t.demo} lang={lang} />
      <Models t={t.models} lang={lang} />
      <Areas t={t.areas} lang={lang} />
      <HomeClose t={t.close} lang={lang} />
    </Shell>
  );
}

export async function landingMetadata(lang: Lang): Promise<Metadata> {
  const t = await dict(lang);
  const url = pageUrl(lang);
  const og = new URL("assets/og.png", SITE_URL).toString();
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: { en: SITE_URL, th: pageUrl("th"), "x-default": SITE_URL },
    },
    openGraph: {
      type: "website", siteName: "Aetox", locale: lang === "th" ? "th_TH" : "en_US", url,
      title: t.meta.title, description: t.meta.ogDescription,
      images: [{ url: og, width: 1200, height: 630, alt: "Aetox: finish the work on your machine", type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.ogDescription, images: [og] },
    other: { "theme-color": "#000000" },
  };
}
