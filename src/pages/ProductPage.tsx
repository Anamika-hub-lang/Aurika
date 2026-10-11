import { SiteShell } from "@/components/layout/site-shell";
import { ProductDetail } from "@/pages/ProductDetail";
import { getProductBySlug } from "@/lib/data";
import { Navigate, useParams } from "react-router-dom";

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <SiteShell topBar="none">
      <ProductDetail product={product} />
    </SiteShell>
  );
}
