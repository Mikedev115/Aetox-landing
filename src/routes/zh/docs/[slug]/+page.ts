import { error } from "@sveltejs/kit";
import { docSlugs, docs as loadDocs, findDoc } from "#lib/docs/index.ts";
import type { PageLoad } from "./$types";

// One docs page: /zh/docs/<slug>/. Same pages as the English section, read from
// the Chinese data — the build writes a file for each of them.
const LANG = "zh" as const;

export function entries(): { slug: string }[] {
  return docSlugs(loadDocs(LANG)).map((slug) => ({ slug }));
}

export const load: PageLoad = ({ params }) => {
  if (!findDoc(loadDocs(LANG), params.slug)) error(404, "Not found");
  return { slug: params.slug };
};
