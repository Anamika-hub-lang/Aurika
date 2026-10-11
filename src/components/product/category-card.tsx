import { AppImage } from "@/components/ui/app-image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  href: string;
  image: string;
  itemCount?: string;
  tint?: string;
};

export function CategoryCard({
  title,
  href,
  image,
  itemCount = "50+ Items",
  tint = "#fce8ec",
}: Props) {
  return (
    <Link
      to={href}
      className="group relative flex h-[220px] w-full min-w-[150px] flex-col overflow-hidden rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-lg sm:h-[240px] sm:min-w-[170px]"
      style={{ backgroundColor: tint }}
    >
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-sm text-charcoal leading-snug sm:text-base">
            {title}
          </h3>
          <p className="mt-1 text-xs text-muted">{itemCount}</p>
        </div>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm transition group-hover:bg-coral group-hover:text-white"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[72%] w-[85%] -translate-x-1/2">
        <AppImage
          src={image}
          alt={title}
          fill
          className="object-contain object-bottom drop-shadow-md transition duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
