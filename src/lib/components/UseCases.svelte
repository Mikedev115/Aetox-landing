<script lang="ts" module>
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { asset, assetLang, pagePath } from "#lib/site.ts";

  // One picture per card, in the order of t.cards: `name` is the file pair in
  // public/assets (`<name>-th.png` / `<name>-en.png`, 748×542 — the card's
  // 374×271 window at 2x, already cropped to the one panel the card is about).
  // A card still waiting for its capture names its slot in the shot plan
  // instead. The research card has no picture: it shows the numbers from the run
  // (see ResearchStats). The terminal card is the real console (internal/tui)
  // run against a scripted engine and replayed into xterm.js — the studio's
  // promo/landing/cli/, since the studio itself only renders the window.
  type Pic = { name: string } | { slot: string };
  const PICS: (Pic | null)[] = [
    { name: "uc-slips" },
    { name: "uc-clip" },
    { name: "uc-meeting" },
    { name: "uc-web" },
    null,
    { slot: "S08" },
    { name: "uc-git" },
    { name: "uc-map" },
    { name: "uc-team" },
    { name: "uc-install" },
    { name: "uc-terminal" },
  ];

  // Numbers from the CRM job of 15 Aug 2026 — the same four the old page
  // carried as its stat cards. Labels come from the dictionary.
  const RESEARCH = ["6:51", "42", "20", "6"];
</script>

<script lang="ts">
  import Frame from "#lib/components/ui/Frame.svelte";
  import Pill from "#lib/components/ui/Pill.svelte";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Slot from "#lib/components/ui/Slot.svelte";

  // Two shapes of the same cards. The home page shows them as a carousel
  // under the statement, with a link to the full page; /features/ lays them all
  // out in a grid under its own title, so `layout="grid"` renders no heading.
  let {
    t,
    lang,
    more,
    layout = "carousel",
  }: { t: Dict["uses"]; lang: Lang; more?: string; layout?: "carousel" | "grid" } = $props();

  let car = $state<HTMLDivElement>();
  let edge = $state({ start: true, end: false });

  $effect(() => {
    const el = car;
    if (!el) return;
    const sync = () => (edge = { start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      removeEventListener("resize", sync);
    };
  });

  const step = (dir: 1 | -1) => {
    const el = car;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ucard");
    const w = card ? card.getBoundingClientRect().width + 16 : 400;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * w, behavior: reduced ? "auto" : "smooth" });
  };
</script>

{#snippet researchStats(rs: Dict["uses"]["researchStats"])}
  <div class="stat-pic" aria-label={rs.label}>
    {#each rs.items as it, i (it.k)}
      <div><b>{RESEARCH[i]}<small>{it.unit}</small></b><span>{it.k}</span></div>
    {/each}
  </div>
{/snippet}

{#snippet cards()}
  {#each t.cards as c, i (c.title)}
    {@const pic = PICS[i]}
    <article class="ucard">
      <div class="txt"><h3>{c.title}</h3><p>{c.body}</p></div>
      {#if pic && "name" in pic}
        <div class="pic"><Frame shot={{ src: asset(`${pic.name}-${assetLang(lang)}.png`), width: 748, height: 542, alt: c.alt }} /></div>
      {:else if pic}
        <div class="pic"><Frame><Slot id={pic.slot} /></Frame></div>
      {:else}
        {@render researchStats(t.researchStats)}
      {/if}
    </article>
  {/each}
{/snippet}

{#if layout === "grid"}
  <section id="uses">
    <div class="wrap"><div class="ucgrid">{@render cards()}</div></div>
  </section>
{:else}
  <section id="uses" class="statement">
    <div class="wrap">
      <Reveal as="h2">{t.h2}</Reveal>
      <div class="car-nav">
        <button type="button" aria-label={t.prev} disabled={edge.start} onclick={() => step(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        </button>
        <button type="button" aria-label={t.next} disabled={edge.end} onclick={() => step(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
    <div class="wrap">
      <div class="carousel" bind:this={car}>{@render cards()}</div>
      {#if more}<div class="more-row"><Pill variant="soft" trail="chev" href={pagePath(lang, "features")}>{more}</Pill></div>{/if}
    </div>
  </section>
{/if}
