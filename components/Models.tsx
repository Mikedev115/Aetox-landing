import type { Dict, Lang } from "@/lib/i18n";
import { pagePath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// The model side in one paragraph; the full field of providers is on /features/#models.
export default function Models({ t, lang }: { t: Dict["models"]; lang: Lang }) {
  return (
    <section id="models" className="models-band">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.p}</Reveal>
        <div className="more-row"><PillLink variant="soft" trail="chev" href={`${pagePath(lang, "features")}#models`}>{t.more}</PillLink></div>
      </div>
    </section>
  );
}
