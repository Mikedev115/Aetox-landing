import type { Metadata } from "next";
import { dict, type Lang } from "@/lib/i18n";
import { SITE_URL, pageUrl } from "@/lib/site";
import { Shell, load } from "./Page";
import Hero from "./Hero";
import Modes from "./Modes";
import UseCases from "./UseCases";
import PricingTeaser from "./PricingTeaser";
import Safety from "./Safety";
import RealWork from "./RealWork";
import FinalCta from "./FinalCta";

// The home page: the story in short. Each block past the modes is a teaser
// for one of the site's pages and links there — the detail (all nine jobs,
// the pricing paths and benchmark, the access scope, the FAQ) lives on those
// pages, not here.
export default async function Landing({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="home" t={t} version={version}>
      <Hero t={t.hero} lang={lang} />
      <Modes t={t.modes} />
      <UseCases t={t.uses} lang={lang} more={t.pages.features.all} />
      <PricingTeaser t={t.pages.pricing.teaser} price={t.pricing.local.price} lang={lang} />
      <Safety t={t.safety} lang={lang} teaser={t.pages.safety.more} />
      <RealWork t={t.work} lang={lang} teaser={t.pages.work.more} />
      <FinalCta t={t.cta} />
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
      images: [{ url: og, width: 1200, height: 630, alt: "Aetox — finish the work on your machine", type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.ogDescription, images: [og] },
    other: { "theme-color": "#000000" },
  };
}
