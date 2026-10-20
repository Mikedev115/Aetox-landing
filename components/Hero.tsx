import type { Dict, Lang } from "@/lib/i18n";
import { APP_SETUP_URL, pagePath } from "@/lib/site";
import HeroLight from "./ui/HeroLight";
import { PillLink } from "./ui/Pill";

// One neutral line over both doors: you hand the work over, Aetox runs it.
// The doors right under it carry each side's own promise and proof.
export default function Hero({ t, lang }: { t: Dict["hero"]; lang: Lang }) {
  return (
    <div className="hero">
      <HeroLight />
      <div className="wrap">
        <p className="eyebrow hero-eyebrow">{t.eyebrow}</p>
        <h1>{t.h1Before}<span className="hl">{t.h1Highlight}</span>{t.h1After}</h1>
        <p className="lede">{t.lede}</p>
        <div className="cta">
          <PillLink href={APP_SETUP_URL}>{t.download}</PillLink>
          <PillLink variant="soft" href={pagePath(lang, "download")}>{t.other}</PillLink>
        </div>
        <p className="fine hero-fine">{t.fine}</p>
      </div>
    </div>
  );
}
