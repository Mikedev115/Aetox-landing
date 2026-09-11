import Landing, { landingMetadata } from "@/components/Landing";

export const generateMetadata = () => landingMetadata("en");
export default function Page() {
  return <Landing lang="en" />;
}
