import PricingPage from "@/components/pages/PricingPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("zh", "pricing");
export default function Page() {
  return <PricingPage lang="zh" />;
}
