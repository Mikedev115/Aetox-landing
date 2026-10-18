import type { Dict } from "@/lib/i18n";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// The hero says Aetox is the best harness; this band, right under it, shows it
// on both doors: the assistant by the files real jobs end in, the Code door by
// the same-model numbers, with the losses named in the note. Every figure is a
// {NAME} from lib/numbers.ts.
export default function Proof({ t }: { t: Dict["proof"] }) {
  return (
    <section id="proof" className="proof-band">
      <div className="wrap">
        <div className="pillars">
          <Reveal as="article" className="pillar">
            <p className="pk">{t.assist.k}</p>
            <h2>{t.assist.h}</h2>
            <ul className="jobs">
              {t.assist.jobs.map((j) => (
                <li key={j.b}><span><b>{j.b}</b> {j.s}</span><code>{j.file}</code></li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="article" className="pillar">
            <p className="pk">{t.code.k}</p>
            <h2>{t.code.h}</h2>
            <ul className="pnums">
              {t.code.stats.map((s) => (
                <li key={s.s}><p className="n">{s.n}<small>{s.vs}</small></p><p className="s">{s.s}</p></li>
              ))}
            </ul>
            <p className="pfoot">{t.code.foot}</p>
          </Reveal>
        </div>
        <Rich className="proof-note" text={t.note} />
      </div>
    </section>
  );
}
