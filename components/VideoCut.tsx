import type { Dict, Lang } from "@/lib/i18n";
import { asset } from "@/lib/site";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

// The cut room: one loop of the app's editor for `.cut` files beside the copy.
// `cut-<lang>.mp4` with a PNG poster of its last frame, 1148×718 like the
// mode loops (the studio's landing/shoot-cut.mjs). The .cut it opens was made
// by the real engine, so the proof line's numbers are that run's.
export default function VideoCut({ t, lang }: { t: Dict["video"]; lang: Lang }) {
  return (
    <section id="video" className="vcut">
      <div className="wrap">
        <div className="vcut-grid">
          <Frame className="vcut-frame" addr={t.addr}
            shot={{ src: asset(`cut-${lang}.png`), video: asset(`cut-${lang}.mp4`), width: 1148, height: 718, alt: t.alt }} />
          <div className="vcut-copy">
            <div className="eyebrow">{t.kick}</div>
            <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
            <Rich className="lead" text={t.lead} />
            <Rich text={t.body} />
            <ul className="vcut-chips">{t.chips.map((c) => <li key={c}>{c}</li>)}</ul>
            <Rich className="vcut-proof" text={t.proof} />
          </div>
        </div>
      </div>
    </section>
  );
}
