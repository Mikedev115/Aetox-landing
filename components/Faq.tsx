import type { Dict } from "@/lib/i18n";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// Native <details> — open/close works with scripts off, and the browser
// handles keyboard and screen readers.
export default function Faq({ t }: { t: Dict["faq"] }) {
  return (
    <section id="faq">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
        <div className="faq">
          {t.items.map((it) => (
            <details key={it.q}>
              <summary>{it.q}</summary>
              {it.a.map((p) => <Rich key={p} text={p} />)}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
