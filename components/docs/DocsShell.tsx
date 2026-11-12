import type { Dict, Lang } from "@/lib/i18n";
import { docsPath, docsUrl } from "@/lib/site";
import { anchor, docGroup, docMarkdown, docSlugs, docs as loadDocs, neighbours } from "@/lib/docs";
import type { Doc } from "@/lib/docs";
import { Shell } from "@/components/Page";
import Blocks from "./Blocks";
import DocsNav from "./DocsNav";
import CopyPage from "./CopyPage";

// The frame a docs page sits in: the site's own header and footer (so the page
// is not a second website inside the website), the section's left column, the
// page, and — on a wide screen — the headings of the page on the right.
export default function DocsShell({ lang, t, version, doc }: { lang: Lang; t: Dict; version: string; doc: Doc }) {
  const d = loadDocs(lang);
  const group = docGroup(d, doc.slug);
  const { prev, next } = neighbours(d, doc.slug);
  const md = docMarkdown(doc, docsUrl(lang), new Set(docSlugs(d)));
  const toc = doc.blocks.filter((b) => b.t === "h2").map((b) => ({ id: anchor(b.text), text: b.text }));
  return (
    <Shell lang={lang} page="docs" t={t} version={version}>
      <div className="wrap docs">
        <DocsNav lang={lang} d={d} slug={doc.slug} />
        <article className="docs-art">
          {d.ui.fallback ? <p className="docs-fallback">{d.ui.fallback}</p> : null}
          <p className="eyebrow">{group?.group ?? d.ui.homeTitle}</p>
          <h1>{doc.title}</h1>
          <p className="sub">{doc.sub}</p>
          <div className="docs-tools">
            <CopyPage md={md} label={d.ui.copy} copied={d.ui.copied} copyLabel={d.ui.copyLabel} />
          </div>
          <Blocks blocks={doc.blocks} lang={lang} />
          <nav className="docs-pager" aria-label={d.ui.sections}>
            {prev ? (
              <a className="prev" href={docsPath(lang, prev.slug)}>
                <span>{d.ui.prev}</span>
                <b>{prev.title}</b>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a className="next" href={docsPath(lang, next.slug)}>
                <span>{d.ui.next}</span>
                <b>{next.title}</b>
              </a>
            ) : null}
          </nav>
        </article>
        <aside className="docs-toc">
          <p>{d.ui.onThisPage}</p>
          <ul>
            {toc.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`}>{h.text}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Shell>
  );
}
