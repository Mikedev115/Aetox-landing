import DocsHome from "@/components/docs/DocsHome";
import { docsMetadata } from "@/components/docs/meta";
import { load } from "@/components/Page";

export const generateMetadata = () => docsMetadata("th");
export default async function Page() {
  const { t, version } = await load("th");
  return <DocsHome lang="th" t={t} version={version} />;
}
