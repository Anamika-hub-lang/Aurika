import type { Product } from "@/lib/data";

const img = (file: string) => `/images/${file}`;

export type GiftSetMeta = Product & {
  tagline: string;
  includes: string[];
  tint: string;
};

export const giftSets: GiftSetMeta[] = [
  {
    id: "gift-1",
    slug: "perfect-gift-set-for-girls",
    name: "The Perfect Gift Set for Girls",
    tagline: "Cute. Trendy. Totally You.",
    description:
      "Six-compartment keepsake box with claw clips, scrunchies, bracelets, earrings & satin bow — ready to gift.",
    price: 1499,
    originalPrice: 1899,
    category: "scrunchies",
    tag: "BESTSELLER",
    colors: [{ name: "Blush", hex: "#f4c4c4" }],
    image: img("gift-set-perfect-girls.jpg"),
    includes: [
      "Fuzzy claw clips",
      "Satin scrunchies",
      "Beaded bracelets",
      "Butterfly jewelry set",
      "Hand-made satin bow card",
    ],
    tint: "#fce8ec",
  },
  {
    id: "gift-2",
    slug: "birthday-keepsake-box",
    name: "Birthday Keepsake Box",
    tagline: "A little sparkle just for you",
    description:
      "Mauve gift drawer with scrunchie, floral claw, pearl studs, organza bow & hair pins on message cards.",
    price: 1799,
    originalPrice: 2199,
    category: "bows",
    tag: "NEW ARRIVAL",
    colors: [{ name: "Mauve", hex: "#c88e96" }],
    image: img("gift-set-birthday-box.png"),
    includes: [
      "Butterfly scrunchie",
      "Floral claw clip",
      "Pearl flower studs",
      "Organza bow barrette",
      "Curated hair pin set",
      "Lid message card",
    ],
    tint: "#f3e8ee",
  },
  {
    id: "gift-3",
    slug: "especially-for-you-box",
    name: "Especially For You Box",
    tagline: "Especially FOR YOU",
    description:
      "White gift box on blush satin with panda bracelets, tulip earrings, satin scrunchie & ribbon-tied lid.",
    price: 1299,
    category: "pearl",
    tag: "NEW",
    colors: [{ name: "Rose", hex: "#e8b4b8" }],
    image: img("gift-set-especially-for-you.png"),
    includes: [
      "Panda charm bracelets (×2)",
      "Pink satin scrunchie",
      "Tulip pearl earrings",
      "Ribbon-tied gift lid",
      "Shredded paper filler",
    ],
    tint: "#ffe8ef",
  },
  {
    id: "gift-4",
    slug: "lavender-luxe-hamper",
    name: "Lavender Luxe Hamper",
    tagline: "Monochrome magic in lilac",
    description:
      "Curated purple-toned hamper with wallet, watch, perfume, claw clips, pearls & satin bow — luxury gifting.",
    price: 3499,
    originalPrice: 3999,
    category: "pearl",
    tag: "LIMITED EDITION",
    colors: [{ name: "Lilac", hex: "#d8bfd8" }],
    image: img("gift-set-lavender-luxe.png"),
    includes: [
      "Pebbled mini wallet",
      "Analog watch on cushion",
      "Travel perfume atomizer",
      "Pearl & claw accessories",
      "Artificial rose & florals",
      "Signature purple bow lid",
    ],
    tint: "#ede6f5",
  },
];
