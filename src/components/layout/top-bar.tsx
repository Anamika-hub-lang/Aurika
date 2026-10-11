import { formatINR } from "@/lib/currency";

export function TopBar({ variant = "promo" }: { variant?: "promo" | "utility" | "none" }) {
  if (variant === "none") return null;

  if (variant === "utility") {
    return (
      <div className="bg-coral text-white/95 text-[10px] sm:text-[11px] tracking-wide border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-3 px-4 sm:px-6 h-9 min-w-0">
          <span className="shrink-0 whitespace-nowrap opacity-90">CURRENCY: INR (₹)</span>
          <span className="hidden md:inline min-w-0 truncate text-center opacity-95 whitespace-nowrap">
            Free Worldwide Express + Keepsake Box at {formatINR(100, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </span>
          <div className="flex shrink-0 flex-nowrap gap-3 sm:gap-4 uppercase tracking-wider whitespace-nowrap">
            <button type="button" className="hover:text-white transition-colors">
              Concierge
            </button>
            <button type="button" className="hover:text-white transition-colors">
              Boutiques
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coral text-[10px] sm:text-xs text-white/95 tracking-wide border-b border-white/10">
      <p className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 whitespace-nowrap overflow-hidden text-ellipsis">
        Free Worldwide Shipping on Orders Over {formatINR(150, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} · Complimentary Keepsake Packaging
      </p>
    </div>
  );
}
