import { SiteShell } from "@/components/layout/site-shell";
import { CheckoutForm } from "@/pages/CheckoutForm";

export function CheckoutPage() {
  return (
    <SiteShell topBar="utility" showNewsletter={false}>
      <CheckoutForm />
    </SiteShell>
  );
}
