import type { Metadata } from "next";
import { dict, type Lang } from "@/lib/i18n";
import { SITE_URL, ogImage, pageUrl } from "@/lib/site";
import { Shell, load } from "./Page";
import Hero from "./Hero";
import Doors from "./Doors";
import Why from "./Why";
import Demo from "./Demo";
import Models from "./Models";
import Areas from "./Areas";
import HomeClose from "./HomeClose";

// The home page: one neutral line (hand it over, we run it), then two doors, each
// selling one thing: the assistant lets you delegate to a team of your own, Code
// lets the same model finish more. The rest explains why, shows one job, and leads
// to each area's page. The detail (modes, teams, the studio, the security test,
// the proof wall, every provider, all eleven jobs) lives on /features/.
export default async function Landing({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="home" t={t} version={version}>
      <Hero t={t.hero} lang={lang} />
      <Doors t={t.doors} lang={lang} />
      <Why t={t.why} />
      <Demo t={t.demo} lang={lang} />
      <Models t={t.models} />
      <Areas t={t.areas} lang={lang} />
      <HomeClose t={t.close} lang={lang} />
    </Shell>
  );
}

export async function landingMetadata(lang: Lang): Promise<Metadata> {
  const t = await dict(lang);
  const url = pageUrl(lang);
  const og = ogImage(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: { en: SITE_URL, th: pageUrl("th"), zh: pageUrl("zh"), "x-default": SITE_URL },
    },
    openGraph: {
      type: "website", siteName: "Aetox", locale: lang === "th" ? "th_TH" : "en_US", url,
      title: t.meta.title, description: t.meta.ogDescription,
      images: [{ url: og, width: 1200, height: 630, alt: t.meta.ogAlt, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.ogDescription, images: [og] },
    other: { "theme-color": "#000000" },
  };
}
