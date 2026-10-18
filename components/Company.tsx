"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import type { Dict, Lang } from "@/lib/i18n";
import { asset } from "@/lib/site";

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
const FROM = [[509, 169, "#ff4fb8"], [571, 200, "#4fd2ff"], [633, 231, "#8f9bff"]] as const;
const TO = [665, 371];
const HOLO = { x: 1601, y: 893 };

export default function Company({ t, lang }: { t: Dict["company"]; lang: Lang }) {
  const [feed, setFeed] = useState<number[]>([0, 1, 2]);
  const [done, setDone] = useState(12);
  const [pct, setPct] = useState(64);
  const trails = useRef<SVGGElement>(null);
  const packets = useRef<SVGGElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let on = false, n = 3;
    const io = new IntersectionObserver(([en]) => {
      on = en.isIntersecting;
      if (on) video.current?.play().catch(() => {}); else video.current?.pause();
    });
    if (stage.current) io.observe(stage.current);
    const NS = "http://www.w3.org/2000/svg";
    const fly = () => {
      if (!on || !trails.current || !packets.current) return;
      const [x1, y1, c] = FROM[(Math.random() * FROM.length) | 0];
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", `M${x1} ${y1} Q${(x1 + TO[0]) / 2 + 40} ${Math.min(y1, TO[1]) - 70} ${TO[0]} ${TO[1]}`);
      path.setAttribute("class", "co-trail");
      path.setAttribute("stroke", c);
      trails.current.appendChild(path);
      const len = path.getTotalLength();
      const g = document.createElementNS(NS, "g");
      g.innerHTML = `<rect x="-6" y="-8" width="12" height="16" rx="2" fill="${c}" stroke="#fff" stroke-width="1.4"/><path d="M-3 -3h6M-3 0.5h6M-3 4h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>`;
      packets.current.appendChild(g);
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / 1700), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const p = path.getPointAtLength(len * e);
        g.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${Math.sin(k * 6) * 10})`);
        if (k < 1) requestAnimationFrame(step);
        else { g.remove(); path.remove(); setDone((d) => d + 1); }
      };
      requestAnimationFrame(step);
    };
    const timers = [
      setInterval(fly, 1500),
      setInterval(() => { if (on) setFeed(() => [n - 2, n - 1, n++]); }, 2600),
      setInterval(() => { if (on) setPct((p) => (p >= 100 ? 12 : p + 4)); }, 700),
    ];
    return () => { timers.forEach(clearInterval); io.disconnect(); };
  }, []);

  const pct2 = (v: number, of: number) => `${(v / of) * 100}%`;
  return (
    <section className="company" id="company">
      <div className="co-wide">
        <div className="co-stage" ref={stage}>
          <div className="co-cam">
            <video ref={video} src={asset(`company-${lang}.mp4`)} poster={asset(`company-${lang}.jpg`)} width={PIC.w} height={PIC.h}
              aria-label={t.alt} muted loop playsInline preload="none" />
            <svg className="co-ov" viewBox={`0 0 ${PIC.w} ${PIC.h}`} aria-hidden="true">
              <defs><radialGradient id="co-glow"><stop offset="0" stopColor="#7fe8ff" stopOpacity=".55" /><stop offset="1" stopColor="#7fe8ff" stopOpacity="0" /></radialGradient></defs>
              <ellipse cx={HOLO.x} cy={HOLO.y} rx="150" ry="76" fill="url(#co-glow)" className="co-breathe" />
              <ellipse cx={HOLO.x} cy={HOLO.y} rx="80" ry="40" className="co-ring" />
              <ellipse cx={HOLO.x} cy={HOLO.y} rx="80" ry="40" className="co-ring co-ring2" />
              <g ref={trails} /><g ref={packets} />
            </svg>
            {PINS.map((p, i) => (
              <div key={i} className={`co-pin${p.head ? " head" : ""}${p.end ? " end" : ""}`} style={{ left: pct2(p.x, PIC.w), top: pct2(p.y, PIC.h) }} aria-hidden="true">
                <i style={{ background: p.dot }} />{t.pins[i].tool}<span>{i === 2 ? `${pct}%` : t.pins[i].what}</span>
              </div>
            ))}
          </div>
          <div className="co-shade" />
          <div className="co-hud" aria-hidden="true">
            <div className="co-live"><i />{t.live}</div>
            <div className="co-kpi">
              <div><b>{done}</b><span>{t.kpi[0]}</span></div>
              <div><b>5</b><span>{t.kpi[1]}</span></div>
              <div className="wait"><b>1</b><span>{t.kpi[2]}</span></div>
            </div>
          </div>
          <ol className="co-feed" aria-hidden="true">
            {feed.map((k, j) => {
              const f = t.feed[k % t.feed.length];
              return <li key={k} className={`${f.ask ? "ask" : ""}${j < 2 ? " old" : ""}`}><b>{f.who}</b><span>{f.what}</span></li>;
            })}
          </ol>
          <div className="co-title">
            <div className="kick">{t.kick}</div>
            <h2>{t.h2[0]}<br />{t.h2[1]}</h2>
            <p>{t.p}</p>
          </div>
        </div>

        <div className="co-chain">
          {t.chain.map((c, i) => (
            <Fragment key={c}>{i > 0 && <b aria-hidden="true" />}<span className={i === 1 ? "on" : undefined}>{c}</span></Fragment>
          ))}
        </div>

        <div className="co-pillars">
          {t.pillars.map((p) => <div key={p.title}><h3>{p.title}</h3><p>{p.body}</p></div>)}
        </div>
      </div>
    </section>
  );
}
