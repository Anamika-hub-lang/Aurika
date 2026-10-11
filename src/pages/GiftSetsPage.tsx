import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/ui/app-image";
import { FadeIn } from "@/components/ui/fade-in";
import { useCart } from "@/context/cart-context";
import { formatINR } from "@/lib/currency";
import { giftSets } from "@/lib/gift-sets";
import { SiteShell } from "@/components/layout/site-shell";
import { cn } from "@/lib/cn";
import { Gift, Heart, Sparkles } from "lucide-react";
export function GiftSetsPage() {
  const { addItem } = useCart();
  const hero = giftSets[0];

  return (
    <SiteShell topBar="none">
      <div className="min-h-screen bg-[#fdf2f2]">
        <section className="relative overflow-hidden border-b border-border/30 bg-gradient-to-b from-[#fce8ec] via-cream to-cream">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Gift Sets" },
              ]}
            />
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <FadeIn>
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-coral shadow-sm"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Curated keepsake boxes
                </span>
                <h1 className="mt-5 font-serif text-4xl text-[#5c4033] md:text-5xl leading-tight">
                  The{" "}
                  <span className="font-script text-coral text-5xl md:text-6xl">
                    Perfect
                  </span>
                  <br />
                  Gift Sets
                </h1>
                <p
                  className="mt-4 inline-block rounded-xl bg-coral-soft/80 px-4 py-2 text-sm font-medium text-[#5c4033]"
                >
                  Cute. Trendy. Totally You. ♥
                </p>
                <p className="mt-5 max-w-lg text-muted leading-relaxed">
                  Ready-to-gift boxes filled with clips, bows, scrunchies & jewelry
                  — each photographed in our studio. Complimentary message card on
                  every order.
                </p>
                <Button to="#sets" className="mt-8">
                  Explore sets
                </Button>
              </FadeIn>
              <FadeIn delay={0.06} className="relative">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/80 shadow-xl"
                >
                  <AppImage
                    src={hero.image}
                    alt={hero.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="sets" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
              Choose your moment
            </h2>
            <p className="mt-2 text-sm text-muted">
              Birthday, best friend, bridesmaid, or just because — pick a box that
              matches her vibe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {giftSets.map((set, i) => (
              <FadeIn key={set.id} delay={i * 0.05}>
                <article
                  className="overflow-hidden rounded-3xl border border-border/50 bg-white shadow-md transition hover:shadow-lg"
                >
                  <div
                    className="relative aspect-[5/4] sm:aspect-[16/10]"
                    style={{ backgroundColor: set.tint }}
                  >
                    <AppImage
                      src={set.image}
                      alt={set.name}
                      fill
                      className="object-cover object-center p-2 sm:p-4"
                    />
                    {set.tag && (
                      <span
                        className="absolute left-4 top-4 rounded-md bg-white/95 px-2 py-1 text-[10px] font-bold uppercase text-coral shadow-sm"
                      >
                        {set.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="font-script text-xl text-coral">{set.tagline}</p>
                    <h3 className="mt-1 font-serif text-xl text-charcoal">
                      {set.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {set.description}
                    </p>
                    <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {set.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-charcoal/80"
                        >
                          <Gift className="h-3.5 w-3.5 shrink-0 text-coral mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-5">
                      <div>
                        <span className="text-xl font-bold text-charcoal">
                          {formatINR(set.price)}
                        </span>
                        {set.originalPrice && (
                          <span className="ml-2 text-sm text-muted line-through">
                            {formatINR(set.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={cn(
                            "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-coral-soft transition-colors",
                          )}
                          aria-label="Save to wishlist"
                        >
                          <Heart className="h-4 w-4 text-coral" />
                        </button>
                        <Button
                          onClick={() =>
                            addItem(set, {
                              shade: set.colors[0]?.name ?? "Gift",
                              width: "Gift Set",
                            })
                          }
                        >
                          Add to bag
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div
            className="mt-14 rounded-2xl bg-gradient-to-r from-coral-soft to-cream border border-coral/20 p-8 text-center"
          >
            <p className="font-script text-2xl text-coral">
              A little magic for every day ♥
            </p>
            <p className="mt-2 text-sm text-muted max-w-md mx-auto">
              Need a custom hamper for weddings or bulk gifting? Our concierge can
              build a set in your colours.
            </p>
            <Button to="/contact" variant="outline" className="mt-6">
              Contact us
            </Button>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
