import DocsHome from "@/components/docs/DocsHome";
import { docsMetadata } from "@/components/docs/meta";
import { load } from "@/components/Page";

export const generateMetadata = () => docsMetadata("en");
export default async function Page() {
  const { t, version } = await load("en");
  return <DocsHome lang="en" t={t} version={version} />;
}
