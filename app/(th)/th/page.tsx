import Landing, { landingMetadata } from "@/components/Landing";

export const generateMetadata = () => landingMetadata("th");
export default function Page() {
  return <Landing lang="th" />;
}
