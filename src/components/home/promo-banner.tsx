import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/ui/app-image";
import { siteImages } from "@/lib/images";
import { ArrowRight } from "lucide-react";

export function PromoBannerSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-[1.25rem] bg-coral px-6 py-10 md:px-12 md:py-14">
        <div className="relative z-10 grid items-center gap-8 md:grid-cols-[auto_1fr_auto] md:gap-6">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white/30 bg-white/15 text-center md:h-28 md:w-28"
          >
            <p className="px-2 font-serif text-xs leading-tight text-white md:text-sm">
              Limited
              <br />
              Time Offer
            </p>
          </div>
          <div className="text-white">
            <p className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
              Up To 30% OFF
            </p>
            <p className="mt-2 text-sm text-white/90 md:text-base">
              On Selected Hair Accessories & Gift Sets
            </p>
            <Button
              to="/collections"
              variant="outline"
              className="mt-6 border-white bg-white text-coral hover:bg-white/90 hover:text-coral-deep"
            >
              Grab the Deal <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative hidden h-40 w-48 overflow-hidden rounded-2xl md:block lg:h-48 lg:w-56">
            <AppImage
              src={siteImages.collectionBanner}
              alt="Accessories on display"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
