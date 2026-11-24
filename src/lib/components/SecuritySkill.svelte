<script lang="ts" module>
  import type { Dict } from "#lib/i18n/index.ts";
  import { SECURITY_SKILL } from "#lib/numbers.ts";

  // The cleanest experiment we have: the same model on the same build, with only
  // the bundled security skill switched. Bars are drawn to scale on the 15
  // functions of the task; the other harnesses are shown as their range so the
  // reader sees the skill-off bar land among them.
  const OF = 15;
  const pct = (v: number) => `${((v / OF) * 100).toFixed(1)}%`;
  const one = (v: number) => v.toFixed(1);
</script>

<script lang="ts">
  import Reveal from "#lib/components/ui/Reveal.svelte";
  import Rich from "#lib/components/ui/Rich.svelte";

  let { t }: { t: Dict["security"] } = $props();
</script>

<section id="security-skill" class="sec-band">
  <div class="wrap">
    <Reveal as="p" className="eyebrow sec-ey">{t.eyebrow}</Reveal>
    <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
    <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
    <div class="sec-grid">
      <Reveal as="div" className="sec-card">
        <p class="sc">{t.chart}</p>
        {#each SECURITY_SKILL as m (m.size)}
          <div class="sec-model">
            <p class="sm">{t.models[m.size]}</p>
            <div class="sbar"><span>{t.off}</span><i><b style="width: {pct(m.off)}"></b></i><em>{one(m.off)}</em></div>
            <div class="sbar on"><span>{t.on}</span><i><b style="width: {pct(m.on)}"></b></i><em>{one(m.on)}</em></div>
            <div class="sbar dim">
              <span>{t.others}</span>
              <i><b style="left: {pct(m.others[0])}; width: {pct(m.others[1] - m.others[0])}" class="range"></b></i>
              <em>{one(m.others[0])}–{one(m.others[1])}</em>
            </div>
          </div>
        {/each}
      </Reveal>
      <Reveal as="div" className="sec-card">
        <p class="sm">{t.holesTitle}</p>
        <ul class="holes">
          {#each t.holes as h (h.b)}<li><span>{h.b}</span><code>{h.n}</code></li>{/each}
        </ul>
      </Reveal>
    </div>
    <Rich className="proof-note" text={t.note} />
  </div>
</section>
