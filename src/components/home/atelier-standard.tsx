import { AppImage } from "@/components/ui/app-image";
import { FadeIn } from "@/components/ui/fade-in";
import { siteImages } from "@/lib/images";
import { Link } from "react-router-dom";

const items = [
  {
    title: "100% Mulberry Silk",
    text: "Grade 6A silks sourced for softness and luminous drape.",
    image: siteImages.atelierFeatures[0],
  },
  {
    title: "Pinch-Free Flex Bands",
    text: "Titanium armature tested for zero lateral pressure.",
    image: siteImages.atelierFeatures[1],
  },
  {
    title: "Hand-Sewn Embellishment",
    text: "Each pearl and crystal placed by atelier artisans.",
    image: siteImages.atelierFeatures[2],
  },
  {
    title: "Signature Keepsake Box",
    text: "Gilded lilac packaging with every commission.",
    image: siteImages.atelierFeatures[3],
  },
];

export function AtelierStandardSection() {
  return (
    <section className="border-y border-border bg-cream-dark py-16">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl text-purple mb-10">
            The Atelier Standard
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-card-border bg-white shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                  <AppImage
                    src={item.image}
                    alt=""
                    fill
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center flex-1 flex flex-col">
                  <h3 className="font-serif text-sm md:text-base text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed flex-1">
                    {item.text}
                  </p>
                  <Link
                    to="/collections"
                    className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-wider text-purple hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
