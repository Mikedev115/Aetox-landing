import SafetyPage from "@/components/pages/SafetyPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("zh", "safety");
export default function Page() {
  return <SafetyPage lang="zh" />;
}
