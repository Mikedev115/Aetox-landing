import WorkPage from "@/components/pages/WorkPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("en", "work");
export default function Page() {
  return <WorkPage lang="en" />;
}
