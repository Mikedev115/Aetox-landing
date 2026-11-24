<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { BENCHMARK_MD, CASE_STUDIES_URL } from "#lib/site.ts";
  import RealWork from "#lib/components/RealWork.svelte";
  import FinalCta from "#lib/components/FinalCta.svelte";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  let { t, lang }: { t: Dict; lang: Lang } = $props();

  const p = $derived(t.pages.work);
</script>

<div class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{p.title}</h1>
    <p class="sub">{p.sub}</p>
  </div>
</div>
<RealWork t={t.work} {lang} />
<section class="cases">
  <div class="wrap">
    <Reveal className="wide">
      <div class="head">
        <div><h2>{p.cases}</h2><p>{p.casesSub}</p></div>
      </div>
      <div class="cta">
        <Pill variant="soft" trail="arrow" href={CASE_STUDIES_URL} target="_blank" rel="noopener">{p.cases}</Pill>
        <Pill variant="ghost" trail="arrow" href={BENCHMARK_MD} target="_blank" rel="noopener">BENCHMARK.md</Pill>
      </div>
    </Reveal>
  </div>
</section>
<FinalCta t={t.cta} />
