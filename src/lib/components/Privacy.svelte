<script lang="ts">
  import type { PolicyDict } from "#lib/i18n/privacy-en.ts";
  import Rich from "#lib/components/ui/Rich.svelte";

  // The privacy policy as a page of this site, in the same shell as every
  // other page. The dictionary arrives from the route's build-time load, so the
  // whole text is in the prerendered HTML. The language button lands on the
  // policy's own twin.
  let { p }: { p: PolicyDict } = $props();
</script>

<p class="eyebrow">Aetox</p>
<h1>{p.title}</h1>
<p class="date">{p.updated}</p>
{#each p.blocks as b, i (i)}
  {#if b.t === "lede"}
    <div class="lede"><Rich text={b.text} /></div>
  {:else if b.t === "h2"}
    <h2>{b.text}</h2>
  {:else if b.t === "h3"}
    <h3>{b.text}</h3>
  {:else if b.t === "p"}
    <Rich text={b.text} />
  {:else if b.t === "ul"}
    <ul>{#each b.items as it, k (k)}<li><Rich as="span" text={it} /></li>{/each}</ul>
  {/if}
{/each}
<Rich className="store-note" text={p.storeNote} />
