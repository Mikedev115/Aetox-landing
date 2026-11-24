<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { pagePath } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // One card on the home page for the environment a person builds themselves; the
  // whole story sits at /features/#own. It is the same surface as PricingTeaser —
  // a .wide card with a .head — so nothing new is styled for it. The road is CSS:
  // ui/Reveal drives the shared [data-reveal] transition.
  let { t, lang }: { t: Dict["own"]["teaser"]; lang: Lang } = $props();
</script>

<section id="own-teaser">
  <div class="wrap">
    <Reveal className="wide">
      <div class="head">
        <div><h2>{t.h2}</h2><p>{t.p}</p></div>
        <Pill variant="soft" trail="chev" href={`${pagePath(lang, "features")}#own`}>{t.btn}</Pill>
      </div>
    </Reveal>
  </div>
</section>
