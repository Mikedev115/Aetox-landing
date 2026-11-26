<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import { NUMBERS } from "#lib/numbers.ts";
  import { APP_SETUP_URL, CLI_SETUP_URL, LINUX_TARBALL_URL, RELEASES, STORE_URL } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";
  import WingetCmd from "#lib/components/ui/WingetCmd.svelte";

  // The body of /download/. Values for the three facts: the version is read at
  // build time (lib/version.ts), the installer size is in lib/numbers.ts, and
  // the labels come from the dictionary.
  let { t, version }: { t: Dict["pages"]["download"]; version: string } = $props();

  const values = $derived([`v${version}`, `${NUMBERS.INSTALLER_MB} MB`, "Windows · Linux"]);
</script>

<div class="wrap">
  <div class="cta dl-cta">
    <Pill href={APP_SETUP_URL}>{t.setup}</Pill>
    <Pill variant="ghost" href={CLI_SETUP_URL}>{t.cliSetup}</Pill>
    <Pill variant="ghost" trail="arrow" href={STORE_URL}>{t.store}</Pill>
  </div>
  <div class="dl-cmd"><WingetCmd t={t} /></div>
  <Rich className="fine" text={t.fine} />
</div>
<section>
  <div class="wrap">
    <div class="kpis three-up">
      {#each t.facts as f, i (f.k)}
        <Reveal className="kpi"><b>{values[i]}</b><div class="k">{f.k}</div><div class="s">{f.s}</div></Reveal>
      {/each}
    </div>
    <div class="three ways">
      {#each t.ways as w (w.title)}
        <Reveal as="article" className="scard"><h3>{w.title}</h3><Rich text={w.body} /></Reveal>
      {/each}
    </div>
    <Reveal className="scard uninstall"><h3>{t.oneChannel.title}</h3><p>{t.oneChannel.body}</p></Reveal>
    <Reveal className="scard uninstall">
      <span id="cli" class="anchor"></span>
      <h3>{t.cli.title}</h3>
      <Rich text={t.cli.body} />
      <div class="cli-get"><Pill variant="ghost" trail="arrow" href={CLI_SETUP_URL}>{t.cli.button}</Pill></div>
      <Rich className="cli-note" text={t.cli.note} />
    </Reveal>
    <Reveal className="scard uninstall">
      <span id="linux" class="anchor"></span>
      <h3>{t.linux.title}</h3>
      <Rich text={t.linux.body} />
      <div class="cli-get"><Pill variant="ghost" trail="arrow" href={LINUX_TARBALL_URL}>{t.linux.button}</Pill></div>
      <Rich className="cli-note" text={t.linux.note} />
    </Reveal>
    <Reveal className="scard uninstall"><h3>{t.uninstallTitle}</h3><p>{t.uninstallBody}</p></Reveal>
  </div>
</section>
