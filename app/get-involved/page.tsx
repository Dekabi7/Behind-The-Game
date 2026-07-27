import { PageHeader } from "@/components/page-header";
import { pageIntros } from "@/lib/content";

export default function GetInvolvedPage() {
  return <PageHeader {...pageIntros.getInvolved} />;
}
