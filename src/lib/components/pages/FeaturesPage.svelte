<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import ProofWall from "#lib/components/ProofWall.svelte";
  import Modes from "#lib/components/Modes.svelte";
  import SecuritySkill from "#lib/components/SecuritySkill.svelte";
  import OwnEnvironment from "#lib/components/OwnEnvironment.svelte";
  import Company from "#lib/components/Company.svelte";
  import VideoCut from "#lib/components/VideoCut.svelte";
  import Network from "#lib/components/Network.svelte";
  import UseCases from "#lib/components/UseCases.svelte";
  import FinalCta from "#lib/components/FinalCta.svelte";

  // Every area in full, in the order the home page lists them. The home page's
  // rows and the README link to the anchors below, so keep the ids.
  let { t, lang }: { t: Dict; lang: Lang } = $props();
</script>

<div class="phead">
  <div class="wrap">
    <p class="eyebrow">Aetox</p>
    <h1>{t.pages.features.title}</h1>
    <p class="sub">{t.pages.features.sub}</p>
  </div>
</div>
<div class="wrap"><ProofWall t={t.wall} /></div>
<span id="developer" class="anchor"></span><span id="code" class="anchor"></span><span id="assistant" class="anchor"></span>
<Modes t={t.modes} {lang} />
<OwnEnvironment t={t.own} />
<SecuritySkill t={t.security} />
<span id="teams" class="anchor"></span>
<Company t={t.company} {lang} />
<span id="studio" class="anchor"></span>
<VideoCut t={t.video} {lang} />
<span id="models" class="anchor"></span>
<Network t={t.network} />
<UseCases t={t.uses} {lang} layout="grid" />
<FinalCta t={t.cta} />
