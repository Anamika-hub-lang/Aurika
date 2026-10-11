import {
  ProductGrid,
  productCardWrapClass,
} from "@/components/product/product-grid";
import { ProductCard } from "@/components/product/product-card";
import { SectionRow } from "@/components/ui/section-row";
import { FadeIn } from "@/components/ui/fade-in";
import { products } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function BestsellersSection() {
  const featured = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6">
      <FadeIn>
        <SectionRow
          title="New Arrivals"
          actionLabel="View All Products →"
        />
      </FadeIn>
      <ProductGrid>
        <AnimatePresence mode="popLayout">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className={productCardWrapClass}
            >
              <ProductCard
                product={p}
                className="max-w-none"
                featured={i === 1}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ProductGrid>
    </section>
  );
}
