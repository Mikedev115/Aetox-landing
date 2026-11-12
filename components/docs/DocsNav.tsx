import type { Lang } from "@/lib/i18n";
import { docsPath } from "@/lib/site";
import { docOrder, type DocsDict } from "@/lib/docs";
import DocsSearch from "./DocsSearch";

// The section's own left column: search first (the fastest way into nine pages),
// then the groups. On a phone the same list turns into a row of chips that
// scrolls sideways — one list, two shapes, nothing rendered twice.
export default function DocsNav({ lang, d, slug }: { lang: Lang; d: DocsDict; slug?: string }) {
  const order = docOrder(d);
  const bySlug = new Map(order.map((p) => [p.slug, p]));
  const index = order.map((p) => ({ slug: p.slug, title: p.title, sub: p.sub, group: d.groups.find((g) => g.slugs.includes(p.slug))?.group ?? "", headings: p.blocks.flatMap((b) => (b.t === "h2" ? [b.text] : [])) }));
  return (
    <div className="docs-side">
      <DocsSearch t={d.ui} items={index} base={docsPath(lang)} />
      <nav className="docs-nav" aria-label={d.ui.sections}>
        {d.groups.map((g) => (
          <div key={g.group} className="grp">
            <p>{g.group}</p>
            <ul>
              {g.slugs.map((s) => {
                const p = bySlug.get(s);
                if (!p) return null;
                return (
                  <li key={s}>
                    <a href={docsPath(lang, s)} aria-current={s === slug ? "page" : undefined}>{p.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
