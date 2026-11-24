<script lang="ts" module>
  import type { Dict, Lang } from "#lib/i18n/index.ts";
  import { asset, assetLang } from "#lib/site.ts";

  // The company room: the studio's take of the app's 3D campus (fixed camera),
  // with the camera move done in CSS: a wide shot of the whole campus, then a
  // slow dive into the content team's room, where tool pills appear over the
  // agents and finished work flies to the team head. A live board and an
  // activity feed sit on top. Pins and flight paths are in the take's own pixels
  // (company-<lang>.json from promo/landing/shoot-company.mjs), so a new take
  // means new numbers here. Under reduced motion the stage holds on the room.
  const PIC = { w: 2016, h: 1198 };
  // `end` pins hang to the left of their point.
  const PINS = [
    { x: 505, y: 150, dot: "#ff4fb8", end: true },
    { x: 575, y: 182, dot: "#4fd2ff" },
    { x: 650, y: 214, dot: "#8f9bff" },
    { x: 668, y: 350, dot: "#ffd36b", head: true },
  ];
  const FROM = [
    [509, 169, "#ff4fb8"],
    [571, 200, "#4fd2ff"],
    [633, 231, "#8f9bff"],
  ] as const;
  const TO = [665, 371];
  const HOLO = { x: 1601, y: 893 };
</script>

<script lang="ts">
  let { t, lang }: { t: Dict["company"]; lang: Lang } = $props();

  let feed = $state([0, 1, 2]);
  let done = $state(12);
  let pct = $state(64);
  let trails: SVGGElement;
  let packets: SVGGElement;
  let stage: HTMLDivElement;
  let video: HTMLVideoElement;

  $effect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let on = false,
      n = 3;
    const io = new IntersectionObserver(([en]) => {
      on = en.isIntersecting;
      if (on) video?.play().catch(() => {});
      else video?.pause();
    });
    if (stage) io.observe(stage);
    const NS = "http://www.w3.org/2000/svg";
    const fly = () => {
      if (!on || !trails || !packets) return;
      const [x1, y1, c] = FROM[(Math.random() * FROM.length) | 0];
      const path = document.createElementNS(NS, "path") as SVGPathElement;
      path.setAttribute("d", `M${x1} ${y1} Q${(x1 + TO[0]) / 2 + 40} ${Math.min(y1, TO[1]) - 70} ${TO[0]} ${TO[1]}`);
      path.setAttribute("class", "co-trail");
      path.setAttribute("stroke", c);
      trails.appendChild(path);
      const len = path.getTotalLength();
      const g = document.createElementNS(NS, "g") as SVGGElement;
      g.innerHTML = `<rect x="-6" y="-8" width="12" height="16" rx="2" fill="${c}" stroke="#fff" stroke-width="1.4"/><path d="M-3 -3h6M-3 0.5h6M-3 4h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>`;
      packets.appendChild(g);
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / 1700),
          e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const p = path.getPointAtLength(len * e);
        g.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${Math.sin(k * 6) * 10})`);
        if (k < 1) requestAnimationFrame(step);
        else {
          g.remove();
          path.remove();
          done += 1;
        }
      };
      requestAnimationFrame(step);
    };
    const timers = [
      setInterval(fly, 1500),
      setInterval(() => {
        if (on) feed = [n - 2, n - 1, n++];
      }, 2600),
      setInterval(() => {
        if (on) pct = pct >= 100 ? 12 : pct + 4;
      }, 700),
    ];
    return () => {
      timers.forEach(clearInterval);
      io.disconnect();
    };
  });

  const pct2 = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<section class="company" id="company">
  <div class="co-wide">
    <div class="co-stage" bind:this={stage}>
      <div class="co-cam">
        <video
          bind:this={video}
          src={asset(`company-${assetLang(lang)}.mp4`)}
          poster={asset(`company-${assetLang(lang)}.jpg`)}
          width={PIC.w}
          height={PIC.h}
          aria-label={t.alt}
          muted
          loop
          playsinline
          preload="none"></video>
        <svg class="co-ov" viewBox="0 0 {PIC.w} {PIC.h}" aria-hidden="true">
          <defs>
            <radialGradient id="co-glow">
              <stop offset="0" stop-color="#7fe8ff" stop-opacity=".55" />
              <stop offset="1" stop-color="#7fe8ff" stop-opacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx={HOLO.x} cy={HOLO.y} rx="150" ry="76" fill="url(#co-glow)" class="co-breathe" />
          <ellipse cx={HOLO.x} cy={HOLO.y} rx="80" ry="40" class="co-ring" />
          <ellipse cx={HOLO.x} cy={HOLO.y} rx="80" ry="40" class="co-ring co-ring2" />
          <g bind:this={trails}></g><g bind:this={packets}></g>
        </svg>
        {#each PINS as p, i (i)}
          <div class="co-pin" class:head={p.head} class:end={p.end} style="left: {pct2(p.x, PIC.w)}; top: {pct2(p.y, PIC.h)}" aria-hidden="true">
            <i style="background: {p.dot}"></i>{t.pins[i].tool}<span>{i === 2 ? `${pct}%` : t.pins[i].what}</span>
          </div>
        {/each}
      </div>
      <div class="co-shade"></div>
      <div class="co-hud" aria-hidden="true">
        <div class="co-live"><i></i>{t.live}</div>
        <div class="co-kpi">
          <div><b>{done}</b><span>{t.kpi[0]}</span></div>
          <div><b>5</b><span>{t.kpi[1]}</span></div>
          <div class="wait"><b>1</b><span>{t.kpi[2]}</span></div>
        </div>
      </div>
      <ol class="co-feed" aria-hidden="true">
        {#each feed as k, j (k)}
          {@const f = t.feed[k % t.feed.length]}
          <li class:ask={f.ask} class:old={j < 2}><b>{f.who}</b><span>{f.what}</span></li>
        {/each}
      </ol>
      <div class="co-title">
        <div class="kick">{t.kick}</div>
        <h2>{t.h2[0]}<br />{t.h2[1]}</h2>
        <p>{t.p}</p>
      </div>
    </div>

    <div class="co-chain">
      {#each t.chain as c, i (c)}
        {#if i > 0}<b aria-hidden="true"></b>{/if}<span class:on={i === 1}>{c}</span>
      {/each}
    </div>

    <div class="co-pillars">
      {#each t.pillars as p (p.title)}<div><h3>{p.title}</h3><p>{p.body}</p></div>{/each}
    </div>
  </div>
</section>
