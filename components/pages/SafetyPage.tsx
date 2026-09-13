import type { Lang } from "@/lib/i18n";
import { LICENSE, THIRD_PARTY, pagePath } from "@/lib/site";
import { PageHead, Shell, load } from "@/components/Page";
import Safety from "@/components/Safety";
import FinalCta from "@/components/FinalCta";
import { PillLink } from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";

export default async function SafetyPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  const p = t.pages.safety;
  return (
    <Shell lang={lang} page="safety" t={t} version={version}>
      <PageHead title={p.title} sub={p.sub} />
      <Safety t={t.safety} lang={lang} />
      <section className="policies">
        <div className="wrap">
          <Reveal className="wide">
            <div className="head">
              <div><h2>{p.policies}</h2><p>{p.policiesSub}</p></div>
            </div>
            <div className="cta">
              <PillLink variant="soft" trail="chev" href={pagePath(lang, "privacy")}>{t.footer.privacy}</PillLink>
              <PillLink variant="ghost" trail="arrow" href={LICENSE}>{t.footer.license}</PillLink>
              <PillLink variant="ghost" trail="arrow" href={THIRD_PARTY}>{t.footer.third}</PillLink>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta t={t.cta} />
    </Shell>
  );
}
