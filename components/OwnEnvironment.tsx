import type { Dict } from "@/lib/i18n";
import Reveal from "./ui/Reveal";

// What the stack lets a person add for themselves, and why adding it stays
// cheap. The road is CSS: each block fades in through ui/Reveal's
// IntersectionObserver and the shared [data-reveal] transition in globals.css —
// no animation library and nothing extra to load. The second heading is a plain
// h3 on purpose: it names the half that explains the first, not a new section.
export default function OwnEnvironment({ t }: { t: Dict["own"] }) {
  return (
    <section id="own" className="own anchor">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.title}</Reveal>
        <ul className="why-list">
          {t.items.map((i) => <li key={i.k}><b>{i.k}</b> {i.s}</li>)}
        </ul>
        <h3 className="own-h3">{t.powered}</h3>
        <Reveal as="p" className="sec-sub">{t.poweredSub}</Reveal>
        <ul className="why-list">
          {t.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <p className="proof-note"><b>{t.result.lead}</b> {t.result.body}</p>
      </div>
    </section>
  );
}
