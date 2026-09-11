import type { Dict } from "@/lib/i18n";
import { DEMO_VIDEO, asset } from "@/lib/site";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";

export default function RealWork({ t }: { t: Dict["work"] }) {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal as="h2" className="sec-title">{t.h2}</Reveal>
        <Reveal as="p" className="sec-sub">{t.sub}</Reveal>
        <div className="three">
          <Reveal as="article" className="wcard">
            <Frame addr={t.crm.addr}>
              <div className="fill-txt"><b>6:51</b><span>{t.crm.cap}</span></div>
            </Frame>
            <h3>{t.crm.title}</h3>
            <p>{t.crm.body}</p>
          </Reveal>
          <Reveal as="article" className="wcard">
            <Frame addr={t.n8n.addr} shot={{ src: asset("cap-automation.png"), alt: t.n8n.alt, width: 1916, height: 1027 }} />
            <h3>{t.n8n.title}</h3>
            <p>{t.n8n.body}</p>
          </Reveal>
          <Reveal as="article" className="wcard">
            <Frame addr={t.video.addr} href={DEMO_VIDEO} shot={{ src: asset("hero-app.png"), alt: t.video.alt, width: 1919, height: 1027 }} />
            <h3><a href={DEMO_VIDEO} target="_blank" rel="noopener">{t.video.title}</a></h3>
            <Rich text={t.video.body} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
