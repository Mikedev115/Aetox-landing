<script lang="ts">
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { pagePath } from "#lib/site.ts";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  // The two doors right under the hero, each selling one thing (app repo AGENTS.md
  // § Product direction): the assistant lets one person delegate to a team of
  // their own, Code lets the same model finish more. The CEO side is shown by the
  // chain of command and the work moving down it; the Code side by same-model numbers.
  let { t, lang }: { t: Dict["doors"]; lang: Lang } = $props();
  const ceo = $derived(t.ceo);
  const code = $derived(t.code);
</script>

<section id="doors" class="doors-band">
  <div class="wrap doors">
    <article class="door ceo">
      <p class="dk">{ceo.k}</p>
      <h2>{ceo.h1}<span class="hl">{ceo.hl}</span></h2>
      <p class="kicker">{ceo.kicker}</p>
      <p class="dp">{ceo.p}</p>
      <div class="chain" aria-hidden="true">
        {#each ceo.chain as c, i (c)}
          {#if i > 0}<i>→</i>{/if}<span class={i === 0 ? "you" : undefined}>{c}</span>
        {/each}
      </div>
      <ul class="feed">
        {#each ceo.feed as f (f.what)}<li class:ask={f.ask}><b>{f.who}</b><span>{f.what}</span></li>{/each}
      </ul>
      <div class="dmore">
        <Pill variant="soft" trail="chev" href={`${pagePath(lang, "features")}#teams`}>{ceo.more}</Pill>
      </div>
    </article>
    <article class="door code">
      <p class="dk">{code.k}</p>
      <h2>{code.h1}<span class="hl">{code.hl}</span></h2>
      <p class="dp">{code.p}</p>
      <ul class="dnums">
        {#each code.nums as n (n.s)}
          <li><p class="n">{n.n}<small>{n.vs}</small></p><p class="s">{n.s}</p></li>
        {/each}
      </ul>
      <Rich className="dcond" text={code.cond} />
      <div class="dmore">
        <Pill variant="soft" trail="chev" href={`${pagePath(lang, "features")}#code`}>{code.more}</Pill>
      </div>
    </article>
  </div>
</section>
