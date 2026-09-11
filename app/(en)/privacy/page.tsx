import Privacy, { privacyMetadata } from "@/components/Privacy";

export const generateMetadata = () => privacyMetadata("en");
export default function Page() {
  return <Privacy lang="en" />;
}
