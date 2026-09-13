import type { Dict } from "@/lib/i18n";
import { NUMBERS } from "@/lib/numbers";
import { RELEASES, STORE_URL } from "@/lib/site";
import { PillLink } from "./ui/Pill";
import Reveal from "./ui/Reveal";
import Rich from "./ui/Rich";
import WingetCmd from "./ui/WingetCmd";

// The body of /download/. Values for the three facts: the version is read at
// build time (lib/version.ts), the installer size is in lib/numbers.ts, and
// the labels come from the dictionary.
export default function Download({ t, version }: { t: Dict["pages"]["download"]; version: string }) {
  const values = [`v${version}`, `${NUMBERS.INSTALLER_MB} MB`, "Windows"];
  return (
    <>
      <div className="wrap">
        <div className="cta dl-cta">
          <PillLink href={STORE_URL}>{t.store}</PillLink>
          <PillLink variant="ghost" trail="arrow" href={RELEASES}>{t.releases}</PillLink>
        </div>
        <div className="dl-cmd"><WingetCmd t={t} /></div>
        <p className="fine">{t.fine}</p>
      </div>
      <section>
        <div className="wrap">
          <div className="kpis three-up">
            {t.facts.map((f, i) => (
              <Reveal className="kpi" key={f.k}><b>{values[i]}</b><div className="k">{f.k}</div><div className="s">{f.s}</div></Reveal>
            ))}
          </div>
          <div className="three ways">
            {t.ways.map((w) => (
              <Reveal as="article" className="scard" key={w.title}><h3>{w.title}</h3><Rich text={w.body} /></Reveal>
            ))}
          </div>
          <Reveal className="scard uninstall"><h3>{t.uninstallTitle}</h3><p>{t.uninstallBody}</p></Reveal>
        </div>
      </section>
    </>
  );
}
