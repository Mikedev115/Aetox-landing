import type { Dict } from "@/lib/i18n";
import Reveal from "./ui/Reveal";

// Why the same model does better here: what the harness adds around it.
export default function Why({ t }: { t: Dict["why"] }) {
  return (
    <section id="why">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <ul className="why-list">
          {t.items.map((i) => (
            <li key={i.b}><b>{i.b}</b> <span>{i.s}</span></li>
          ))}
        </ul>
        <p className="sec-sub">{t.foot}</p>
      </div>
    </section>
  );
}
