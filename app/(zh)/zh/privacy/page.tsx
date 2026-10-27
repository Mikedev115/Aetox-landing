import Privacy, { privacyMetadata } from "@/components/Privacy";

export const generateMetadata = () => privacyMetadata("zh");
export default function Page() {
  return <Privacy lang="zh" />;
}
