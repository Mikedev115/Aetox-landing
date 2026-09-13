import type { Lang } from "@/lib/i18n";
import { PageHead, Shell, load } from "@/components/Page";
import Pricing from "@/components/Pricing";
import Weight from "@/components/Weight";
import FinalCta from "@/components/FinalCta";

export default async function PricingPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="pricing" t={t} version={version}>
      <PageHead title={t.pages.pricing.title} sub={t.pages.pricing.sub} />
      <section id="pricing">
        <div className="wrap">
          <Pricing t={t.pricing} />
          <Weight t={t.weight} />
        </div>
      </section>
      <FinalCta t={t.cta} />
    </Shell>
  );
}
