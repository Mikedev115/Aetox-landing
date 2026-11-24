<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { APP_SETUP_URL, pagePath } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // The home page's last block: the safety promise in three sentences and the
  // download, in the banner the other pages close with.
  let { t, lang }: { t: Dict["close"]; lang: Lang } = $props();
</script>

<section id="get">
  <div class="wrap">
    <Reveal className="banner">
      <div class="copy">
        <h2>{t.h2}</h2>
        <p>{t.p}</p>
        <div class="cta close-cta">
          <Pill trail="chev" href={APP_SETUP_URL}>{t.btn}</Pill>
          <Pill variant="soft" trail="chev" href={pagePath(lang, "safety")}>{t.safety}</Pill>
        </div>
        <p class="fine close-ways"><a class="u" href={pagePath(lang, "download")}>{t.ways}</a></p>
      </div>
    </Reveal>
  </div>
</section>
