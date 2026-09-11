import type { Metadata } from "next";
import { dict, policy, type Lang } from "@/lib/i18n";
import { SITE_URL, privacyPath } from "@/lib/site";
import { currentVersion } from "@/lib/version";
import BrandSprite from "./icons/BrandSprite";
import Header from "./Header";
import Footer from "./Footer";
import Rich from "./ui/Rich";

// The privacy policy as a page of this site. Same header and footer as the
// landing page; the language button goes to the policy's own twin rather than
// the other language's home.
export default async function Privacy({ lang }: { lang: Lang }) {
  const other: Lang = lang === "en" ? "th" : "en";
  const [t, p, version] = await Promise.all([dict(lang), policy(lang), currentVersion()]);
  return (
    <>
      <BrandSprite />
      <Header t={t.nav} lang={lang} version={version} langHref={privacyPath(other)} />
      <main className="doc">
        <p className="eyebrow">Aetox</p>
        <h1>{p.title}</h1>
        <p className="date">{p.updated}</p>
        {p.blocks.map((b, i) => {
          switch (b.t) {
            case "lede": return <div className="lede" key={i}><Rich text={b.text} /></div>;
            case "h2": return <h2 key={i}>{b.text}</h2>;
            case "h3": return <h3 key={i}>{b.text}</h3>;
            case "p": return <Rich key={i} text={b.text} />;
            case "ul": return <ul key={i}>{b.items.map((it) => <Rich key={it} as="span" text={it} />).map((n, k) => <li key={k}>{n}</li>)}</ul>;
          }
        })}
        <Rich className="store-note" text={p.storeNote} />
      </main>
      <Footer t={t.footer} nav={t.nav} lang={lang} langHref={privacyPath(other)} />
    </>
  );
}

export async function privacyMetadata(lang: Lang): Promise<Metadata> {
  const p = await policy(lang);
  const path = (l: Lang) => new URL(privacyPath(l).replace(/^\/[^/]+\//, ""), SITE_URL).toString();
  return {
    title: `${p.title} · Aetox`,
    description: p.description,
    alternates: { canonical: path(lang), languages: { en: path("en"), th: path("th"), "x-default": path("en") } },
    openGraph: { type: "article", siteName: "Aetox", locale: lang === "th" ? "th_TH" : "en_US", url: path(lang), title: `${p.title} · Aetox`, description: p.description },
    robots: { index: true, follow: true },
    other: { "theme-color": "#000000" },
  };
}
