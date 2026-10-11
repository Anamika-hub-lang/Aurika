import { cn } from "@/lib/cn";
import { Link } from "react-router-dom";

type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  className?: string;
  inverted?: boolean;
};

export function Breadcrumbs({ items, className, inverted }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-6 text-xs",
        inverted ? "text-white/75 [&_a]:text-white/85 [&_a:hover]:text-white [&_span]:text-white" : "text-muted",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-border select-none">›</span>}
              {item.href && !last ? (
                <Link
                  to={item.href}
                  className="hover:text-coral transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-charcoal font-medium" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
