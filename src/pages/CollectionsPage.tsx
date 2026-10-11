import { SiteShell } from "@/components/layout/site-shell";
import { CollectionsClient } from "@/pages/CollectionsClient";
import { useSearchParams } from "react-router-dom";

export function CollectionsPage() {
  const [params] = useSearchParams();
  const cat = params.get("cat") ?? undefined;

  return (
    <SiteShell topBar="none">
      <CollectionsClient initialCat={cat} />
    </SiteShell>
  );
}
