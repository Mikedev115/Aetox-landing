<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  // Native <details> — open/close works with scripts off, and the browser
  // handles keyboard and screen readers.
  let { t, heading = true }: { t: Dict["faq"]; heading?: boolean } = $props();
</script>

<section id="faq">
  <div class="wrap">
    {#if heading}
      <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
      <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
    {/if}
    <div class="faq">
      {#each t.items as it (it.q)}
        <details>
          <summary>{it.q}</summary>
          {#each it.a as p (p)}<Rich text={p} />{/each}
        </details>
      {/each}
    </div>
  </div>
</section>
