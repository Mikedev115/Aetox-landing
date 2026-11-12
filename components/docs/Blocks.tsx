import type { Lang } from "@/lib/i18n";
import { docsPath } from "@/lib/site";
import { anchor } from "@/lib/docs";
import type { Block } from "@/lib/docs";
import Rich from "@/components/ui/Rich";

// One block of a docs page. A page is data (lib/docs/*.ts), never JSX, so the
// same text can also be handed to the copy button and to llms.txt as Markdown.
//
// Inline markup is the site's own — **bold**, `code`, [text](url) — plus
// [text](docs:slug), which is rewritten here into this site's address for the
// reader's language before Rich sees it.

const DOCS_LINK = /\[([^\]]+)\]\(docs:([a-z0-9-]+)\)/g;

function withDocsLinks(text: string, lang: Lang): string {
  return text.replace(DOCS_LINK, (_all, label: string, slug: string) => `[${label}](${docsPath(lang, slug)})`);
}

/** A card's own href: docs:slug becomes a page of this section, anything else as written. */
function resolveHref(href: string, lang: Lang): string {
  return href.startsWith("docs:") ? docsPath(lang, href.slice(5)) : href;
}

function Inline({ text, lang, as = "p", className }: { text: string; lang: Lang; as?: "p" | "span" | "div"; className?: string }) {
  return <Rich text={withDocsLinks(text, lang)} as={as} className={className} />;
}

export default function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return <Inline key={i} text={b.text} lang={lang} className="docs-p" />;
          case "h2":
            return <h2 key={i} id={anchor(b.text)}>{b.text}</h2>;
          case "h3":
            return <h3 key={i} id={anchor(b.text)}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i} className="docs-ul">
                {b.items.map((item, n) => <li key={n}><Inline text={item} lang={lang} as="span" /></li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="docs-ol">
                {b.items.map((item, n) => <li key={n}><Inline text={item} lang={lang} as="span" /></li>)}
              </ol>
            );
          case "steps":
            return (
              <ol key={i} className="docs-steps">
                {b.items.map((s, n) => (
                  <li key={n}>
                    <span className="n" aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
                    <div>
                      <b>{s.title}</b>
                      <Inline text={s.text} lang={lang} as="span" />
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "code":
            return (
              <figure key={i} className="docs-code">
                {b.label ? <figcaption>{b.label}</figcaption> : null}
                <pre><code>{b.text}</code></pre>
              </figure>
            );
          case "cmds":
            return (
              <div key={i} className="docs-cmds">
                {b.items.map((c, n) => (
                  <div key={n} className="docs-cmd">
                    <div className="h">
                      <b>{c.label}</b>
                      {c.text ? <Inline text={c.text} lang={lang} as="span" /> : null}
                    </div>
                    <pre><code>{c.code}</code></pre>
                  </div>
                ))}
              </div>
            );
          case "note":
            return (
              <aside key={i} className={`docs-note ${b.kind}`}>
                {b.title ? <b>{b.title}</b> : null}
                <Inline text={b.text} lang={lang} />
              </aside>
            );
          case "table":
            return (
              <div key={i} className="docs-table">
                <table>
                  <thead>
                    <tr>{b.head.map((h, n) => <th key={n} scope="col">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, n) => (
                      <tr key={n}>
                        {row.map((cell, m) => (
                          <td key={m} data-label={b.head[m]}><Inline text={cell} lang={lang} as="span" /></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "cards":
            return (
              <div key={i} className="docs-cards">
                {b.items.map((c, n) => (
                  <a
                    key={n}
                    href={resolveHref(c.href, lang)}
                    className="docs-card"
                    {...(/^https?:/.test(c.href) ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    <b>{c.title}</b>
                    <Inline text={c.text} lang={lang} as="span" />
                    <span className="go" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            );
          case "dl":
            return (
              <dl key={i} className="docs-dl">
                {b.items.map((r, n) => (
                  <div key={n}>
                    <dt>{r.k}</dt>
                    <dd><Inline text={r.v} lang={lang} as="span" /></dd>
                  </div>
                ))}
              </dl>
            );
        }
      })}
    </>
  );
}
