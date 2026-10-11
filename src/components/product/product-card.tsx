import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/cn";
import { formatINR } from "@/lib/currency";
import { AppImage } from "@/components/ui/app-image";
import { productCardWrapClass } from "@/components/product/product-grid";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type Props = {
  product: Product;
  showSubtitle?: boolean;
  className?: string;
  featured?: boolean;
};

export function ProductCard({
  product,
  showSubtitle = false,
  className,
  featured = false,
}: Props) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);
  const [wish, setWish] = useState(false);

  const showHot = product.tag === "BESTSELLER";
  const showNew =
    product.tag === "NEW" || product.tag === "NEW ARRIVAL";

  return (
    <article
      className={cn(
        productCardWrapClass,
        "group/card overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition hover:shadow-md",
        className,
      )}
    >
      <Link
        to={`/products/${product.slug}`}
        className="block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-coral-soft/30">
          <AppImage
            src={
              hover && product.imageHover ? product.imageHover : product.image
            }
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              hover && "scale-105",
            )}
          />
          <div className="absolute left-2.5 top-2.5 flex flex-col gap-1">
            {showHot && (
              <span className="rounded-md bg-coral px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                Hot
              </span>
            )}
            {showNew && (
              <span className="rounded-md bg-charcoal px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                New
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setWish(!wish);
            }}
            className="absolute right-2.5 top-2.5 rounded-full bg-white p-2 shadow-sm hover:scale-110 transition-transform z-10"
            aria-label="Add to wishlist"
          >
            <Heart
              className={cn(
                "h-4 w-4",
                wish ? "fill-coral text-coral" : "text-charcoal/70",
              )}
            />
          </button>

          {featured ? (
            <div
              className={cn(
                "absolute inset-x-0 bottom-0 p-3 transition-all duration-300",
                hover
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none",
              )}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-coral py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md hover:bg-coral-deep"
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className={cn(
                "absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white shadow-md transition hover:bg-coral-deep",
                hover ? "scale-100" : "scale-95",
              )}
              aria-label="Add to cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="p-3.5 pb-4">
          {showSubtitle && product.subtitle && (
            <p className="text-[9px] uppercase tracking-widest text-muted mb-0.5 line-clamp-1">
              {product.subtitle}
            </p>
          )}
          <h3 className="font-medium text-sm text-charcoal leading-snug line-clamp-2 group-hover/card:text-coral transition-colors">
            {product.name}
          </h3>
          <div className="mt-2.5 flex items-center justify-between gap-2">
            <div className="flex gap-1.5">
              {product.colors.slice(0, 4).map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="h-3.5 w-3.5 rounded-full border border-border"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <div className="text-right shrink-0">
              {product.originalPrice && (
                <span className="mr-1 text-[11px] text-muted line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
              <span className="text-sm font-bold text-charcoal">
                {formatINR(product.price)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
