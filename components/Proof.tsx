import type { Dict } from "@/lib/i18n";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// The hero says Aetox is the best harness; this band, right under it, is the
// evidence: the same model on the same tasks, with the losses named in the note.
// Every figure is a {NAME} from lib/numbers.ts.
export default function Proof({ t }: { t: Dict["proof"] }) {
  return (
    <section id="proof" className="proof-band">
      <div className="wrap">
        <Reveal as="h2" className="proof-title">{t.h2}</Reveal>
        <div className="proof-stats">
          {t.stats.map((s) => (
            <Reveal as="div" className="pstat" key={s.k}>
              <p className="n">{s.n}{s.vs ? <small>{s.vs}</small> : null}</p>
              <h3>{s.k}</h3>
              <p className="s">{s.s}</p>
            </Reveal>
          ))}
        </div>
        <Rich className="proof-note" text={t.note} />
      </div>
    </section>
  );
}
