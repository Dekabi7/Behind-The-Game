import { PageHeader } from "@/components/page-header";
import { homeContent } from "@/lib/content";

export default function HomePage() {
  return <PageHeader {...homeContent.hero} />;
}
