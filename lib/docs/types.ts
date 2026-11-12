// The docs section's content model. A page is a list of blocks, written per
// language in ./en.ts, ./th.ts and ./zh.ts — no markdown file is parsed at
// build time, so the site keeps its single toolchain and a page cannot break
// a build by a stray character.
//
// Inline markup inside a string is the site's own (see components/ui/Rich.tsx):
// **bold**, `code`, [text](url), and [text](docs:slug) for a link to another
// page of this section, whose title and language path are filled in when the
// block is drawn.

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  // A setup page's numbered steps, each with a title and one line under it.
  | { t: "steps"; items: { title: string; text: string }[] }
  | { t: "code"; text: string; label?: string }
  // The same job done by different tools (Store · winget · installer), one tab each.
  | { t: "cmds"; items: { label: string; code: string; text?: string }[] }
  | { t: "note"; kind: "tip" | "warn"; title?: string; text: string }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "cards"; items: { title: string; text: string; href: string }[] }
  | { t: "dl"; items: { k: string; v: string }[] };

export type Doc = {
  slug: string;
  title: string;
  sub: string;
  metaTitle: string;
  metaDescription: string;
  blocks: Block[];
};

/** One sidebar heading and the pages under it, in reading order. */
export type DocGroup = { group: string; slugs: string[] };

/** Strings the two client components need, in the reader's language. */
export type DocsUI = {
  search: string;
  searchPlaceholder: string;
  searchEmpty: string;
  searchHint: string;
  onThisPage: string;
  prev: string;
  next: string;
  copy: string;
  copied: string;
  copyLabel: string;
  sections: string;
  backToDocs: string;
  homeTitle: string;
  homeSub: string;
  startHere: string;
  // Shown on Chinese pages until the section has a Chinese edition.
  fallback: string;
};

export type DocsDict = { ui: DocsUI; groups: DocGroup[]; pages: Doc[] };
