import DocsHome from "@/components/docs/DocsHome";
import { docsMetadata } from "@/components/docs/meta";
import { load } from "@/components/Page";

export const generateMetadata = () => docsMetadata("zh");
export default async function Page() {
  const { t, version } = await load("zh");
  return <DocsHome lang="zh" t={t} version={version} />;
}
