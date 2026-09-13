import FaqPage from "@/components/pages/FaqPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("en", "faq");
export default function Page() {
  return <FaqPage lang="en" />;
}
