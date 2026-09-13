import FeaturesPage from "@/components/pages/FeaturesPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("en", "features");
export default function Page() {
  return <FeaturesPage lang="en" />;
}
