import { AppImage } from "@/components/ui/app-image";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/images";
import {
  PACKAGING_THRESHOLD,
  useCart,
} from "@/context/cart-context";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
    isGift,
    setIsGift,
    giftMessage,
    setGiftMessage,
  } = useCart();

  const progress = Math.min(100, (subtotal / PACKAGING_THRESHOLD) * 100);
  const remaining = Math.max(0, PACKAGING_THRESHOLD - subtotal);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-serif text-lg text-purple">
                Your Atelier Bag ({itemCount} Creations)
              </h2>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full p-2 hover:bg-lavender/50"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-3 border-b border-border bg-lavender/20">
              <div className="h-1.5 w-full rounded-full bg-white overflow-hidden">
                <div
                  className="h-full rounded-full bg-purple transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {remaining > 0
                  ? `Add $${remaining.toFixed(2)} to qualify for Free Worldwide Express + Keepsake Embossed Box at $${PACKAGING_THRESHOLD}.00.`
                  : "You qualify for complimentary heirloom packaging & express shipping."}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {items.map((line) => (
                <div
                  key={line.product.id}
                  className="flex gap-3 border-b border-border/80 pb-5"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-lavender/30">
                    <AppImage
                      src={line.product.image}
                      alt={line.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted">
                      Velvet
                    </p>
                    <p className="font-serif text-sm text-charcoal leading-snug">
                      {line.product.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {line.shade} · {line.width}
                    </p>
                    <span className="mt-2 inline-block rounded-full bg-lavender/60 px-2 py-0.5 text-[9px] text-purple">
                      {line.hardware}
                    </span>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-border bg-white">
                        <button
                          type="button"
                          className="p-1.5 hover:bg-lavender/40 rounded-l-full"
                          onClick={() =>
                            updateQuantity(
                              line.product.id,
                              line.quantity - 1,
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          className="p-1.5 hover:bg-lavender/40 rounded-r-full"
                          onClick={() =>
                            updateQuantity(
                              line.product.id,
                              line.quantity + 1,
                            )
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-purple">
                          ${(line.product.price * line.quantity).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(line.product.id)}
                          className="text-muted hover:text-red-600"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-xl border-2 border-card-border bg-white overflow-hidden">
                <div className="relative h-28">
                  <AppImage
                    src={siteImages.giftBox}
                    alt="Keepsake packaging"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-purple">
                    Complimentary Keepsake Packaging
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Signature lilac drawer box with gilded embossing.
                  </p>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isGift}
                  onChange={(e) => setIsGift(e.target.checked)}
                  className="mt-1 accent-purple"
                />
                <span className="text-sm">This order is a gift</span>
              </label>
              {isGift && (
                <textarea
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  placeholder="Handwritten calligraphy dedication..."
                  className="w-full rounded-xl border border-border bg-white p-3 text-sm min-h-[80px] outline-none focus:border-purple/40 font-script"
                />
              )}
            </div>

            <div className="border-t border-border bg-white px-5 py-5 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 rounded-full border border-border px-4 py-2 text-sm outline-none"
                />
                <Button variant="outline" className="py-2 px-4 text-xs">
                  Apply
                </Button>
              </div>
              <div className="space-y-1 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Packaging</span>
                  <span className="text-green-700">Complimentary ($0.00)</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <p className="text-xl font-serif text-charcoal">
                ${subtotal.toFixed(2)}{" "}
                <span className="text-sm font-sans text-muted">USD</span>
              </p>
              <Button
                to="/checkout"
                className="w-full"
                onClick={closeCart}
              >
                Proceed to Atelier Checkout (${subtotal.toFixed(2)}) →
              </Button>
              <Button variant="dark" className="w-full">
                Instant Apple Pay
              </Button>
              <div className="rounded-xl bg-gradient-to-r from-lavender/60 to-lavender/20 p-3 text-center text-xs text-purple">
                Pay with Klarna — 4 interest-free payments
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
