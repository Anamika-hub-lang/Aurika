import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Medium-sized product cards — centered, consistent max width */
export function ProductGrid({ children, className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 justify-items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

export const productCardWrapClass = "w-full max-w-[252px] sm:max-w-[268px]";
