// One door to the docs section: the pages in the reader's language, the order
// they are read in, and the neighbours of the page being drawn. The pages
// themselves live in ./en.ts, ./th.ts and ./zh.ts.
import type { Lang } from "@/lib/i18n";
import { docsEn } from "./en";
import { docsTh } from "./th";
import { docsZh } from "./zh";
import { anchor } from "./md";
import type { Doc, DocGroup, DocsDict } from "./types";

export { anchor, docMarkdown, llmsText } from "./md";
export type { Block, Doc, DocGroup, DocsDict, DocsUI } from "./types";

export function docs(lang: Lang): DocsDict {
  if (lang === "th") return docsTh;
  if (lang === "zh") return docsZh;
  return docsEn;
}

/** The pages in reading order — groups flattened, as the sidebar draws them. */
export function docOrder(d: DocsDict): Doc[] {
  const bySlug = new Map(d.pages.map((p) => [p.slug, p]));
  return d.groups.flatMap((g) => g.slugs.map((s) => bySlug.get(s)).filter((p): p is Doc => Boolean(p)));
}

export function findDoc(d: DocsDict, slug: string | undefined): Doc | undefined {
  const order = docOrder(d);
  return slug ? order.find((p) => p.slug === slug) : order[0];
}

export function docSlugs(d: DocsDict): string[] {
  return docOrder(d).map((p) => p.slug);
}

/** The group a page sits under, for its eyebrow line. */
export function docGroup(d: DocsDict, slug: string): DocGroup | undefined {
  return d.groups.find((g) => g.slugs.includes(slug));
}

/** The page before and after it, in reading order; the index has no before. */
export function neighbours(d: DocsDict, slug: string | undefined): { prev?: Doc; next?: Doc } {
  const order = docOrder(d);
  if (!slug) return { next: order[1] };
  const i = order.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? order[i - 1] : undefined, next: i >= 0 ? order[i + 1] : undefined };
}
