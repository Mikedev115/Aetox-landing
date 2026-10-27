import DownloadPage from "@/components/pages/DownloadPage";
import { pageMetadata } from "@/components/Page";

export const generateMetadata = () => pageMetadata("zh", "download");
export default function Page() {
  return <DownloadPage lang="zh" />;
}
