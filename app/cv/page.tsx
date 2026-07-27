import { PageHeader } from "@/components/page-header";
import { pageIntros } from "@/lib/content";

export default function CvPage() {
  return <PageHeader {...pageIntros.cv} />;
}
