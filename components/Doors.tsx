import { Fragment } from "react";
import type { Dict, Lang } from "@/lib/i18n";
import { pagePath } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Rich from "./ui/Rich";

// The two doors right under the hero, each selling one thing (app repo AGENTS.md
// § Product direction): the assistant lets one person delegate to a team of
// their own, Code lets the same model finish more. The CEO side is shown by the
// chain of command and the work moving down it; the Code side by same-model numbers.
export default function Doors({ t, lang }: { t: Dict["doors"]; lang: Lang }) {
  const { ceo, code } = t;
  return (
    <section id="doors" className="doors-band">
      <div className="wrap doors">
        <article className="door ceo">
          <p className="dk">{ceo.k}</p>
          <h2>{ceo.h1}<span className="hl">{ceo.hl}</span></h2>
          <p className="kicker">{ceo.kicker}</p>
          <p className="dp">{ceo.p}</p>
          <div className="chain" aria-hidden="true">
            {ceo.chain.map((c, i) => (
              <Fragment key={c}>{i > 0 ? <i>→</i> : null}<span className={i === 0 ? "you" : undefined}>{c}</span></Fragment>
            ))}
          </div>
          <ul className="feed">
            {ceo.feed.map((f) => <li key={f.what} className={f.ask ? "ask" : undefined}><b>{f.who}</b><span>{f.what}</span></li>)}
          </ul>
          <div className="dmore"><PillLink variant="soft" trail="chev" href={`${pagePath(lang, "features")}#teams`}>{ceo.more}</PillLink></div>
        </article>
        <article className="door code">
          <p className="dk">{code.k}</p>
          <h2>{code.h1}<span className="hl">{code.hl}</span></h2>
          <p className="dp">{code.p}</p>
          <ul className="dnums">
            {code.nums.map((n) => <li key={n.s}><p className="n">{n.n}<small>{n.vs}</small></p><p className="s">{n.s}</p></li>)}
          </ul>
          <Rich className="dcond" text={code.cond} />
          <div className="dmore"><PillLink variant="soft" trail="chev" href={`${pagePath(lang, "features")}#code`}>{code.more}</PillLink></div>
        </article>
      </div>
    </section>
  );
}
