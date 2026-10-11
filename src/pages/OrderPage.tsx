import { AppImage } from "@/components/ui/app-image";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/layout/site-shell";
import { siteImages } from "@/lib/images";
import { Calendar, Download, MapPin, Printer } from "lucide-react";

const timeline = [
  { label: "Commissioned", done: true },
  { label: "Needlework Polish", done: true, active: true },
  { label: "Mac Dedication", done: false },
  { label: "Lilac Box Styling", done: false },
  { label: "White-Glove Courier", done: false },
];

export function OrderPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-purple leading-snug">
              An Heirloom in the Making for{" "}
              <em className="text-lavender-mid not-italic">Lady Clara Sterling</em>
            </h1>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 rounded-xl border-2 border-card-border bg-white px-4 py-3 text-sm">
                <Calendar className="h-5 w-5 text-purple" />
                Wednesday, October 14
              </div>
              <div className="flex items-center gap-3 rounded-xl border-2 border-card-border bg-white px-4 py-3 text-sm">
                <MapPin className="h-5 w-5 text-purple" />
                Paris — Rue de Chaillot
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Downloadable Certificate (PDF)
              </Button>
              <button
                type="button"
                className="text-sm text-purple underline inline-flex items-center gap-1"
              >
                <Printer className="h-4 w-4" /> Print Order Receipt
              </button>
              <button type="button" className="text-sm text-purple underline">
                Add to Calendar
              </button>
            </div>
          </div>
          <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-3xl shadow-lg">
            <AppImage
              src={siteImages.orderPortrait}
              alt="Order muse"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-16">
          <div className="flex flex-wrap justify-between gap-4 mb-8">
            {timeline.map((step, i) => (
              <div
                key={step.label}
                className="flex flex-col items-center text-center flex-1 min-w-[100px]"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${
                    step.active
                      ? "bg-purple text-white"
                      : step.done
                        ? "bg-purple/20 text-purple"
                        : "bg-border text-muted"
                  }`}
                >
                  {step.done && !step.active ? "✓" : i + 1}
                </div>
                <p className="mt-2 text-[10px] md:text-xs text-muted max-w-[120px]">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-2xl bg-lavender/30 min-h-[200px] flex items-center justify-center text-muted text-sm">
              <MapPin className="h-8 w-8 text-purple mr-2" />
              Stylized Paris dispatch map — en route to Rue de Chaillot
            </div>
            <div className="rounded-2xl border-2 border-card-border bg-white p-6">
              <p className="font-serif text-xl text-purple">Arrival in 6 Days</p>
              <p className="mt-2 text-sm text-muted">
                White-Glove Courier · Tracking updates via email
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-card-border bg-white p-6">
            <h2 className="font-serif text-xl text-purple mb-4">Order Details</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>The Duchess Pearl Velvet Band</span>
                <span>$48.00</span>
              </li>
              <li className="flex justify-between">
                <span>Arcadie Trailing Silk Bow</span>
                <span>$36.00</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-border space-y-1 text-sm text-muted">
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Packaging</span>
                <span>Included</span>
              </div>
            </div>
            <p className="mt-4 font-serif text-3xl text-charcoal">$84.00</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-card-border bg-cream-dark p-8 font-script text-lg leading-relaxed text-charcoal min-h-[160px]">
              Dearest Clara, may every day feel like a coronation. With love,
              <span className="text-purple block mt-4">— The Atelier</span>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <AppImage
                src={siteImages.giftBox}
                alt="Gift packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-2xl text-purple text-center mb-8">
            While You Await Your Crown
          </h2>
          <div className="grid gap-5 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                title: "The First Fitting",
                image: siteImages.styling.ponytail,
              },
              {
                title: "Velvet Preservation",
                image: siteImages.atelierFeatures[1],
              },
              {
                title: "Join the Atelier Circle",
                image: siteImages.gallery[0],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl overflow-hidden border-2 border-card-border bg-white hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-[4/3]">
                  <AppImage
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="p-3 font-serif text-sm text-purple text-center">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <p className="text-muted mb-6">Thank you for commissioning with Aura &amp; Bow.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/">Return to Atelier Home</Button>
            <Button to="/collections" variant="outline">
              Explore Ceremony Gift Sets
            </Button>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
