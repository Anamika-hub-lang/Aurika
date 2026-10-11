import { BestsellersSection } from "@/components/home/bestsellers";
import { CategoriesSection } from "@/components/home/categories";
import { HeroSection } from "@/components/home/hero";
import { PromoBannerSection } from "@/components/home/promo-banner";
import { TrustMarkersSection } from "@/components/home/trust-markers";
import { ValuePropsBar } from "@/components/home/value-props";
import { SiteShell } from "@/components/layout/site-shell";

export function HomePage() {
  return (
    <SiteShell topBar="none">
      <HeroSection />
      <ValuePropsBar />
      <CategoriesSection />
      <BestsellersSection />
      <PromoBannerSection />
      <TrustMarkersSection />
    </SiteShell>
  );
}
