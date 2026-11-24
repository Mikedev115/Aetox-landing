<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import Faq from "#lib/components/Faq.svelte";
  import FinalCta from "#lib/components/FinalCta.svelte";

  let { t }: { t: Dict } = $props();

  const p = $derived(t.pages.faq);
</script>

<div class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{p.title}</h1>
    <p class="sub">{p.sub}</p>
  </div>
</div>
<Faq t={t.faq} heading={false} />
<FinalCta t={t.cta} />
