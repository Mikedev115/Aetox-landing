<script lang="ts">
  import type { Dict } from "#lib/i18n/index.ts";
  import { APP_SETUP_URL } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // Words and one button, no screenshot — the close of every page, the way the
  // big product sites end theirs (Linear, Cursor, Claude).
  let { t }: { t: Dict["cta"] } = $props();
</script>

<section id="get">
  <div class="wrap">
    <Reveal className="banner">
      <div class="copy">
        <h2>{t.h2}</h2><p>{t.p}</p>
        <Pill trail="chev" href={APP_SETUP_URL}>{t.btn}</Pill>
      </div>
    </Reveal>
  </div>
</section>
