import { notFound } from "next/navigation";
import { load } from "@/components/Page";
import DocsShell from "@/components/docs/DocsShell";
import { docsMetadata } from "@/components/docs/meta";
import { docSlugs, docs as loadDocs, findDoc } from "@/lib/docs";

const LANG = "en" as const;

export const dynamicParams = false;
export function generateStaticParams() {
  return docSlugs(loadDocs(LANG)).map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => docsMetadata(LANG, (await params).slug);

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { t, version } = await load(LANG);
  const doc = findDoc(loadDocs(LANG), slug);
  if (!doc) notFound();
  return <DocsShell lang={LANG} t={t} version={version} doc={doc} />;
}
