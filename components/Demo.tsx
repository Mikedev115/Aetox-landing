import type { Dict, Lang } from "@/lib/i18n";
import { asset } from "@/lib/site";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";

// One job from the request to the finished page, in the real app. It used to
// sit under the hero; the hero now carries the proof wall instead.
export default function Demo({ t, lang }: { t: Dict["demo"]; lang: Lang }) {
  return (
    <section id="demo" className="demo">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
        <div className="demo-visual">
          <Frame addr={t.frameAddr} shot={{ src: asset(`hero-${lang}.png`), video: asset(`hero-${lang}.mp4`), alt: t.imgAlt, width: 2016, height: 1198 }} />
        </div>
        <p className="fine demo-note">{t.note}</p>
      </div>
    </section>
  );
}
