"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/i18n";
import { asset } from "@/lib/site";

// The company room: the app's 3D office as a wide stage, panned slowly by CSS,
// with HTML on top — tool pills pinned to agents, a live board, an activity
// feed, and finished work flying to the team head. The pins and flight paths
// are in the picture's own pixels (PIC), so a new capture means new numbers
// here. Under reduced motion the stage holds still and nothing flies.
//
// Interim picture: a capture of the real room from the app, until the studio
// take (company-<lang>.mp4 with a fixed camera) lands in public/assets.
const PIC = { src: "company-office.webp", w: 1739, h: 1184 };
// `end` pins hang to the left of their point, for agents near the right edge.
const PINS = [
  { x: 985, y: 215, dot: "#ff4fb8", end: true },
  { x: 1261, y: 243, dot: "#4fd2ff" },
  { x: 1556, y: 456, dot: "#8f9bff" },
  { x: 1690, y: 690, dot: "#ffd36b", head: true, end: true },
];
const FROM = [[1048, 250, "#ff4fb8"], [1132, 300, "#4fd2ff"], [1555, 600, "#8f9bff"]] as const;
const TO = [1700, 700];
const HOLO = { x: 1133, y: 592 };

export default function Company({ t }: { t: Dict["company"] }) {
  const [feed, setFeed] = useState<number[]>([0, 1, 2]);
  const [done, setDone] = useState(12);
  const [pct, setPct] = useState(64);
  const trails = useRef<SVGGElement>(null);
  const packets = useRef<SVGGElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let on = false, n = 3;
    const io = new IntersectionObserver(([en]) => { on = en.isIntersecting; });
    if (stage.current) io.observe(stage.current);
    const NS = "http://www.w3.org/2000/svg";
    const fly = () => {
      if (!on || !trails.current || !packets.current) return;
      const [x1, y1, c] = FROM[(Math.random() * FROM.length) | 0];
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", `M${x1} ${y1} Q${(x1 + TO[0]) / 2} ${Math.min(y1, TO[1]) - 220} ${TO[0]} ${TO[1]}`);
      path.setAttribute("class", "co-trail");
      path.setAttribute("stroke", c);
      trails.current.appendChild(path);
      const len = path.getTotalLength();
      const g = document.createElementNS(NS, "g");
      g.innerHTML = `<rect x="-15" y="-19" width="30" height="38" rx="5" fill="${c}" stroke="#fff" stroke-width="3"/><path d="M-7 -6h14M-7 1h14M-7 8h9" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(PIC.src)} alt={t.alt} width={PIC.w} height={PIC.h} loading="lazy" decoding="async" />
            <svg className="co-ov" viewBox={`0 0 ${PIC.w} ${PIC.h}`} aria-hidden="true">
              <defs><radialGradient id="co-glow"><stop offset="0" stopColor="#7fe8ff" stopOpacity=".55" /><stop offset="1" stopColor="#7fe8ff" stopOpacity="0" /></radialGradient></defs>
              <ellipse cx={HOLO.x} cy={HOLO.y} rx="190" ry="96" fill="url(#co-glow)" className="co-breathe" />
              <ellipse cx={HOLO.x} cy={HOLO.y} rx="70" ry="34" className="co-ring" />
              <ellipse cx={HOLO.x} cy={HOLO.y} rx="70" ry="34" className="co-ring co-ring2" />
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
