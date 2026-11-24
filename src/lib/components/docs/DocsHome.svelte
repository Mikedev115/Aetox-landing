<script lang="ts">
  import type { Lang } from "#lib/i18n/index.ts";
  import { docsPath } from "#lib/site.ts";
  import { docOrder, docs as loadDocs } from "#lib/docs/index.ts";
  import DocsNav from "./DocsNav.svelte";

  // /docs/ itself: the way in. Every page of the section listed once, under the
  // group it is read in — so the index is not a copy of the overview page living
  // at a second address.
  let { lang }: { lang: Lang } = $props();

  const d = $derived(loadDocs(lang));
  const bySlug = $derived(new Map(docOrder(d).map((p) => [p.slug, p] as const)));
</script>

<div class="wrap docs docs-narrow">
  <DocsNav {lang} {d} />
  <article class="docs-art">
    {#if d.ui.fallback}
      <p class="docs-fallback">{d.ui.fallback}</p>
    {/if}
    <p class="eyebrow">Aetox harness</p>
    <h1>{d.ui.homeTitle}</h1>
    <p class="sub">{d.ui.homeSub}</p>
    {#each d.groups as g (g.group)}
      <section class="docs-group">
        <h2>{g.group}</h2>
        <div class="docs-cards">
          {#each g.slugs as slug (slug)}
            {@const p = bySlug.get(slug)}
            {#if p}
              <a href={docsPath(lang, slug)} class="docs-card">
                <b>{p.title}</b>
                <span>{p.sub}</span>
                <span class="go" aria-hidden="true">→</span>
              </a>
            {/if}
          {/each}
        </div>
      </section>
    {/each}
  </article>
</div>
