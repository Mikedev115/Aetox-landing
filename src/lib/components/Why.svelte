<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // Why the same model does better here: what the harness adds around it.
  let { t }: { t: Dict["why"] } = $props();
</script>

<section id="why">
  <div class="wrap">
    <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
    <ul class="why-list">
      {#each t.items as i (i.b)}
        <li><b>{i.b}</b> <span>{i.s}</span></li>
      {/each}
    </ul>
    <p class="sec-sub">{t.foot}</p>
  </div>
</section>
