<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { APP_SETUP_URL, pagePath } from "#lib/site.ts";
  import HeroLight from "#lib/components/ui/HeroLight.svelte";
  import Pill from "#lib/components/ui/Pill.svelte";

  // One neutral line over both doors: you hand the work over, Aetox runs it.
  // The doors right under it carry each side's own promise and proof.
  let { t, lang }: { t: Dict["hero"]; lang: Lang } = $props();
</script>

<div class="hero">
  <HeroLight />
  <div class="wrap">
    <p class="eyebrow hero-eyebrow">{t.eyebrow}</p>
    <h1>{t.h1Before}<span class="hl">{t.h1Highlight}</span>{t.h1After}</h1>
    <p class="lede">{t.lede}</p>
    <div class="cta">
      <Pill href={APP_SETUP_URL}>{t.download}</Pill>
      <Pill variant="soft" href={pagePath(lang, "download")}>{t.other}</Pill>
    </div>
    <p class="fine hero-linux"><a href={`${pagePath(lang, "download")}#linux`}>{t.linuxBeta}</a></p>
    <p class="fine hero-fine">{t.fine}</p>
  </div>
</div>
