<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import Rich from "#lib/components/ui/Rich.svelte";

  // Every card has the same four lines in the same places, so the six areas read
  // as one claim: the area, Aetox's number, what it was compared with on the
  // same model, and the test it came from. Numbers are {NAME}s in lib/numbers.ts.
  let { t }: { t: Dict["wall"] } = $props();
</script>

<div class="wall">
  <ul class="wall-grid">
    {#each t.cards as c (c.k)}
      <li class="wall-card">
        <p class="wk">{c.k}</p>
        <p class="wn">{c.n}</p>
        <Rich className="wv" text={c.vs} />
        <Rich className="wc" text={c.cond} />
      </li>
    {/each}
  </ul>
  <Rich className="wall-note" text={t.note} />
</div>
