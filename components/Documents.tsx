import type { Dict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// Two files that leave the machine: a document in the reader's language, and a
// workbook someone else keeps using. The three pages are this repo's own
// templates filled and printed to PDF, so the strip shows three real scripts
// side by side rather than three mock-ups. The pictures are the same in every
// language — the pages do not change with the interface — so only the captions
// and alts come from the dictionary. Files: public/assets/doc-th|doc-en|doc-zh
// and sheet-quote.png.
const PAGES = ["doc-th", "doc-en", "doc-zh"] as const;

export default function Documents({ t }: { t: Dict["docs"] }) {
  return (
    <section id="documents" className="docset">
      <div className="wrap">
        <div className="docset-head">
          <div className="eyebrow">{t.kick}</div>
          <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
          <Rich className="lead" text={t.lead} />
        </div>
        <div className="docset-rows">
          <div className="vcut-grid">
            <div className="docset-pages">
              {PAGES.map((name, i) => (
                <figure key={name}>
                  <img src={asset(`${name}.png`)} alt={t.doc.alts[i]} width={1653} height={2339}
                    loading="lazy" decoding="async" />
                  <figcaption>{t.doc.captions[i]}</figcaption>
                </figure>
              ))}
            </div>
            <div className="vcut-copy">
              <h3>{t.doc.title}</h3>
              <Rich text={t.doc.body} />
              <ul className="vcut-chips">{t.doc.chips.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
          <div className="vcut-grid">
            <div className="vcut-copy">
              <h3>{t.sheet.title}</h3>
              <Rich text={t.sheet.body} />
              <ul className="vcut-chips">{t.sheet.chips.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <Frame addr={t.sheet.addr}
              shot={{ src: asset("sheet-quote.png"), alt: t.sheet.alt, width: 1254, height: 608 }} />
          </div>
        </div>
        <p className="docset-note">{t.note}</p>
      </div>
    </section>
  );
}
