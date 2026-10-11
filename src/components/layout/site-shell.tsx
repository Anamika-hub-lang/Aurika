import type { ReactNode } from "react";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Newsletter } from "@/components/layout/newsletter";
import { TopBar } from "@/components/layout/top-bar";

type Props = {
  children: ReactNode;
  topBar?: "promo" | "utility" | "none";
  showNewsletter?: boolean;
};

export function SiteShell({
  children,
  topBar = "promo",
  showNewsletter = true,
}: Props) {
  return (
    <>
      {topBar !== "none" && <TopBar variant={topBar} />}
      <Header />
      <main>{children}</main>
      {showNewsletter && <Newsletter />}
      <Footer />
      <CartDrawer />
    </>
  );
}
