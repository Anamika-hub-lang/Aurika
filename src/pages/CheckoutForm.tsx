import { AppImage } from "@/components/ui/app-image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";
import { siteImages } from "@/lib/images";
import { useState } from "react";
import { Link } from "react-router-dom";

const steps = ["Shipping", "Bespoke Gifting", "Payment"];

export function CheckoutForm() {
  const { items, subtotal } = useCart();
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState("standard");
  const [packaging, setPackaging] = useState("drawer");
  const [giftNote, setGiftNote] = useState(true);
  const [occasion, setOccasion] = useState("Flower Girl");
  const [wax, setWax] = useState("Purple Velvet");
  const [paymentTab, setPaymentTab] = useState("card");

  const shippingCost =
    shipping === "express" ? 14 : shipping === "same-day" ? 28 : 0;
  const packagingCost = packaging === "trunk" ? 34 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + packagingCost + tax;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2 text-sm">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold",
                i < step && "bg-purple border-purple text-white",
                i === step && "border-purple text-purple",
                i > step && "border-border text-muted",
              )}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span className={i === step ? "text-purple font-medium" : "text-muted"}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {step === 0 && (
            <>
              <div className="flex flex-wrap gap-3">
                <Button variant="dark" className="text-xs py-2">Apple Pay</Button>
                <Button className="text-xs py-2">Shop Pay</Button>
                <button
                  type="button"
                  className="rounded-full bg-pink-100 px-4 py-2 text-xs text-pink-800"
                >
                  Klarna
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Email", "First Name", "Last Name", "Street Address", "Apartment", "City", "Postal Code", "Country"].map(
                  (label) => (
                    <label key={label} className="block text-sm">
                      <span className="text-muted text-xs">{label}</span>
                      <input
                        className="mt-1 w-full rounded-xl border border-border bg-cream-dark px-4 py-3 text-sm outline-none focus:border-purple/40"
                      />
                    </label>
                  ),
                )}
              </div>
              <div>
                <p className="text-sm font-medium mb-3">Shipping Method</p>
                {[
                  { id: "standard", title: "Complimentary Atelier Standard", price: 0 },
                  { id: "express", title: "White-Glove Express Courier", price: 14 },
                  { id: "same-day", title: "Same-Day Atelier Chauffeur (Paris & NYC)", price: 28 },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setShipping(opt.id)}
                    className={cn(
                      "mb-3 w-full rounded-xl border p-4 text-left flex justify-between items-center",
                      shipping === opt.id
                        ? "border-purple ring-1 ring-purple"
                        : "border-border bg-white",
                    )}
                  >
                    <span className="text-sm">{opt.title}</span>
                    <span className="text-sm font-medium">
                      {opt.price === 0 ? "Free" : `+$${opt.price.toFixed(2)}`}
                    </span>
                  </button>
                ))}
              </div>
              <Button onClick={() => setStep(1)}>Continue to Gifting</Button>
            </>
          )}

          {step === 1 && (
            <>
              <p className="font-serif text-xl text-purple">Bespoke Gifting Atelier</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    id: "drawer",
                    title: "Signature Keepsake Drawer Box",
                    price: 0,
                    image: siteImages.checkoutPackaging[0],
                  },
                  {
                    id: "trunk",
                    title: "Ceremonial Silk Keepsake Trunk",
                    price: 34,
                    image: siteImages.checkoutPackaging[1],
                  },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPackaging(p.id)}
                    className={cn(
                      "rounded-xl border-2 overflow-hidden text-left transition-all",
                      packaging === p.id
                        ? "border-purple ring-2 ring-purple/30 bg-lavender/20"
                        : "border-card-border bg-white hover:border-purple",
                    )}
                  >
                    <div className="relative aspect-[16/10]">
                      <AppImage
                        src={p.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-sm">{p.title}</p>
                      <p className="mt-1 text-purple text-sm">
                        {p.price === 0 ? "Included" : `+$${p.price}`}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={giftNote}
                  onChange={(e) => setGiftNote(e.target.checked)}
                  className="accent-purple"
                />
                Include calligraphy card
              </label>
              {giftNote && (
                <div className="space-y-4 rounded-2xl border-2 border-card-border bg-white p-6">
                  <div className="flex flex-wrap gap-2">
                    {["7th Birthday", "Flower Girl", "Holiday"].map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => setOccasion(o)}
                        className={cn(
                          "rounded-full px-4 py-1.5 text-xs",
                          occasion === o
                            ? "bg-purple text-white"
                            : "bg-lavender/40 text-charcoal",
                        )}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                  <textarea
                    placeholder="Calligraphy note message..."
                    className="w-full min-h-[100px] rounded-xl border border-border p-4 text-sm font-script"
                    defaultValue="Dearest Clara, may every day feel like a coronation."
                  />
                  <p className="text-xs text-muted">Wax seal</p>
                  <div className="flex gap-2">
                    {["Purple Velvet", "Rose Gold", "Ivory"].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setWax(w)}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs border",
                          wax === w ? "border-purple" : "border-border",
                        )}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
                <Button onClick={() => setStep(2)}>Continue to Payment</Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex gap-2 border-b border-border">
                {["card", "klarna", "paypal"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setPaymentTab(tab)}
                    className={cn(
                      "px-4 py-2 text-sm capitalize border-b-2 -mb-px",
                      paymentTab === tab
                        ? "border-purple text-purple"
                        : "border-transparent text-muted",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {paymentTab === "card" && (
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  {["Card Number", "Expiration", "Security Code", "Name on Card"].map(
                    (f) => (
                      <input
                        key={f}
                        placeholder={f}
                        className="rounded-xl border border-border bg-cream-dark px-4 py-3 text-sm sm:col-span-2 first:sm:col-span-2"
                      />
                    ),
                  )}
                </div>
              )}
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button to="/order/atelier-4821" className="flex-1">
                  PLACE ATELIER ORDER • ${total.toFixed(2)} USD
                </Button>
              </div>
            </>
          )}
        </div>

        <aside className="rounded-2xl border-2 border-card-border bg-white p-6 h-fit lg:sticky lg:top-28">
          <h3 className="font-serif text-lg text-purple mb-4">Order Summary</h3>
          <ul className="space-y-4">
            {items.map((line) => (
              <li key={line.product.id} className="flex gap-3">
                <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0">
                  <AppImage
                    src={line.product.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-serif leading-snug">{line.product.name}</p>
                  <p className="text-xs text-muted">Qty {line.quantity}</p>
                </div>
                <p className="text-sm font-medium">
                  ${(line.product.price * line.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-muted border-t border-border pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Packaging</span>
              <span>{packagingCost === 0 ? "Included" : `$${packagingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-charcoal text-base pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-lavender/30 p-4 text-xs text-muted space-y-2">
            <p>Zero-Pinch Tension Armature</p>
            <p>100% Grade 6A Mulberry Silk</p>
            <p>Complimentary Returns</p>
          </div>
          <Link to="#" className="mt-4 inline-block text-xs text-purple underline">
            Chat live with concierge
          </Link>
        </aside>
      </div>
    </div>
  );
}
