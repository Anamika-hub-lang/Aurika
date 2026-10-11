import { Gift, Headphones, ShieldCheck, Sparkles } from "lucide-react";

const markers = [
  {
    icon: Gift,
    title: "Exclusive Offers",
    subtitle: "Save more every day",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    subtitle: "100% safe & secure",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "We're here to help",
  },
  {
    icon: Sparkles,
    title: "Loyalty Rewards",
    subtitle: "Earn points & get rewards",
  },
];

export function TrustMarkersSection() {
  return (
    <section className="border-t border-border/40 bg-white/40 py-14 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 md:gap-6">
        {markers.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <span
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-md shadow-coral/30"
            >
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <p className="text-sm font-semibold text-charcoal">{title}</p>
            <p className="mt-1 text-xs text-muted">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
