import type { Dict, Lang } from "@/lib/i18n";
import { privacyPath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

export default function Safety({ t, lang }: { t: Dict["safety"]; lang: Lang }) {
  return (
    <section id="safety">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
        <div className="two">
          {t.cards.map((c) => (
            <Reveal as="article" className="scard" key={c.title}>
              <h3>{c.title}</h3>
              <Rich text={c.body} />
              <PillLink variant="soft" trail="chev" href={privacyPath(lang)}>{t.more}</PillLink>
            </Reveal>
          ))}
        </div>
        <p className="sec-sub" style={{ marginTop: "2rem", fontSize: ".9rem" }}>{t.scope}</p>
      </div>
    </section>
  );
}
