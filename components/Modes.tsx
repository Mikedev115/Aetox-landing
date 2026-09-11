"use client";
import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { useLightbox } from "./dialogs/Lightbox";

// Screenshot per mode. The Code door has no dedicated capture yet, so it
// borrows the n8n one — a systems job done from that door.
const SHOTS = [
  { src: asset("hero-app.png"), width: 1919, height: 1027 },
  { src: asset("cap-automation.png"), width: 1916, height: 1027 },
  { src: asset("cap-parallel.png"), width: 1115, height: 856 },
];

// Three headings on the left, one sticky window on the right. While the
// visitor scrolls, whichever heading crosses the middle of the viewport owns
// the window — the same scroll-driven telling as the reference, without a
// scroll library. Under 820px the list stacks and the observer is not used.
export default function Modes({ t }: { t: Dict["modes"] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const open = useLightbox();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !matchMedia("(min-width: 821px)").matches) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setActive(Number((en.target as HTMLElement).dataset.mode)); }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

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
                </div></div>
              </div>
            ))}
          </div>
          <div className="stage">
            <button type="button" className="shot frame" onClick={() => open(SHOTS[active].src, cur.alt)}>
              <div className="chrome" aria-hidden="true"><i /><i /><i /><span className="addr">{cur.addr}</span></div>
              {/* the first shot also sits underneath, invisible, to give the frame its height */}
              <img className="base" src={SHOTS[0].src} alt="" width={SHOTS[0].width} height={SHOTS[0].height} aria-hidden="true" />
              {SHOTS.map((s, i) => (
                <img key={s.src} className={`layer${i === active ? " on" : ""}`} src={s.src} alt={t.items[i].alt}
                  width={s.width} height={s.height} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
              ))}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
