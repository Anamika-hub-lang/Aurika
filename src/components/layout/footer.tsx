import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const columns = [
  {
    title: "Curated Collections",
    links: [
      "Padded Headbands",
      "Silk Bows",
      "Pearl & Crystal",
      "Gift Sets",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "Shipping & Returns",
      "Size & Fit Guide",
      "Contact Concierge",
      "Track Your Order",
    ],
  },
  {
    title: "Ethical Atelier",
    links: ["Our Materials", "OEKO-TEX® Silk", "Recyclable Packaging"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-serif text-xl text-purple tracking-widest">
              AURA &amp; BOW
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              Hand-assembled with mulberry silks, freshwater pearls, and
              pinch-free armatures — each piece arrives in our signature lilac
              keepsake box.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-border p-2 hover:bg-lavender/50"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-border p-2 hover:bg-lavender/50"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["OEKO-TEX® Silk", "Handmade", "Recyclable Boxes"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-purple/20 bg-lavender/30 px-3 py-1 text-[10px] uppercase tracking-wider text-purple"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/collections"
                      className="text-sm text-muted hover:text-purple transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Secure Encrypted Luxury Checkout</span>
          <span>© {new Date().getFullYear()} Aura &amp; Bow. All rights reserved.</span>
          <div className="flex gap-2 opacity-70">
            {["Visa", "MC", "Amex", "Apple Pay", "Shop Pay"].map((p) => (
              <span
                key={p}
                className="rounded border border-border px-2 py-0.5 text-[10px]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
