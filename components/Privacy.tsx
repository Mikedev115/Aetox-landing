import type { Metadata } from "next";
import { dict, policy, type Lang } from "@/lib/i18n";
import { pageUrl } from "@/lib/site";
import { currentVersion } from "@/lib/version";
import { Shell } from "./Page";
import Rich from "./ui/Rich";

// The privacy policy as a page of this site, in the same shell as every
// other page. The language button lands on the policy's own twin.
export default async function Privacy({ lang }: { lang: Lang }) {
  const [t, p, version] = await Promise.all([dict(lang), policy(lang), currentVersion()]);
  return (
    <Shell lang={lang} page="privacy" t={t} version={version} main="doc">
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
    </Shell>
  );
}

export async function privacyMetadata(lang: Lang): Promise<Metadata> {
  const p = await policy(lang);
  const path = (l: Lang) => pageUrl(l, "privacy");
  return {
    title: `${p.title} · Aetox`,
    description: p.description,
    alternates: { canonical: path(lang), languages: { en: path("en"), th: path("th"), "x-default": path("en") } },
    openGraph: { type: "article", siteName: "Aetox", locale: lang === "th" ? "th_TH" : "en_US", url: path(lang), title: `${p.title} · Aetox`, description: p.description },
    robots: { index: true, follow: true },
    other: { "theme-color": "#000000" },
  };
}
