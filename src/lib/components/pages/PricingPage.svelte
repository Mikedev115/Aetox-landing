<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import Pricing from "#lib/components/Pricing.svelte";
  import Weight from "#lib/components/Weight.svelte";
  import FinalCta from "#lib/components/FinalCta.svelte";

  let { t, lang }: { t: Dict; lang: Lang } = $props();

  const p = $derived(t.pages.pricing);
</script>

<div class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{p.title}</h1>
    <p class="sub">{p.sub}</p>
  </div>
</div>
<section id="pricing">
  <div class="wrap">
    <Pricing t={t.pricing} />
    <Weight t={t.weight} />
  </div>
</section>
<FinalCta t={t.cta} />
