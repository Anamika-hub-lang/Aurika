import { ProductCard } from "@/components/product/product-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AppImage } from "@/components/ui/app-image";
import { Button } from "@/components/ui/button";
import { SectionRow } from "@/components/ui/section-row";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/cn";
import { formatINR } from "@/lib/currency";
import type { Product } from "@/lib/data";
import { products } from "@/lib/data";
import { siteImages } from "@/lib/images";
import {
  ProductGrid,
  productCardWrapClass,
} from "@/components/product/product-grid";
import { ChevronDown, Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

const galleryFor = (product: Product) => [
  product.image,
  product.imageHover ?? product.image,
  siteImages.productGallery.lifestyle,
  siteImages.productGallery.packaging,
];

const perks = [
  { icon: Truck, text: "Free shipping over ₹150" },
  { icon: RotateCcw, text: "7-day easy returns" },
  { icon: ShieldCheck, text: "Secure checkout" },
];

type Props = { product: Product };

export function ProductDetail({ product }: Props) {
  const { addItem } = useCart();
  const [imageIndex, setImageIndex] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [silhouette, setSilhouette] = useState<"standard" | "slim">("standard");
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>("care");

  const images = galleryFor(product);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const addToBag = () => {
    for (let i = 0; i < qty; i++) {
      addItem(product, {
        shade: color,
        width:
          silhouette === "standard" ? "Standard Couture" : "Slim Muse",
      });
    }
  };

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/collections" },
            { label: product.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div
              className="hidden sm:grid grid-cols-2 gap-2 sm:gap-3 rounded-2xl border border-border/50 bg-white p-2 sm:p-3 shadow-sm"
            >
              {images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setImageIndex(i)}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-xl transition ring-offset-2",
                    imageIndex === i
                      ? "ring-2 ring-coral"
                      : "ring-0 hover:opacity-95",
                  )}
                >
                  <AppImage src={src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/5] max-h-[480px] overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm sm:hidden">
              <AppImage
                src={images[imageIndex]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex gap-2 sm:hidden">
              {images.map((src, i) => (
                <button
                  key={`m-${src}-${i}`}
                  type="button"
                  onClick={() => setImageIndex(i)}
                  className={cn(
                    "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2",
                    imageIndex === i ? "border-coral" : "border-border",
                  )}
                >
                  <AppImage src={src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-2">
            {product.tag && (
              <span className="inline-block rounded-md bg-coral-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-coral">
                {product.tag}
              </span>
            )}
            <h1 className="mt-3 font-serif text-3xl text-charcoal md:text-[2rem] leading-tight">
              {product.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="text-2xl font-bold text-charcoal">
                {formatINR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-muted line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              {product.description}
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-muted">
              Shade
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  onClick={() => setColor(c.name)}
                  className={cn(
                    "h-10 w-10 rounded-full border-2 transition-all",
                    color === c.name
                      ? "border-coral scale-110 shadow-md"
                      : "border-border hover:border-coral/50",
                  )}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              <span className="self-center text-sm text-charcoal">{color}</span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-muted">
              Silhouette
            </p>
            <div className="mt-3 flex gap-3">
              {[
                { id: "standard" as const, label: "Standard Couture" },
                { id: "slim" as const, label: "Slim Muse" },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSilhouette(s.id)}
                  className={cn(
                    "flex-1 rounded-2xl border px-3 py-3.5 text-sm font-medium transition-colors",
                    silhouette === s.id
                      ? "border-coral bg-coral text-white shadow-md shadow-coral/20"
                      : "border-border/80 bg-white text-charcoal hover:border-coral/40",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div
                className="inline-flex w-full sm:w-auto items-center justify-between rounded-full border border-border bg-white px-1 sm:justify-center"
              >
                <button
                  type="button"
                  className="p-3 text-charcoal hover:text-coral"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-semibold tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  className="p-3 text-charcoal hover:text-coral"
                  onClick={() => setQty(qty + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button className="w-full flex-1 sm:min-w-[200px]" onClick={addToBag}>
                Add to Atelier Bag
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap gap-4 border-t border-border/60 pt-6">
              {perks.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-xs text-muted"
                >
                  <Icon className="h-4 w-4 text-coral shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-16 md:mt-20">
          <h2 className="font-serif text-xl text-charcoal mb-4">
            Product details
          </h2>
          {[
            {
              id: "care",
              title: "Care & materials",
              content:
                "Gentle hand spot-clean. Store in the included pouch away from direct sun.",
            },
            {
              id: "shipping",
              title: "Shipping & returns",
              content:
                "Dispatched within 48 hours. Free express over ₹150. Returns within 7 days.",
            },
          ].map((acc) => (
            <div key={acc.id} className="border-b border-border/70">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-charcoal"
                onClick={() =>
                  setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                }
              >
                {acc.title}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted transition-transform",
                    openAccordion === acc.id && "rotate-180",
                  )}
                />
              </button>
              {openAccordion === acc.id && (
                <p className="pb-4 text-sm text-muted leading-relaxed">
                  {acc.content}
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="mt-16 md:mt-20 pb-8">
          <SectionRow
            title="You may also like"
            actionLabel="View all →"
            actionTo="/collections"
          />
          <ProductGrid>
            {related.map((p, i) => (
              <div key={p.id} className={productCardWrapClass}>
                <ProductCard
                  product={p}
                  className="max-w-none"
                  featured={i === 1}
                />
              </div>
            ))}
          </ProductGrid>
        </section>
      </div>
    </div>
  );
}
