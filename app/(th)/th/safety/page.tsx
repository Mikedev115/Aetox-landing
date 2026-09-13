import SafetyPage from "@/components/pages/SafetyPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("th", "safety");
export default function Page() {
  return <SafetyPage lang="th" />;
}
