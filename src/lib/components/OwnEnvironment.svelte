<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // What the stack lets a person add for themselves, and why adding it stays
  // cheap. The road is CSS: each block fades in through ui/Reveal's
  // IntersectionObserver and the shared [data-reveal] transition in globals.css —
  // no animation library and nothing extra to load. The second heading is a plain
  // h3 on purpose: it names the half that explains the first, not a new section.
  let { t }: { t: Dict["own"] } = $props();
</script>

<section id="own" class="own anchor">
  <div class="wrap">
    <Reveal as="h2" className="sec-title">{t.title}</Reveal>
    <ul class="why-list">
      {#each t.items as i (i.k)}<li><b>{i.k}</b> {i.s}</li>{/each}
    </ul>
    <h3 class="own-h3">{t.powered}</h3>
    <Reveal as="p" className="sec-sub">{t.poweredSub}</Reveal>
    <ul class="why-list">
      {#each t.points as p (p)}<li>{p}</li>{/each}
    </ul>
    <p class="proof-note"><b>{t.result.lead}</b> {t.result.body}</p>
  </div>
</section>
