import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/cn";
import { formatINR } from "@/lib/currency";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Shop" },
  { href: "/gift-sets", label: "Gift Sets" },
  { href: "/contact", label: "Contact" },
];

function linkIsActive(pathname: string, search: string, href: string) {
  const [path, query] = href.split("?");
  if (pathname !== path) return false;
  if (path === "/" && href === "/") return true;
  if (path === "/gift-sets" && href === "/gift-sets") return true;
  if (path === "/contact" && href === "/contact") return true;
  if (path === "/collections" && href === "/collections" && !query) {
    return pathname === "/collections" && !search;
  }
  if (!query) return pathname === path && href !== "/" && !search;
  const key = query.split("=")[0];
  const val = query.split("=")[1];
  return new URLSearchParams(search).get(key) === val;
}

function NavLinkItem({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  const { pathname, search } = useLocation();
  const active = linkIsActive(pathname, search, href);

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex shrink-0 items-center h-10 px-0.5 text-sm font-medium transition-colors whitespace-nowrap",
        active
          ? "text-coral after:absolute after:bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-coral"
          : "text-charcoal/75 hover:text-coral",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const { openCart, subtotal, itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const iconBtn =
    "inline-flex items-center justify-center h-10 w-10 rounded-full text-charcoal hover:bg-coral-soft/80 transition-colors shrink-0";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-cream/97 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-sm border-b border-border/50" : "border-b border-border/30",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ——— Desktop ——— */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 h-[4.5rem] min-w-0">
          <Link to="/" className="flex shrink-0 items-center gap-2.5 min-w-0">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-coral-soft text-lg"
              aria-hidden
            >
              🌸
            </span>
            <span className="min-w-0">
              <span className="block font-serif text-lg leading-tight text-charcoal tracking-wide">
                Aura &amp; Bow
              </span>
              <span className="block text-[10px] font-medium text-muted truncate">
                Wear Your Confidence
              </span>
            </span>
          </Link>

          <nav
            className="flex flex-1 flex-nowrap items-center justify-center gap-x-4 xl:gap-x-7 min-w-0 overflow-x-auto scrollbar-none"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <NavLinkItem key={l.label} href={l.href} label={l.label} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button type="button" className={iconBtn} aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className={iconBtn} aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(iconBtn, "relative")}
              aria-label="Open bag"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute top-1.5 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral px-1 text-[9px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ——— Mobile / tablet ——— */}
        <div className="relative flex lg:hidden items-center justify-between h-14 gap-3">
          <button
            type="button"
            className={iconBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="font-serif text-base sm:text-lg text-charcoal leading-none absolute left-1/2 -translate-x-1/2"
          >
            AURA &amp; BOW
          </Link>

          <div className="flex items-center gap-0.5">
            <button type="button" className={iconBtn} aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(iconBtn, "relative")}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 h-3.5 w-3.5 rounded-full bg-coral text-[8px] font-bold text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/40 lg:hidden"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed left-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-cream shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border px-5 h-14">
                <span className="font-serif text-sm tracking-widest text-coral">
                  Menu
                </span>
                <button
                  type="button"
                  className={iconBtn}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-5 overflow-y-auto">
                {navLinks.map((l) => (
                  <NavLinkItem
                    key={l.label}
                    href={l.href}
                    label={l.label}
                    onClick={() => setMenuOpen(false)}
                    className="h-11 justify-start text-sm tracking-widest after:hidden border-b border-border/40 w-full"
                  />
                ))}
              </nav>
              <div className="mt-auto border-t border-border p-5 space-y-3">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl border border-border bg-white px-4 h-11 text-sm"
                >
                  <User className="h-4 w-4 text-coral" />
                  Atelier Guest
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openCart();
                  }}
                  className="flex w-full items-center justify-between rounded-xl bg-coral px-4 h-11 text-sm text-white"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Your Bag
                  </span>
                  <span className="tabular-nums">{formatINR(subtotal)}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
