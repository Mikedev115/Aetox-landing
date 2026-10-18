import type { Dict, Lang } from "@/lib/i18n";
import { APP_SETUP_URL, asset, pagePath } from "@/lib/site";
import Frame from "./ui/Frame";
import HeroLight from "./ui/HeroLight";
import { PillLink } from "./ui/Pill";

export default function Hero({ t, lang }: { t: Dict["hero"]; lang: Lang }) {
  return (
    <div className="hero">
      <HeroLight />
      <div className="wrap">
        <h1>{t.h1Before}<span className="hl">{t.h1Highlight}</span>{t.h1After}</h1>
        <p className="lede">{t.lede}</p>
        <div className="cta">
          <PillLink href={APP_SETUP_URL}>{t.download}</PillLink>
          <PillLink variant="soft" href={pagePath(lang, "download")}>{t.other}</PillLink>
        </div>
        <p className="fine">{t.fine}</p>
        <div className="hero-visual">
          <Frame addr={t.frameAddr} shot={{ src: asset(`hero-${lang}.png`), video: asset(`hero-${lang}.mp4`), alt: t.imgAlt, width: 2016, height: 1198, eager: true }} />
        </div>
      </div>
    </div>
  );
}
