import type { Dict } from "@/lib/i18n";
import { SECURITY_SKILL } from "@/lib/numbers";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// The cleanest experiment we have: the same model on the same build, with only
// the bundled security skill switched. Bars are drawn to scale on the 15
// functions of the task; the other harnesses are shown as their range so the
// reader sees the skill-off bar land among them.
const OF = 15;
const pct = (v: number) => `${((v / OF) * 100).toFixed(1)}%`;
const one = (v: number) => v.toFixed(1);

export default function SecuritySkill({ t }: { t: Dict["security"] }) {
  return (
    <section id="security-skill" className="sec-band">
      <div className="wrap">
        <Reveal as="p" className="eyebrow sec-ey">{t.eyebrow}</Reveal>
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
        <div className="sec-grid">
          <Reveal as="div" className="sec-card">
            <p className="sc">{t.chart}</p>
            {SECURITY_SKILL.map((m) => (
              <div className="sec-model" key={m.size}>
                <p className="sm">{t.models[m.size]}</p>
                <div className="sbar"><span>{t.off}</span><i><b style={{ width: pct(m.off) }} /></i><em>{one(m.off)}</em></div>
                <div className="sbar on"><span>{t.on}</span><i><b style={{ width: pct(m.on) }} /></i><em>{one(m.on)}</em></div>
                <div className="sbar dim"><span>{t.others}</span><i><b style={{ left: pct(m.others[0]), width: pct(m.others[1] - m.others[0]) }} className="range" /></i><em>{one(m.others[0])}–{one(m.others[1])}</em></div>
              </div>
            ))}
          </Reveal>
          <Reveal as="div" className="sec-card">
            <p className="sm">{t.holesTitle}</p>
            <ul className="holes">
              {t.holes.map((h) => <li key={h.b}><span>{h.b}</span><code>{h.n}</code></li>)}
            </ul>
          </Reveal>
        </div>
        <Rich className="proof-note" text={t.note} />
      </div>
    </section>
  );
}
