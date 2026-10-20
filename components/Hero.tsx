import type { Dict, Lang } from "@/lib/i18n";
import { APP_SETUP_URL, pagePath } from "@/lib/site";
import HeroLight from "./ui/HeroLight";
import { PillLink } from "./ui/Pill";
import ProofWall from "./ProofWall";

// One claim, and the proof of it on the same first screen: six areas, each a
// card of the same shape (Aetox · what it was compared with · model and test).
export default function Hero({ t, wall, lang }: { t: Dict["hero"]; wall: Dict["wall"]; lang: Lang }) {
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
        <p className="fine">{t.fine}</p>
        <ProofWall t={wall} />
      </div>
    </div>
  );
}
