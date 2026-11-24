<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { asset, assetLang } from "#lib/site.ts";
  import Frame from "#lib/components/ui/Frame.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // One job from the request to the finished page, in the real app. It used to
  // sit under the hero; the hero now carries the proof wall instead.
  let { t, lang }: { t: Dict["demo"]; lang: Lang } = $props();

  const clip = $derived(assetLang(lang));
</script>

<section id="demo" class="demo">
  <div class="wrap">
    <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
    <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
    <div class="demo-visual">
      <Frame
        addr={t.frameAddr}
        shot={{
          src: asset(`hero-${clip}.png`),
          video: asset(`hero-${clip}.mp4`),
          alt: t.imgAlt,
          width: 2016,
          height: 1198,
        }} />
    </div>
    <p class="fine demo-note">{t.note}</p>
  </div>
</section>
