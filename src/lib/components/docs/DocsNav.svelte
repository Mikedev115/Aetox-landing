<script lang="ts">
  import type { Lang } from "#lib/i18n/index.ts";
  import { docsPath } from "#lib/site.ts";
  import { docOrder } from "#lib/docs/index.ts";
  import type { DocsDict } from "#lib/docs/index.ts";
  import DocsSearch from "./DocsSearch.svelte";

  // The section's own left column: search first (the fastest way into nineteen
  // pages), then the groups. On a phone the same list turns into a row of chips
  // that scrolls sideways — one list, two shapes, nothing rendered twice.
  let { lang, d, slug }: { lang: Lang; d: DocsDict; slug?: string } = $props();

  const order = $derived(docOrder(d));
  const bySlug = $derived(new Map(order.map((p) => [p.slug, p] as const)));
  const index = $derived(
    order.map((p) => ({
      slug: p.slug,
      title: p.title,
      sub: p.sub,
      group: d.groups.find((g) => g.slugs.includes(p.slug))?.group ?? "",
      headings: p.blocks.flatMap((b) => (b.t === "h2" ? [b.text] : [])),
    })),
  );
</script>

<div class="docs-side">
  <DocsSearch t={d.ui} items={index} base={docsPath(lang)} />
  <nav class="docs-nav" aria-label={d.ui.sections}>
    {#each d.groups as g (g.group)}
      <div class="grp">
        <p>{g.group}</p>
        <ul>
          {#each g.slugs as s (s)}
            {@const p = bySlug.get(s)}
            {#if p}
              <li><a href={docsPath(lang, s)} aria-current={s === slug ? "page" : undefined}>{p.title}</a></li>
            {/if}
          {/each}
        </ul>
      </div>
    {/each}
  </nav>
</div>
