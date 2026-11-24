import { error } from "@sveltejs/kit";
import { docSlugs, docs as loadDocs, findDoc } from "#lib/docs/index.ts";
import type { PageLoad } from "./$types";

// One docs page: /docs/<slug>/. The site is static, so the list of addresses is
// the section's own page list, read at build time — an address outside it is a
// 404 rather than a page rendered from a stray path.
const LANG = "en" as const;

export function entries(): { slug: string }[] {
  return docSlugs(loadDocs(LANG)).map((slug) => ({ slug }));
}

export const load: PageLoad = ({ params }) => {
  if (!findDoc(loadDocs(LANG), params.slug)) error(404, "Not found");
  return { slug: params.slug };
};
