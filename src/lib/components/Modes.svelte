<script lang="ts" module>
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { CODING_SECURE } from "#lib/numbers.ts";
  import { asset, assetLang } from "#lib/site.ts";

  // One loop per mode, in the order of t.items: `mode-<name>-<lang>.mp4` with a
  // PNG poster of its last frame, 1148×718 — the 574 px stage at 2x, 16:10.
  const LOOPS = ["assist", "code"];
</script>

<script lang="ts">
  import Rich from "#lib/components/ui/Rich.svelte";

  // Two headings on the left, one sticky window on the right. While the
  // visitor scrolls, whichever heading crosses the middle of the viewport owns
  // the window — the same scroll-driven telling as the reference, without a
  // scroll library. Under 820px the list stacks and the observer is not used.
  // Only the active loop plays, from its start; under reduced motion none does
  // and each shows its poster.
  let { t, lang }: { t: Dict["modes"]; lang: Lang } = $props();

  let active = $state(0);
  let refs: (HTMLDivElement | null)[] = [];
  let vids: (HTMLVideoElement | null)[] = [];
  let stage: HTMLDivElement;

  $effect(() => {
    if (!("IntersectionObserver" in window) || !matchMedia("(min-width: 821px)").matches) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) active = Number((en.target as HTMLElement).dataset.mode);
        }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  });

  // The active loop plays only while the stage is on screen. A play() made
  // in a background tab is refused and never retried, so the observer (which
  // fires again once the tab is shown) is what starts it, not the tab switch.
  let seen = false;
  $effect(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sync = (restart: boolean) =>
      vids.forEach((v, i) => {
        if (!v) return;
        if (i === active && seen && !still) {
          if (restart) v.currentTime = 0;
          v.play().catch(() => {});
        } else v.pause();
      });
    if (!stage || !("IntersectionObserver" in window)) {
      seen = true;
      sync(true);
      return;
    }
    sync(true);
    const io = new IntersectionObserver(([en]) => {
      seen = en.isIntersecting;
      sync(false);
    });
    io.observe(stage);
    return () => io.disconnect();
  });

  const cur = $derived(t.items[active]);
</script>

<section id="modes">
  <div class="wrap">
    <div class="modes">
      <div class="list">
        {#each t.items as m, i (m.title)}
          <!-- The heading is the click target in the original too (a whole card, not a
               button), and on a narrow screen the click is the only way to change mode:
               the observer is off under 820px. The markup and the classes stay as they are. -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <div
            bind:this={refs[i]}
            data-mode={i}
            class="mode"
            class:active={i === active}
            onclick={() => (active = i)}>
            <h3><span>{m.title}</span><small>{String(i + 1).padStart(2, "0")}</small></h3>
            <div class="body"><div>
              <p class="lead">{m.lead}</p>
              <p>{m.body}</p>
              {#if "proof" in m && m.proof}
                <div class="proof">
                  <div class="k">{m.proof.label}</div>
                  {#each CODING_SECURE as [name, v], j (name)}
                    <div class="row" class:us={j === 0}><span>{name}</span><i><b style="width: {v}%"></b></i><em>{v.toFixed(1)}%</em></div>
                  {/each}
                  <Rich className="note" text={m.proof.note} />
                </div>
              {/if}
            </div></div>
          </div>
        {/each}
      </div>
      <div class="stage" bind:this={stage}>
        <div class="frame">
          <div class="chrome" aria-hidden="true"><i></i><i></i><i></i><span class="addr">{cur.addr}</span></div>
          {#each LOOPS as name, i (name)}
            <video
              bind:this={vids[i]}
              class="layer"
              class:on={i === active}
              src={asset(`mode-${name}-${assetLang(lang)}.mp4`)}
              poster={asset(`mode-${name}-${assetLang(lang)}.png`)}
              width="1148"
              height="718"
              aria-label={t.items[i].alt}
              muted
              loop
              playsinline
              preload={i === 0 ? "auto" : "metadata"}></video>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
