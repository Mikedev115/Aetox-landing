import type { Dict, Lang } from "@/lib/i18n";
import { pagePath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// `teaser` is the home-page shape: its own heading, and the cards' buttons
// lead to /safety/. The full page has the heading in its head and the buttons
// lead on to the policy.
export default function Safety({ t, lang, teaser }: { t: Dict["safety"]; lang: Lang; teaser?: string }) {
  const href = teaser ? pagePath(lang, "safety") : pagePath(lang, "privacy");
  return (
    <section id="safety">
      <div className="wrap">
        {teaser ? <>
          <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
          <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
        </> : null}
        <div className="two">
          {t.cards.map((c) => (
            <Reveal as="article" className="scard" key={c.title}>
              <h3>{c.title}</h3>
              <Rich text={c.body} />
              <PillLink variant="soft" trail="chev" href={href}>{teaser ?? t.more}</PillLink>
            </Reveal>
          ))}
        </div>
        {teaser ? null : <p className="sec-sub" style={{ marginTop: "2rem", fontSize: ".9rem" }}>{t.scope}</p>}
      </div>
    </section>
  );
}
