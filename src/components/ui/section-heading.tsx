import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="font-serif text-3xl md:text-4xl text-purple tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
