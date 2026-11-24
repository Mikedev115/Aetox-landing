<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import Supporters from "#lib/components/Supporters.svelte";
  import FinalCta from "#lib/components/FinalCta.svelte";

  let { t, lang }: { t: Dict; lang: Lang } = $props();

  const p = $derived(t.pages.supporters);
</script>

<!-- The shell in the React version put class="page-center" on <main> for this
     page, and src/globals.css hangs the centred head and cards off it. The
     layout here sets only the privacy page's class, so the page carries it. -->
<div class="page-center">
  <div class="phead">
    <div class="wrap">
      <p class="eyebrow">Aetox</p>
      <h1>{p.title}</h1>
      <p class="sub">{p.sub}</p>
    </div>
  </div>
  <Supporters t={p} {lang} />
  <FinalCta t={t.cta} />
</div>
