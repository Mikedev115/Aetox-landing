import type { Metadata } from "next";
import { dict, langPath, type Lang } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { currentVersion } from "@/lib/version";
import BrandSprite from "./icons/BrandSprite";
import LightboxProvider from "./dialogs/Lightbox";
import ProviderDialogProvider from "./dialogs/ProviderDialog";
import Header from "./Header";
import Hero from "./Hero";
import Modes from "./Modes";
import UseCases from "./UseCases";
import Pricing from "./Pricing";
import Weight from "./Weight";
import Safety from "./Safety";
import RealWork from "./RealWork";
import Faq from "./Faq";
import FinalCta from "./FinalCta";
import Footer from "./Footer";

// The whole page, top to bottom. Both language routes render this; the only
// difference between them is which dictionary comes back from dict().
export default async function Landing({ lang }: { lang: Lang }) {
  const [t, version] = await Promise.all([dict(lang), currentVersion()]);
  return (
    <LightboxProvider label={t.lightbox.label} close={t.lightbox.close}>
      <ProviderDialogProvider t={t.providers}>
        <BrandSprite />
        <Header t={t.nav} lang={lang} version={version} />
        <main>
          <Hero t={t.hero} />
          <Modes t={t.modes} />
          <UseCases t={t.uses} />
          <section id="pricing">
            <div className="wrap">
              <Pricing t={t.pricing} />
              <Weight t={t.weight} />
            </div>
          </section>
          <Safety t={t.safety} />
          <RealWork t={t.work} />
          <Faq t={t.faq} />
          <FinalCta t={t.cta} />
        </main>
        <Footer t={t.footer} nav={t.nav} lang={lang} />
      </ProviderDialogProvider>
    </LightboxProvider>
  );
}

export async function landingMetadata(lang: Lang): Promise<Metadata> {
  const t = await dict(lang);
  const url = new URL(langPath(lang).replace(/^\//, ""), SITE_URL).toString();
  const og = new URL("assets/og.png", SITE_URL).toString();
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: { en: SITE_URL, th: new URL("th/", SITE_URL).toString(), "x-default": SITE_URL },
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
