"use client";
import { useEffect, useRef } from "react";
import type { Dict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// Disk after install, measured per BENCHMARK.md §4. Competitors 27 Jul 2026,
// Aetox 13 Sep 2026 on v1.6.1 — two files since 1.6.0 (aetox.exe 49.2 MB +
// aetox-engine.exe 31.7 MB, BENCHMARK.md §13). Widths are each value over VS
// Code's 1,171 MB. If the size changes, BENCHMARK.md and the multipliers in the
// dictionary's weight.foot change with it — see docs/PUBLISHED-NUMBERS.md.
const ROWS = [
  { icon: "logoA", name: "Aetox", type: "aetox", mb: "80.8 MB", w: 6.9, us: true },
  { icon: "lg-claude", name: "Claude Code", type: "CLI", mb: "236 MB", w: 20.2 },
  { icon: "lg-zed", name: "Zed", type: "IDE", mb: "419 MB", w: 35.8 },
  { icon: "lg-opencode", name: "OpenCode", type: "CLI", mb: "498 MB", w: 42.5 },
  { icon: "lg-perplexity", name: "Comet", type: "comet", mb: "501 MB", w: 42.8 },
  { icon: "lg-cursor", name: "Cursor", type: "IDE", mb: "874 MB", w: 74.6 },
  { icon: "lg-vscode", name: "VS Code", type: "IDE", mb: "1,171 MB", w: 100 },
];

// 80.8 = both files on disk · 5,118 = Go 3,371 + UI 1,747 · 35 = engine 34 + the window's browser (13 Sep 2026, v1.6.1)
const KPI_VALUES = ["80.8", "5,118", "0.32", "35"];

export default function Weight({ t }: { t: Dict["weight"] }) {
  const bench = useRef<HTMLDivElement>(null);

  // bars grow the first time the chart is on screen
  useEffect(() => {
    const el = bench.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("in"); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const typeLabel = (type: string) => (type === "aetox" ? t.aetoxType : type === "comet" ? t.cometType : type);

  return (
    <Reveal className="wide">
      <div className="head"><div><h2>{t.h2}</h2><p>{t.p}</p></div></div>
      <div className="bench" ref={bench} role="img" aria-label={t.benchLabel}>
        {ROWS.map((r) => (
          <div className={`brow${r.us ? " us" : ""}`} key={r.name}>
            <div className="nm"><svg aria-hidden="true"><use href={`#${r.icon}`} /></svg><b>{r.name}</b><span>{typeLabel(r.type)}</span></div>
            <div className="track"><div className="fill" style={{ ["--w" as string]: `${r.w}%` }} /></div>
            <div className="v">{r.mb}</div>
          </div>
        ))}
      </div>
      <Rich className="bench-foot" text={t.foot} />
      <div className="ram">
        <Frame addr={t.ram.addr} shot={{ src: asset("ram-taskmgr.png"), alt: t.ram.alt, width: 1165, height: 633 }} />
        <div><h3>{t.ram.title}</h3><p>{t.ram.body}</p></div>
      </div>
      <div className="kpis">
        {t.kpis.map((k, i) => (
          <div className="kpi" key={k.k}>
            <b>{KPI_VALUES[i]}<small>{k.unit}</small></b>
            <div className="k">{k.k}</div>
            <div className="s">{k.s}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
