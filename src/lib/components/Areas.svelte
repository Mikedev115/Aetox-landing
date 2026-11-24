<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { pagePath, type PageKey } from "#lib/site.ts";
  import Reveal from "#lib/components/ui/Reveal.svelte";

  // Each area in one line, leading to where it is shown in full. The rows of the
  // dictionary come in this order; the anchors live on those pages.
  const LINKS: [PageKey, string][] = [
    ["features", "developer"],
    ["features", "assistant"],
    ["features", "teams"],
    ["features", "studio"],
    ["download", "mobile-preview"],
    ["download", "cli"],
  ];

  let { t, lang }: { t: Dict["areas"]; lang: Lang } = $props();
</script>

<section id="areas">
  <div class="wrap">
    <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
    <ul class="areas">
      {#each t.rows as r, i (r.k)}
        <li>
          <a href={`${pagePath(lang, LINKS[i][0])}#${LINKS[i][1]}`}>
            <b>{r.k}</b><span>{r.s}</span><i aria-hidden="true">→</i>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
