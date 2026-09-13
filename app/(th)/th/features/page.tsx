import FeaturesPage from "@/components/pages/FeaturesPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("th", "features");
export default function Page() {
  return <FeaturesPage lang="th" />;
}
