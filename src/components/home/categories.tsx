import { CategoryCard } from "@/components/product/category-card";
import { SectionRow } from "@/components/ui/section-row";
import { FadeIn } from "@/components/ui/fade-in";
import { categories } from "@/lib/data";

export function CategoriesSection() {
  return (
    <section className="py-4 md:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionRow
            title="Shop by Category"
            actionLabel="View All Categories →"
          />
        </FadeIn>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {categories.map((c, i) => (
            <FadeIn
              key={c.title}
              delay={i * 0.04}
              className="w-[42%] shrink-0 snap-start sm:w-[30%] md:w-[22%] lg:w-[18%]"
            >
              <CategoryCard {...c} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
