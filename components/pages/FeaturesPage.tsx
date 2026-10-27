import type { Lang } from "@/lib/i18n";
import { PageHead, Shell, load } from "@/components/Page";
import ProofWall from "@/components/ProofWall";
import Modes from "@/components/Modes";
import SecuritySkill from "@/components/SecuritySkill";
import Company from "@/components/Company";
import VideoCut from "@/components/VideoCut";
import Network from "@/components/Network";
import UseCases from "@/components/UseCases";
import FinalCta from "@/components/FinalCta";

// Every area in full, in the order the home page lists them. The home page's
// rows and the README link to the anchors below, so keep the ids.
export default async function FeaturesPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="features" t={t} version={version}>
      <PageHead title={t.pages.features.title} sub={t.pages.features.sub} />
      <div className="wrap"><ProofWall t={t.wall} /></div>
      <span id="developer" className="anchor" /><span id="code" className="anchor" /><span id="assistant" className="anchor" />
      <Modes t={t.modes} lang={lang} />
      <SecuritySkill t={t.security} />
      <span id="teams" className="anchor" />
      <Company t={t.company} lang={lang} />
      <span id="studio" className="anchor" />
      <VideoCut t={t.video} lang={lang} />
      <span id="models" className="anchor" />
      <Network t={t.network} />
      <UseCases t={t.uses} lang={lang} layout="grid" />
      <FinalCta t={t.cta} />
    </Shell>
  );
}
