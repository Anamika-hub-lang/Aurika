import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/ui/app-image";
import { FadeIn } from "@/components/ui/fade-in";
import { formatINR } from "@/lib/currency";
import { siteImages } from "@/lib/images";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-6 pb-4 md:pt-10 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <FadeIn className="relative z-10 max-w-xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-coral/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              New Collection
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.25rem]">
              Crown Every Moment.
              <br />
              Everyday{" "}
              <span className="text-coral italic">You.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Hand-stitched headbands, silk bows & pearl accents — premium
              quality, pinch-free comfort, made for little muses and modern
              crowns.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button to="/collections">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/collections" variant="outline">
                Explore Collections
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="pointer-events-none absolute -right-8 top-8 h-[min(88vw,420px)] w-[min(88vw,420px)] rounded-full bg-coral lg:-right-4 lg:top-4"
              aria-hidden
            />
            <div className="relative z-10 mx-auto aspect-[4/5] max-h-[520px] w-full max-w-md overflow-hidden rounded-[1.75rem] shadow-xl shadow-charcoal/10 lg:max-w-none">
              <AppImage
                src={siteImages.hero.main}
                alt="Model wearing Aura & Bow accessories"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            <div
              className="absolute bottom-4 left-2 z-20 flex max-w-[min(100%,280px)] items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-6"
            >
              <div className="flex -space-x-2">
                {siteImages.trust.slice(0, 3).map((src) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white"
                  >
                    <AppImage src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-charcoal">
                  Loved by 10K+ Women
                </p>
                <p className="flex items-center gap-1 text-[11px] text-muted">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-charcoal">4.8</span>
                  <span>(2.5K Reviews)</span>
                </p>
              </div>
            </div>

            <Link
              to="/collections"
              className="absolute -bottom-2 right-2 z-20 hidden w-44 rounded-2xl border border-border/60 bg-white p-2.5 shadow-lg transition hover:-translate-y-0.5 sm:block lg:right-0"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-coral-soft/50">
                <AppImage
                  src={siteImages.hero.floatingProduct}
                  alt="Silk bow"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 truncate font-medium text-sm text-charcoal">
                Silk Tuft Bow
              </p>
              <p className="text-sm font-bold text-coral">
                {formatINR(36)}
              </p>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
