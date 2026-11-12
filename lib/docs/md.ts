// A docs page as Markdown. Two readers use it: the "copy page" button, which
// puts the whole page on the clipboard for pasting into a model, and
// public/llms.txt, which lists the section for an agent that lands here.
// Nothing here reaches a browser on its own — blocks carry the site's inline
// markup, which is close enough to Markdown that it is passed through.

import type { Block, Doc, DocGroup } from "./types";

/** The heading anchors are built from the text, in both scripts. */
export function anchor(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_[\]()]/g, "")
    // \p{M} keeps Thai vowel and tone marks inside the word instead of
    // turning each one into a dash.
    .replace(/[^\p{L}\p{M}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

/** [text](docs:slug) → the page's absolute address, in the page's language. */
function links(text: string, base: string, slugs: Set<string>): string {
  return text.replace(/\[([^\]]+)\]\(docs:([a-z0-9-]+)\)/g, (whole, label, slug) =>
    slugs.has(slug) ? `[${label}](${base}${slug}/)` : whole,
  );
}

function blockLines(b: Block, base: string, slugs: Set<string>): string[] {
  switch (b.t) {
    case "p":
      return [links(b.text, base, slugs), ""];
    case "h2":
      return [`## ${b.text}`, ""];
    case "h3":
      return [`### ${b.text}`, ""];
    case "ul":
      return [`- ${b.items.map((i) => links(i, base, slugs)).join("\n- ")}`, ""];
    case "ol":
      return [`1. ${b.items.map((i) => links(i, base, slugs)).join("\n2. ")}`, ""];
    case "steps":
      return [b.items.map((i, n) => `${n + 1}. **${i.title}** — ${links(i.text, base, slugs)}`).join("\n"), ""];
    case "code":
      return ["```", b.text, "```", ""];
    case "cmds":
      return [b.items.map((i) => `**${i.label}**${i.text ? ` — ${i.text}` : ""}\n\n\`\`\`\n${i.code}\n\`\`\``).join("\n\n"), ""];
    case "note":
      return [`> **${b.title ?? (b.kind === "warn" ? "Note" : "Tip")}:** ${links(b.text, base, slugs)}`, ""];
    case "table": {
      const row = (cells: string[]) => `| ${cells.map((c) => c.replace(/\|/g, "\\|")).join(" | ")} |`;
      return [row(b.head), row(b.head.map(() => "---")), ...b.rows.map(row), ""];
    }
    case "cards":
      return [b.items.map((i) => `- [${i.title}](${i.href}) — ${links(i.text, base, slugs)}`).join("\n"), ""];
    case "dl":
      return [b.items.map((i) => `- **${i.k}** — ${links(i.v, base, slugs)}`).join("\n"), ""];
  }
}

/** One page as Markdown, the way the copy button hands it over. */
export function docMarkdown(doc: Doc, base: string, slugs: Set<string>): string {
  return [`# ${doc.title}`, "", doc.sub, "", ...doc.blocks.flatMap((b) => blockLines(b, base, slugs))].join("\n").trimEnd() + "\n";
}

/** llms.txt: a short index of the section, one line per page. */
export function llmsText(title: string, summary: string, groups: DocGroup[], pages: Doc[], base: string): string {
  const bySlug = new Map(pages.map((p) => [p.slug, p]));
  const lines = [`# ${title}`, "", `> ${summary}`, ""];
  for (const g of groups) {
    lines.push(`## ${g.group}`, "");
    for (const slug of g.slugs) {
      const p = bySlug.get(slug);
      if (p) lines.push(`- [${p.title}](${base}${p.slug}/): ${p.sub}`);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}
