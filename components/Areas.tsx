import type { Dict, Lang } from "@/lib/i18n";
import { pagePath, type PageKey } from "@/lib/site";
import Reveal from "./ui/Reveal";

// Each area in one line, leading to where it is shown in full. The rows of the
// dictionary come in this order; the anchors live on those pages.
const LINKS: [PageKey, string][] = [
  ["features", "code"], ["features", "assistant"], ["features", "teams"], ["features", "studio"], ["download", "mobile-preview"],
];

export default function Areas({ t, lang }: { t: Dict["areas"]; lang: Lang }) {
  return (
    <section id="areas">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <ul className="areas">
          {t.rows.map((r, i) => (
            <li key={r.k}>
              <a href={`${pagePath(lang, LINKS[i][0])}#${LINKS[i][1]}`}>
                <b>{r.k}</b><span>{r.s}</span><i aria-hidden="true">→</i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
