<script lang="ts" module>
  import type { Dict } from "#lib/i18n/index.ts";
  import { NUMBERS } from "#lib/numbers.ts";
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  // Disk after install, measured per BENCHMARK.md §4. Competitors 27 Jul 2026,
  // Aetox per lib/numbers.ts. Widths are each value over VS Code's 1,171 MB —
  // Aetox's is DISK_MB / 1,171. If the size changes, BENCHMARK.md and the
  // multipliers in the dictionary's weight.foot change with it.
  const ROWS = [
    { icon: "logoA", name: "Aetox", type: "aetox", mb: `${NUMBERS.DISK_MB} MB`, w: 11.4, us: true },
    { icon: "lg-claude", name: "Claude Code", type: "CLI", mb: "236 MB", w: 20.2 },
    { icon: "lg-zed", name: "Zed", type: "IDE", mb: "419 MB", w: 35.8 },
    { icon: "lg-opencode", name: "OpenCode", type: "CLI", mb: "498 MB", w: 42.5 },
    { icon: "lg-perplexity", name: "Comet", type: "comet", mb: "501 MB", w: 42.8 },
    { icon: "lg-cursor", name: "Cursor", type: "IDE", mb: "874 MB", w: 74.6 },
    { icon: "lg-vscode", name: "VS Code", type: "IDE", mb: "1,171 MB", w: 100 },
  ];

  // in the order of t.kpis
  const KPI_VALUES = [NUMBERS.DISK_MB, NUMBERS.TESTS, NUMBERS.TURN_MS, NUMBERS.TOOLS];
</script>

<script lang="ts">
  let { t }: { t: Dict["weight"] } = $props();

  let bench: HTMLDivElement;
  const typeLabel = (type: string) => (type === "aetox" ? t.aetoxType : type === "comet" ? t.cometType : type);

  // bars grow the first time the chart is on screen
  $effect(() => {
    const el = bench;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  });
</script>

<Reveal className="wide">
  <div class="head">
    <div><h2>{t.h2}</h2><p>{t.p}</p></div>
  </div>
  <div class="bench" bind:this={bench} role="img" aria-label={t.benchLabel}>
    {#each ROWS as r (r.name)}
      <div class="brow" class:us={r.us}>
        <div class="nm">
          <svg aria-hidden="true"><use href="#{r.icon}" /></svg><b>{r.name}</b><span>{typeLabel(r.type)}</span>
        </div>
        <div class="track"><div class="fill" style="--w: {r.w}%"></div></div>
        <div class="v">{r.mb}</div>
      </div>
    {/each}
  </div>
  <Rich className="bench-foot" text={t.foot} />
  <div class="kpis">
    {#each t.kpis as k, i (k.k)}
      <div class="kpi">
        <b>{KPI_VALUES[i]}<small>{k.unit}</small></b>
        <div class="k">{k.k}</div>
        <div class="s">{k.s}</div>
      </div>
    {/each}
  </div>
</Reveal>
