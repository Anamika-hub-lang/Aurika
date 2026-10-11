import { cn } from "@/lib/cn";
import { useState } from "react";

const FALLBACK = "/images/hero.jpg";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
};

export function AppImage({ src, alt, className, fill, priority }: Props) {
  const [current, setCurrent] = useState(src);

  const shared = {
    src: current,
    alt,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    onError: () => {
      if (current !== FALLBACK) setCurrent(FALLBACK);
    },
  };

  if (fill) {
    return (
      <img
        {...shared}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    );
  }

  return <img {...shared} className={cn("object-cover", className)} />;
}
