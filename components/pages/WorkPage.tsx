import type { Lang } from "@/lib/i18n";
import { BENCHMARK_MD, CASE_STUDIES_URL } from "@/lib/site";
import { PageHead, Shell, load } from "@/components/Page";
import RealWork from "@/components/RealWork";
import FinalCta from "@/components/FinalCta";
import { PillLink } from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";

export default async function WorkPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  const p = t.pages.work;
  return (
    <Shell lang={lang} page="work" t={t} version={version}>
      <PageHead title={p.title} sub={p.sub} />
      <RealWork t={t.work} lang={lang} />
      <section className="cases">
        <div className="wrap">
          <Reveal className="wide">
            <div className="head">
              <div><h2>{p.cases}</h2><p>{p.casesSub}</p></div>
            </div>
            <div className="cta">
              <PillLink variant="soft" trail="arrow" href={CASE_STUDIES_URL} target="_blank" rel="noopener">{p.cases}</PillLink>
              <PillLink variant="ghost" trail="arrow" href={BENCHMARK_MD} target="_blank" rel="noopener">BENCHMARK.md</PillLink>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta t={t.cta} />
    </Shell>
  );
}
