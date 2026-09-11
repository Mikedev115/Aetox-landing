import type { Dict } from "@/lib/i18n";
import { STORE_URL, asset } from "@/lib/site";
import Frame from "./ui/Frame";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

export default function FinalCta({ t }: { t: Dict["cta"] }) {
  return (
    <section id="get">
      <div className="wrap">
        <Reveal className="banner">
          <div className="copy">
            <h2>{t.h2}</h2><p>{t.p}</p>
            <PillLink trail="chev" href={STORE_URL}>{t.btn}</PillLink>
          </div>
          <Frame addr={t.frameAddr} shot={{ src: asset("new-chat.png"), alt: t.imgAlt, width: 1417, height: 897 }} />
        </Reveal>
      </div>
    </section>
  );
}
