<script lang="ts">
  import type { Lang } from "#lib/i18n/index.ts";
  import { docsPath, docsUrl } from "#lib/site.ts";
  import { anchor, docGroup, docMarkdown, docSlugs, docs as loadDocs, neighbours } from "#lib/docs/index.ts";
  import type { Doc } from "#lib/docs/index.ts";
  import Blocks from "./Blocks.svelte";
  import CopyPage from "./CopyPage.svelte";
  import DocsNav from "./DocsNav.svelte";

  // The frame a docs page sits in: the section's left column, the page, and — on
  // a wide screen — the headings of the page on the right. The site's own header
  // and footer come from the root layout, so a docs page is not a second website
  // inside the website.
  let { lang, doc }: { lang: Lang; doc: Doc } = $props();

  const d = $derived(loadDocs(lang));
  const group = $derived(docGroup(d, doc.slug));
  const near = $derived(neighbours(d, doc.slug));
  const md = $derived(docMarkdown(doc, docsUrl(lang), new Set(docSlugs(d))));
  const toc = $derived(doc.blocks.flatMap((b) => (b.t === "h2" ? [{ id: anchor(b.text), text: b.text }] : [])));
</script>

<div class="wrap docs">
  <DocsNav {lang} {d} slug={doc.slug} />
  <article class="docs-art">
    {#if d.ui.fallback}
      <p class="docs-fallback">{d.ui.fallback}</p>
    {/if}
    <p class="eyebrow">{group?.group ?? d.ui.homeTitle}</p>
    <h1>{doc.title}</h1>
    <p class="sub">{doc.sub}</p>
    <div class="docs-tools">
      <CopyPage md={md} label={d.ui.copy} copied={d.ui.copied} copyLabel={d.ui.copyLabel} />
    </div>
    <Blocks blocks={doc.blocks} {lang} />
    <nav class="docs-pager" aria-label={d.ui.sections}>
      {#if near.prev}
        <a class="prev" href={docsPath(lang, near.prev.slug)}>
          <span>{d.ui.prev}</span>
          <b>{near.prev.title}</b>
        </a>
      {:else}
        <span></span>
      {/if}
      {#if near.next}
        <a class="next" href={docsPath(lang, near.next.slug)}>
          <span>{d.ui.next}</span>
          <b>{near.next.title}</b>
        </a>
      {/if}
    </nav>
  </article>
  <aside class="docs-toc">
    <p>{d.ui.onThisPage}</p>
    <ul>
      {#each toc as h (h.id)}
        <li><a href={`#${h.id}`}>{h.text}</a></li>
      {/each}
    </ul>
  </aside>
</div>
