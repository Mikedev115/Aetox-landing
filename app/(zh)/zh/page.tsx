import Landing, { landingMetadata } from "@/components/Landing";

export const generateMetadata = () => landingMetadata("zh");
export default function Page() {
  return <Landing lang="zh" />;
}
