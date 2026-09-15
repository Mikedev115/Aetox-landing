import SupportersPage from "@/components/pages/SupportersPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("en", "supporters");

export default function Page() {
  return <SupportersPage lang="en" />;
}
