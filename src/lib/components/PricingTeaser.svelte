<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { NUMBERS } from "#lib/numbers.ts";
  import { pagePath } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // Two figures stand in for the whole pricing page: the price of a local
  // model, and the count of providers a key can come from.
  let { t, price, lang }: { t: Dict["pages"]["pricing"]["teaser"]; price: string; lang: Lang } = $props();
</script>

<section id="pricing">
  <div class="wrap">
    <Reveal className="wide teaser">
      <div class="head">
        <div><h2>{t.h2}</h2><p>{t.p}</p></div>
        <Pill variant="soft" trail="chev" href={pagePath(lang, "pricing")}>{t.btn}</Pill>
      </div>
      <div class="kpis two-up">
        <div class="kpi"><b>{price}</b><div class="k">{t.local}</div></div>
        <div class="kpi"><b>{NUMBERS.PROVIDERS}</b><div class="k">{t.provider}</div></div>
      </div>
    </Reveal>
  </div>
</section>
