import { PageHeader } from "@/components/page-header";
import { pageIntros } from "@/lib/content";

export default function ArticlesPage() {
  return <PageHeader {...pageIntros.articles} />;
}
