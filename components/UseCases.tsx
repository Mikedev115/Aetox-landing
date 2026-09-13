"use client";
import { useEffect, useRef, useState } from "react";
import type { Dict, Lang } from "@/lib/i18n";
import { asset, pagePath } from "@/lib/site";
import Frame from "./ui/Frame";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";

// One capture per card, in the order of t.cards. `focus` says which half of
// the app window the card zooms into — "right" for the desk panel where the
// work shows, "left" for the chat. The research card has no screenshot: it
// shows the numbers from the run instead (see ResearchStats).
type Pic = { src: string; width: number; height: number; focus: "left" | "right" };
const PICS: (Pic | null)[] = [
  { src: asset("cap-image-ocr.png"), width: 1536, height: 960, focus: "left" },
  { src: asset("cap-clip.png"), width: 1536, height: 960, focus: "left" },
  { src: asset("cap-browser.png"), width: 1919, height: 1029, focus: "right" },
  null,
  { src: asset("cap-automation.png"), width: 1916, height: 1027, focus: "right" },
  { src: asset("git-split.png"), width: 1920, height: 1140, focus: "right" },
  { src: asset("code-map.png"), width: 1920, height: 1136, focus: "right" },
  { src: asset("habits.png"), width: 1920, height: 1137, focus: "right" },
  { src: asset("video-make.png"), width: 1919, height: 1029, focus: "right" },
];

// Numbers from the CRM job of 15 Aug 2026 — the same four the old page
// carried as its stat cards. Labels come from the dictionary.
const RESEARCH = ["6:51", "42", "20", "6"];

function ResearchStats({ t }: { t: Dict["uses"]["researchStats"] }) {
  return (
    <div className="stat-pic" aria-label={t.label}>
      {t.items.map((it, i) => (
        <div key={it.k}><b>{RESEARCH[i]}<small>{it.unit}</small></b><span>{it.k}</span></div>
      ))}
    </div>
  );
}

// Two shapes of the same nine cards. The home page shows them as a carousel
// under the statement, with a link to the full page; /features/ lays them all
// out in a grid under its own title, so `layout="grid"` renders no heading.
export default function UseCases({ t, lang, more, layout = "carousel" }: { t: Dict["uses"]; lang: Lang; more?: string; layout?: "carousel" | "grid" }) {
  const car = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = car.current;
    if (!el) return;
    const sync = () => setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    addEventListener("resize", sync);
    return () => { el.removeEventListener("scroll", sync); removeEventListener("resize", sync); };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = car.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ucard");
    const w = card ? card.getBoundingClientRect().width + 16 : 400;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * w, behavior: reduced ? "auto" : "smooth" });
  };

  const cards = t.cards.map((c, i) => {
    const pic = PICS[i];
    return (
      <article className="ucard" key={c.title}>
        <div className="txt"><h3>{c.title}</h3><p>{c.body}</p></div>
        {pic ? (
          <div className={`pic ${pic.focus}`}><Frame shot={{ src: pic.src, width: pic.width, height: pic.height, alt: c.alt }} /></div>
        ) : (
          <ResearchStats t={t.researchStats} />
        )}
      </article>
    );
  });

  if (layout === "grid") {
    return (
      <section id="uses">
        <div className="wrap"><div className="ucgrid">{cards}</div></div>
      </section>
    );
  }

  return (
    <section id="uses" className="statement">
      <div className="wrap">
        <Reveal as="h2">{t.h2}</Reveal>
        <div className="car-nav">
          <button type="button" aria-label={t.prev} disabled={edge.start} onClick={() => step(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button type="button" aria-label={t.next} disabled={edge.end} onClick={() => step(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="wrap">
        <div className="carousel" ref={car}>{cards}</div>
        {more ? <div className="more-row"><PillLink variant="soft" trail="chev" href={pagePath(lang, "features")}>{more}</PillLink></div> : null}
      </div>
    </section>
  );
}
