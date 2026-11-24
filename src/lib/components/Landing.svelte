<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import Hero from "#lib/components/Hero.svelte";
  import Doors from "#lib/components/Doors.svelte";
  import Why from "#lib/components/Why.svelte";
  import Weight from "#lib/components/Weight.svelte";
  import OwnTeaser from "#lib/components/OwnTeaser.svelte";
  import Demo from "#lib/components/Demo.svelte";
  import Documents from "#lib/components/Documents.svelte";
  import Models from "#lib/components/Models.svelte";
  import Areas from "#lib/components/Areas.svelte";
  import HomeClose from "#lib/components/HomeClose.svelte";

  // The home page: one neutral line (hand it over, we run it), then two doors, each
  // selling one thing: the assistant lets you delegate to a team of your own, Code
  // lets the same model finish more. The rest explains why, shows one job, and leads
  // to each area's page. The detail (modes, teams, the studio, the security test,
  // the proof wall, every provider, all eleven jobs) lives on /features/.
  let { t, lang }: { t: Dict; lang: Lang } = $props();
</script>

<Hero t={t.hero} {lang} />
<Doors t={t.doors} {lang} />
<Why t={t.why} />
<Weight t={t.weight} />
<OwnTeaser t={t.own.teaser} {lang} />
<Demo t={t.demo} {lang} />
<Documents t={t.docs} />
<Models t={t.models} />
<Areas t={t.areas} {lang} />
<HomeClose t={t.close} {lang} />
