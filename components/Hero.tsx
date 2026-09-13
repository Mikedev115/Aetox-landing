import type { Dict, Lang } from "@/lib/i18n";
import { STORE_URL, asset, pagePath } from "@/lib/site";
import Frame from "./ui/Frame";
import { PillLink } from "./ui/Pill";

export default function Hero({ t, lang }: { t: Dict["hero"]; lang: Lang }) {
  return (
    <div className="hero">
      <div className="wrap">
        <h1>{t.h1Before}<span className="hl">{t.h1Highlight}</span>{t.h1After}</h1>
        <p className="lede">{t.lede}</p>
        <div className="cta">
          <PillLink href={STORE_URL}>{t.download}</PillLink>
          <PillLink variant="ghost" trail="arrow" href={pagePath(lang, "download")}>{t.other}</PillLink>
        </div>
        <p className="fine">{t.fine}</p>
        <div className="hero-visual">
          <Frame addr={t.frameAddr} shot={{ src: asset("hero-plan.png"), alt: t.imgAlt, width: 1920, height: 1140, eager: true }} />
        </div>
      </div>
    </div>
  );
}
