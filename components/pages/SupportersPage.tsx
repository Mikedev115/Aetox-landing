import type { Lang } from "@/lib/i18n";
import { PageHead, Shell, load } from "@/components/Page";
import Supporters from "@/components/Supporters";
import FinalCta from "@/components/FinalCta";

export default async function SupportersPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="supporters" t={t} version={version}>
      <PageHead title={t.pages.supporters.title} sub={t.pages.supporters.sub} />
      <Supporters t={t.pages.supporters} lang={lang} />
      <FinalCta t={t.cta} />
    </Shell>
  );
}
