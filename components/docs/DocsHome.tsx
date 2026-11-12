import type { Dict, Lang } from "@/lib/i18n";
import { docsPath } from "@/lib/site";
import { docOrder, docs as loadDocs } from "@/lib/docs";
import { Shell } from "@/components/Page";
import DocsNav from "./DocsNav";

// /docs/ itself: the way in. Every page of the section listed once, under the
// group it is read in, with the first page marked as the place to start — so
// the index is not a copy of the overview page living at a second address.
export default function DocsHome({ lang, t, version }: { lang: Lang; t: Dict; version: string }) {
  const d = loadDocs(lang);
  const order = docOrder(d);
  const bySlug = new Map(order.map((p) => [p.slug, p]));
  return (
    <Shell lang={lang} page="docs" t={t} version={version}>
      <div className="wrap docs docs-narrow">
        <DocsNav lang={lang} d={d} />
        <article className="docs-art">
          {d.ui.fallback ? <p className="docs-fallback">{d.ui.fallback}</p> : null}
          <p className="eyebrow">Aetox harness</p>
          <h1>{d.ui.homeTitle}</h1>
          <p className="sub">{d.ui.homeSub}</p>
          {d.groups.map((g) => (
            <section key={g.group} className="docs-group">
              <h2>{g.group}</h2>
              <div className="docs-cards">
                {g.slugs.map((slug) => {
                  const p = bySlug.get(slug);
                  if (!p) return null;
                  return (
                    <a key={slug} href={docsPath(lang, slug)} className="docs-card">
                      <b>{p.title}</b>
                      <span>{p.sub}</span>
                      <span className="go" aria-hidden="true">→</span>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </article>
      </div>
    </Shell>
  );
}
