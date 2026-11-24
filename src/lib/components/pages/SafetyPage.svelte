<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { LICENSE, THIRD_PARTY, pagePath } from "#lib/site.ts";
  import Safety from "#lib/components/Safety.svelte";
  import FinalCta from "#lib/components/FinalCta.svelte";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  let { t, lang }: { t: Dict; lang: Lang } = $props();

  const p = $derived(t.pages.safety);
</script>

<div class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{p.title}</h1>
    <p class="sub">{p.sub}</p>
  </div>
</div>
<Safety t={t.safety} {lang} />
<section class="policies">
  <div class="wrap">
    <Reveal className="wide">
      <div class="head">
        <div><h2>{p.policies}</h2><p>{p.policiesSub}</p></div>
      </div>
      <div class="cta">
        <Pill variant="soft" trail="chev" href={pagePath(lang, "privacy")}>{t.footer.privacy}</Pill>
        <Pill variant="ghost" trail="arrow" href={LICENSE}>{t.footer.license}</Pill>
        <Pill variant="ghost" trail="arrow" href={THIRD_PARTY}>{t.footer.third}</Pill>
      </div>
    </Reveal>
  </div>
</section>
<FinalCta t={t.cta} />
