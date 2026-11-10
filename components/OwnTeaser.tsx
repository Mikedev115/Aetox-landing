import type { Dict, Lang } from "@/lib/i18n";
import { pagePath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// One card on the home page for the environment a person builds themselves; the
// whole story sits at /features/#own. It is the same surface as PricingTeaser —
// a .wide card with a .head — so nothing new is styled for it. The road is CSS:
// ui/Reveal's IntersectionObserver drives the shared [data-reveal] transition.
export default function OwnTeaser({ t, lang }: { t: Dict["own"]["teaser"]; lang: Lang }) {
  return (
    <section id="own-teaser">
      <div className="wrap">
        <Reveal className="wide">
          <div className="head">
            <div><h2>{t.h2}</h2><p>{t.p}</p></div>
            <PillLink variant="soft" trail="chev" href={`${pagePath(lang, "features")}#own`}>{t.btn}</PillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
