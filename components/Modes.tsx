"use client";
import { useEffect, useRef, useState } from "react";
import type { Dict, Lang } from "@/lib/i18n";
import { CODING_SECURE } from "@/lib/numbers";
import { asset } from "@/lib/site";
import Rich from "./ui/Rich";

// One loop per mode, in the order of t.items: `mode-<name>-<lang>.mp4` with a
// PNG poster of its last frame, 1148×718 — the 574 px stage at 2x, 16:10.
const LOOPS = ["assist", "code"];

// Two headings on the left, one sticky window on the right. While the
// visitor scrolls, whichever heading crosses the middle of the viewport owns
// the window — the same scroll-driven telling as the reference, without a
// scroll library. Under 820px the list stacks and the observer is not used.
// Only the active loop plays, from its start; under reduced motion none does
// and each shows its poster.
export default function Modes({ t, lang }: { t: Dict["modes"]; lang: Lang }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const vids = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !matchMedia("(min-width: 821px)").matches) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setActive(Number((en.target as HTMLElement).dataset.mode)); }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // The active loop plays only while the stage is on screen. A play() made
  // in a background tab is refused and never retried, so the observer (which
  // fires again once the tab is shown) is what starts it, not the tab switch.
  const stage = useRef<HTMLDivElement | null>(null);
  const seen = useRef(false);
  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sync = (restart: boolean) => vids.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && seen.current && !still) { if (restart) v.currentTime = 0; v.play().catch(() => {}); } else v.pause();
    });
    if (!stage.current || !("IntersectionObserver" in window)) { seen.current = true; sync(true); return; }
    sync(true);
    const io = new IntersectionObserver(([en]) => { seen.current = en.isIntersecting; sync(false); });
    io.observe(stage.current);
    return () => io.disconnect();
  }, [active]);

  const cur = t.items[active];
  return (
    <section id="modes">
      <div className="wrap">
        <div className="modes">
          <div className="list">
            {t.items.map((m, i) => (
              <div key={m.title} ref={(el) => { refs.current[i] = el; }} data-mode={i}
                className={`mode${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
                <h3><span>{m.title}</span><small>{String(i + 1).padStart(2, "0")}</small></h3>
                <div className="body"><div>
                  <p className="lead">{m.lead}</p>
                  <p>{m.body}</p>
                  {m.proof && (
                    <div className="proof">
                      <div className="k">{m.proof.label}</div>
                      {CODING_SECURE.map(([name, v], j) => (
                        <div key={name} className={`row${j === 0 ? " us" : ""}`}><span>{name}</span><i><b style={{ width: `${v}%` }} /></i><em>{v.toFixed(1)}%</em></div>
                      ))}
                      <Rich className="note" text={m.proof.note} />
                    </div>
                  )}
                </div></div>
              </div>
            ))}
          </div>
          <div className="stage" ref={stage}>
            <div className="frame">
              <div className="chrome" aria-hidden="true"><i /><i /><i /><span className="addr">{cur.addr}</span></div>
              {LOOPS.map((name, i) => (
                <video key={name} ref={(el) => { vids.current[i] = el; }} className={`layer${i === active ? " on" : ""}`}
                  src={asset(`mode-${name}-${lang}.mp4`)} poster={asset(`mode-${name}-${lang}.png`)}
                  width={1148} height={718} aria-label={t.items[i].alt} muted loop playsInline preload={i === 0 ? "auto" : "metadata"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
