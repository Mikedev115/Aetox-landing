import type { Lang } from "@/lib/i18n";
import { PageHead, Shell, load } from "@/components/Page";
import Download from "@/components/Download";

export default async function DownloadPage({ lang }: { lang: Lang }) {
  const { t, version } = await load(lang);
  return (
    <Shell lang={lang} page="download" t={t} version={version}>
      <PageHead title={t.pages.download.title} sub={t.pages.download.sub} />
      <Download t={t.pages.download} version={version} />
    </Shell>
  );
}
