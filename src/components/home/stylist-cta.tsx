import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/ui/app-image";
import { FadeIn } from "@/components/ui/fade-in";
import { siteImages } from "@/lib/images";

export function StylistCtaSection() {
  return (
    <section className="relative bg-purple text-white overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <div className="relative h-full w-full">
          <AppImage
            src={siteImages.stylist}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-purple/85" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row md:py-14">
        <FadeIn className="max-w-2xl">
          <p className="font-serif text-lg md:text-xl text-center md:text-left leading-relaxed">
            Planning a Wedding, Flower Girl party, or Birthday Gala? Consult with
            our stylist for a curated selection.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Button
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white/15 shrink-0"
          >
            Contact our Stylist
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
