import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "dark" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-white hover:bg-coral-deep shadow-sm hover:shadow-md shadow-coral/25",
  secondary: "bg-charcoal text-white hover:bg-black",
  outline:
    "border-2 border-charcoal/15 text-charcoal bg-white hover:bg-coral-soft/60",
  dark: "bg-charcoal text-white hover:bg-black",
  ghost: "text-purple hover:bg-lavender/40",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  to?: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  to,
  children,
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50";

  if (to) {
    const { onClick } = props;
    return (
      <Link
        to={to}
        className={cn(base, variants[variant], className)}
        onClick={
          onClick
            ? (e) => onClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
            : undefined
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
