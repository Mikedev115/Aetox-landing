import type { Dict, Lang } from "@/lib/i18n";
import { APP_SETUP_URL, pagePath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// The home page's last block: the safety promise in three sentences and the
// download, in the banner the other pages close with.
export default function HomeClose({ t, lang }: { t: Dict["close"]; lang: Lang }) {
  return (
    <section id="get">
      <div className="wrap">
        <Reveal className="banner">
          <div className="copy">
            <h2>{t.h2}</h2><p>{t.p}</p>
            <div className="cta close-cta">
              <PillLink trail="chev" href={APP_SETUP_URL}>{t.btn}</PillLink>
              <PillLink variant="soft" trail="chev" href={pagePath(lang, "safety")}>{t.safety}</PillLink>
            </div>
            <p className="fine close-ways"><a className="u" href={pagePath(lang, "download")}>{t.ways}</a></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
