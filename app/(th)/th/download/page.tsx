import DownloadPage from "@/components/pages/DownloadPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("th", "download");
export default function Page() {
  return <DownloadPage lang="th" />;
}
