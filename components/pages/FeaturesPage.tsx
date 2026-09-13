import type { Lang } from "@/lib/i18n";
import { PageHead, Shell, load } from "@/components/Page";
import UseCases from "@/components/UseCases";
import FinalCta from "@/components/FinalCta";

export default async function FeaturesPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="features" t={t} version={version}>
      <PageHead title={t.pages.features.title} sub={t.pages.features.sub} />
      <UseCases t={t.uses} lang={lang} layout="grid" />
      <FinalCta t={t.cta} />
    </Shell>
  );
}
