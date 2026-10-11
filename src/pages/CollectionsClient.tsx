import { ProductCard } from "@/components/product/product-card";
import {
  ProductGrid,
  productCardWrapClass,
} from "@/components/product/product-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FadeIn } from "@/components/ui/fade-in";
import { AppImage } from "@/components/ui/app-image";
import { cn } from "@/lib/cn";
import { products, type ProductCategory } from "@/lib/data";
import { siteImages } from "@/lib/images";
import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

const pills: { id: ProductCategory | "all"; label: string; count: number }[] = [
  { id: "all", label: "All", count: products.length },
  {
    id: "headbands",
    label: "Headbands",
    count: products.filter((p) => p.category === "headbands").length,
  },
  {
    id: "bows",
    label: "Silk Bows",
    count: products.filter((p) => p.category === "bows").length,
  },
  {
    id: "pearl",
    label: "Pearl & Crystal",
    count: products.filter((p) => p.category === "pearl").length,
  },
  {
    id: "scrunchies",
    label: "Plush & Scrunchies",
    count: products.filter((p) => p.category === "scrunchies").length,
  },
];

type Props = { initialCat?: string };

export function CollectionsClient({ initialCat }: Props) {
  const initial =
    pills.find((p) => p.id === initialCat)?.id ?? ("all" as const);
  const [category, setCategory] = useState<ProductCategory | "all">(initial);
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured",
  );
  const [colorFilter, setColorFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list =
      category === "all"
        ? [...products]
        : products.filter((p) => p.category === category);
    if (colorFilter) {
      list = list.filter((p) =>
        p.colors.some((c) =>
          c.name.toLowerCase().includes(colorFilter.split(" ")[0].toLowerCase()),
        ),
      );
    }
    if (sort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [category, colorFilter, sort]);

  return (
    <div className="bg-cream min-h-screen">
      <div className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-coral-soft/40 via-cream to-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop" },
            ]}
          />
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl tracking-tight">
                Shop All
              </h1>
              <p className="mt-4 max-w-lg text-muted leading-relaxed">
                Headbands, silk bows, pearl clips & plush charms — handcrafted
                comfort with everyday style. All prices in{" "}
                <span className="font-semibold text-charcoal">INR (₹)</span>.
              </p>
            </div>
            <div className="relative hidden h-48 overflow-hidden rounded-2xl shadow-lg lg:block">
              <AppImage
                src={siteImages.collectionBanner}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10">
        <div
          className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => setCategory(pill.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                  category === pill.id
                    ? "bg-coral text-white shadow-sm"
                    : "bg-cream text-charcoal hover:bg-coral-soft/80",
                )}
              >
                {pill.label}{" "}
                <span className={cn(category === pill.id ? "opacity-90" : "opacity-60")}>
                  ({pill.count})
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="h-4 w-4 text-muted hidden sm:block" />
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value as typeof sort)
              }
              className="rounded-full border border-border bg-cream px-4 py-2 text-xs font-medium text-charcoal outline-none focus:border-coral"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {colorFilter && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span
              className="inline-flex items-center gap-1 rounded-full bg-coral-soft px-3 py-1 text-coral text-xs font-medium"
            >
              {colorFilter}
              <button type="button" onClick={() => setColorFilter(null)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          </div>
        )}

        <p className="mt-6 text-sm text-muted">
          Showing <span className="font-semibold text-charcoal">{filtered.length}</span>{" "}
          products
        </p>

        <ProductGrid className="mt-8">
          {filtered.map((p, i) => (
            <FadeIn
              key={p.id}
              delay={Math.min(i * 0.03, 0.2)}
              className={productCardWrapClass}
            >
              <ProductCard product={p} showSubtitle className="max-w-none" />
            </FadeIn>
          ))}
        </ProductGrid>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted">
            No pieces in this category yet. Try another filter.
          </p>
        )}
      </div>
    </div>
  );
}
