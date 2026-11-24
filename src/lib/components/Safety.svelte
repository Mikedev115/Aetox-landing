<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { pagePath } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  // `teaser` is the home-page shape: its own heading, and the cards' buttons
  // lead to /safety/. The full page has the heading in its head and the buttons
  // lead on to the policy.
  let { t, lang, teaser }: { t: Dict["safety"]; lang: Lang; teaser?: string } = $props();

  const href = $derived(teaser ? pagePath(lang, "safety") : pagePath(lang, "privacy"));
</script>

<section id="safety">
  <div class="wrap">
    {#if teaser}
      <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
      <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
    {/if}
    <div class="two">
      {#each t.cards as c (c.title)}
        <Reveal as="article" className="scard">
          <h3>{c.title}</h3>
          <Rich text={c.body} />
          <Pill variant="soft" trail="chev" href={href}>{teaser ?? t.more}</Pill>
        </Reveal>
      {/each}
    </div>
    {#if !teaser}<p class="sec-sub" style="margin-top: 2rem; font-size: .9rem">{t.scope}</p>{/if}
  </div>
</section>
