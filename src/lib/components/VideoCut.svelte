<script lang="ts" module>
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { asset, assetLang } from "#lib/site.ts";

  // The cut room: one loop of the app's editor for `.cut` files beside the copy.
  // `cut-<lang>.mp4` with a PNG poster of its last frame, 1148×718 like the
  // mode loops (the studio's landing/shoot-cut.mjs). The .cut it opens was made
  // by the real engine, so the proof line's numbers are that run's.
</script>

<script lang="ts">
  import Frame from "#lib/components/ui/Frame.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  let { t, lang }: { t: Dict["video"]; lang: Lang } = $props();
</script>

<section id="video" class="vcut">
  <div class="wrap">
    <div class="vcut-grid">
      <Frame
        className="vcut-frame"
        addr={t.addr}
        shot={{
          src: asset(`cut-${assetLang(lang)}.png`),
          video: asset(`cut-${assetLang(lang)}.mp4`),
          width: 1148,
          height: 718,
          alt: t.alt,
        }} />
      <div class="vcut-copy">
        <div class="eyebrow">{t.kick}</div>
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Rich className="lead" text={t.lead} />
        <Rich text={t.body} />
        <ul class="vcut-chips">{#each t.chips as c (c)}<li>{c}</li>{/each}</ul>
        <Rich className="vcut-proof" text={t.proof} />
      </div>
    </div>
  </div>
</section>
