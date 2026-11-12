import { docsEn } from "./en";
import type { DocsDict } from "./types";

// Chinese pages run the English edition of this section with one note at the
// top, the same way the Chinese pages borrow the English screenshots until a
// Chinese shoot exists (lib/site.ts, assetLang). Translating the section badly
// would read worse than saying which edition it is, so the note says it.
export const docsZh: DocsDict = {
  ...docsEn,
  ui: {
    ...docsEn.ui,
    search: "Search the docs",
    homeTitle: "Aetox docs",
    homeSub: "Nine pages from install to troubleshooting: what the app is, how it is set up, and what it does with the model you connect.",
    startHere: "Start here",
    fallback: "本节目前只有英文版 · This section is in English for now.",
  },
};
