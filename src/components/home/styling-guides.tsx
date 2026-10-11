import { SectionHeading } from "@/components/ui/section-heading";
import { AppImage } from "@/components/ui/app-image";
import { FadeIn } from "@/components/ui/fade-in";
import { siteImages } from "@/lib/images";
import { Play } from "lucide-react";

const guides = [
  {
    title: "Pick Up Romantic Waves with Velvet Padding",
    image: siteImages.styling.waves,
  },
  {
    title: "The Sleek Low Ponytail with Silk Tufts",
    image: siteImages.styling.ponytail,
  },
  {
    title: "Messy Ballerina Bun with Floral Drape",
    image: siteImages.styling.bun,
  },
];

export function StylingGuidesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading
        title="How to Style: The Modern Crown"
        align="left"
        className="mx-0 text-left"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {guides.map((g, i) => (
          <FadeIn key={g.title} delay={i * 0.06}>
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-xl border-2 border-card-border aspect-[3/4] text-left"
            >
              <AppImage
                src={g.image}
                alt={g.title}
                fill
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/95 via-purple/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                <p className="font-serif text-sm md:text-base text-white leading-snug">
                  {g.title}
                </p>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 backdrop-blur group-hover:bg-white/35 transition-colors">
                  <Play className="h-3.5 w-3.5 text-white fill-white" />
                </span>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
