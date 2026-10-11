import { cn } from "@/lib/cn";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  actionLabel?: string;
  actionTo?: string;
  className?: string;
};

export function SectionRow({
  title,
  actionLabel,
  actionTo = "/collections",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-wrap items-end justify-between gap-4",
        className,
      )}
    >
      <h2 className="font-serif text-2xl md:text-[1.75rem] text-charcoal tracking-tight">
        {title}
      </h2>
      {actionLabel && (
        <Link
          to={actionTo}
          className="text-sm font-semibold text-coral hover:text-coral-deep transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
