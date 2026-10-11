import { SectionHeading } from "@/components/ui/section-heading";
import { AppImage } from "@/components/ui/app-image";
import { siteImages } from "@/lib/images";

export function MusesGallerySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading
        title="Muses in Motion"
        subtitle="#MyAuraBow — share your crown with the atelier circle."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {siteImages.gallery.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[3/4] overflow-hidden rounded-xl border-2 border-card-border group"
          >
            <AppImage
              src={src}
              alt={`Muse ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
