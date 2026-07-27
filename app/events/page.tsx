import { PageHeader } from "@/components/page-header";
import { pageIntros } from "@/lib/content";

export default function EventsPage() {
  return <PageHeader {...pageIntros.events} />;
}
