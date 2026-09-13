import type { Dict, Lang } from "@/lib/i18n";
import { pagePath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// Two figures stand in for the whole pricing page: the price of a local
// model, and the count of providers a key can come from (the dialog list and
// pricing.provider.more say the same 24).
export default function PricingTeaser({ t, price, lang }: { t: Dict["pages"]["pricing"]["teaser"]; price: string; lang: Lang }) {
  return (
    <section id="pricing">
      <div className="wrap">
        <Reveal className="wide teaser">
          <div className="head">
            <div><h2>{t.h2}</h2><p>{t.p}</p></div>
            <PillLink variant="soft" trail="chev" href={pagePath(lang, "pricing")}>{t.btn}</PillLink>
          </div>
          <div className="kpis two-up">
            <div className="kpi"><b>{price}</b><div className="k">{t.local}</div></div>
            <div className="kpi"><b>24</b><div className="k">{t.provider}</div></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
