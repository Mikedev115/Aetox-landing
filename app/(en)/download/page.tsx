import DownloadPage from "@/components/pages/DownloadPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("en", "download");
export default function Page() {
  return <DownloadPage lang="en" />;
}
