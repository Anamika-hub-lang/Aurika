import { BadgeCheck, IndianRupee, RotateCcw, Truck } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    subtitle: "Handpicked just for you",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "On-time delivery guaranteed",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "7 days return policy",
  },
  {
    icon: IndianRupee,
    title: "Best Prices",
    subtitle: "Stylish looks, best prices",
  },
];

export function ValuePropsBar() {
  return (
    <section className="relative z-20 -mt-2 px-4 sm:px-6 pb-10 md:pb-14">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border/50 bg-white px-4 py-6 shadow-lg shadow-charcoal/[0.04] sm:px-8 md:py-8">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {items.map(({ icon: Icon, title, subtitle }) => (
            <li
              key={title}
              className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-3"
            >
              <span
                className="mb-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-soft text-coral sm:mb-0"
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal">{title}</p>
                <p className="mt-0.5 text-xs text-muted leading-snug">
                  {subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
