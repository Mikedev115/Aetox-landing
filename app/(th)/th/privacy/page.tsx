import Privacy, { privacyMetadata } from "@/components/Privacy";

export const generateMetadata = () => privacyMetadata("th");
export default function Page() {
  return <Privacy lang="th" />;
}
