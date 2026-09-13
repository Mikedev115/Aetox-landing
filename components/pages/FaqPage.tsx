import type { Lang } from "@/lib/i18n";
import { PageHead, Shell, load } from "@/components/Page";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default async function FaqPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="faq" t={t} version={version}>
      <PageHead title={t.pages.faq.title} sub={t.pages.faq.sub} />
      <Faq t={t.faq} heading={false} />
      <FinalCta t={t.cta} />
    </Shell>
  );
}
