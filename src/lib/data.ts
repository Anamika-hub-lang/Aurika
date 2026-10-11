import { siteImages } from "@/lib/images";

export type ProductCategory =
  | "all"
  | "headbands"
  | "bows"
  | "pearl"
  | "scrunchies";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  tag?: "BESTSELLER" | "NEW" | "NEW ARRIVAL" | "LIMITED EDITION";
  subtitle?: string;
  colors: { name: string; hex: string }[];
  image: string;
  imageHover?: string;
};

const p = siteImages.products;

export const products: Product[] = [
  {
    id: "1",
    slug: "neutral-tones-claw-clip-set",
    name: "Neutral Tones Claw Clip Set",
    description: "Matte cream, black, and gold butterfly clips for everyday elegance.",
    price: 34,
    originalPrice: 42,
    category: "pearl",
    tag: "BESTSELLER",
    subtitle: "CREAM · BLACK · GOLD",
    colors: [
      { name: "Cream", hex: "#f5f0e8" },
      { name: "Noir", hex: "#141414" },
      { name: "Gold", hex: "#c9a227" },
    ],
    image: p.neutralClawClips,
    imageHover: p.pinkFloralClips,
  },
  {
    id: "2",
    slug: "kawaii-plush-headband-collection",
    name: "Kawaii Plush Headband Collection",
    description: "Soft fleece headbands with bear, bunny, and flower charms.",
    price: 28,
    category: "scrunchies",
    tag: "NEW ARRIVAL",
    subtitle: "PASTEL PLUSH",
    colors: [
      { name: "Blush", hex: "#f4c4c4" },
      { name: "Mint", hex: "#c8e6c9" },
      { name: "Cream", hex: "#fff8f0" },
    ],
    image: p.plushHeadbands,
    imageHover: p.brownAestheticClips,
  },
  {
    id: "3",
    slug: "fabric-headband-variety-set",
    name: "Fabric Headband Variety Set",
    description: "Satin, ruffle, pearl, and gingham bands in curated color stories.",
    price: 38,
    category: "headbands",
    tag: "BESTSELLER",
    colors: [
      { name: "Rose", hex: "#e8b4b8" },
      { name: "Sage", hex: "#9caf88" },
      { name: "Sky", hex: "#a8d4e6" },
    ],
    image: p.fabricHeadbandSets,
    imageHover: p.headbandsBasket,
  },
  {
    id: "4",
    slug: "arcadie-trailing-silk-bow",
    name: "Arcadie Trailing Silk Bow",
    description: "Sheer floral chiffon bows in navy, peach, sky, and cream.",
    price: 36,
    category: "bows",
    tag: "NEW ARRIVAL",
    subtitle: "FLORAL CHIFFON",
    colors: [
      { name: "Navy", hex: "#1a1a2e" },
      { name: "Peach", hex: "#f5d0c5" },
      { name: "Sky", hex: "#a8d4e6" },
    ],
    image: p.floralSilkBows,
    imageHover: p.pastelHeadbandsBag,
  },
  {
    id: "5",
    slug: "enamel-garden-clips",
    name: "Enamel Garden Clips",
    description: "Butterfly and flower claw clips in blush and iridescent pink.",
    price: 24,
    category: "pearl",
    tag: "NEW",
    colors: [
      { name: "Blush", hex: "#e8b4b8" },
      { name: "Coral", hex: "#e07a5f" },
    ],
    image: p.pinkFloralClips,
    imageHover: p.neutralClawClips,
  },
  {
    id: "6",
    slug: "cozy-bear-aesthetic-clip-card",
    name: "Cozy Bear Aesthetic Clip Card",
    description: "Neutral tan and cream clips with bear, bunny, and heart motifs.",
    price: 22,
    category: "pearl",
    colors: [
      { name: "Tan", hex: "#c4a484" },
      { name: "Cocoa", hex: "#5c4033" },
    ],
    image: p.brownAestheticClips,
    imageHover: p.pearlGoldClips,
  },
  {
    id: "7",
    slug: "duchess-pearl-velvet-band",
    name: "Pearl & Gold Statement Clip Set",
    description: "Gold-tone barrettes with pearls, stars, and crystal accents.",
    price: 48,
    originalPrice: 58,
    category: "pearl",
    tag: "BESTSELLER",
    subtitle: "GOLD & PEARL",
    colors: [
      { name: "Gold", hex: "#c9a227" },
      { name: "Pearl", hex: "#f5f5f0" },
      { name: "Blush", hex: "#f4c4c4" },
    ],
    image: p.pearlGoldClips,
    imageHover: p.pinkFloralClips,
  },
  {
    id: "8",
    slug: "pastel-gingham-headband-set",
    name: "Pastel Gingham Headband Set",
    description: "Padded cream, orange gingham, pink, and pearl-ruffle bands.",
    price: 42,
    category: "headbands",
    tag: "NEW",
    colors: [
      { name: "Gingham Peach", hex: "#f5c4a0" },
      { name: "Soft Pink", hex: "#f4c4c4" },
      { name: "Cream", hex: "#fff8f0" },
    ],
    image: p.pastelHeadbandsBag,
    imageHover: p.floralPaddedBands,
  },
  {
    id: "9",
    slug: "midnight-velvet-band",
    name: "Basket Classics Headband Bundle",
    description: "Floral, pearl, ruched, and gingham bands — six signature styles.",
    price: 44,
    category: "headbands",
    colors: [
      { name: "Sky Floral", hex: "#a8d4e6" },
      { name: "Pearl", hex: "#f5f5f0" },
      { name: "Gingham", hex: "#b8d4e8" },
    ],
    image: p.headbandsBasket,
    imageHover: p.fabricHeadbandSets,
  },
  {
    id: "10",
    slug: "padded-velvet-band-lilac",
    name: "Padded Floral Velvet Bands",
    description: "Thick padded bands with rose prints and gold stud details.",
    price: 40,
    category: "headbands",
    tag: "LIMITED EDITION",
    colors: [
      { name: "Rose Garden", hex: "#c45c5c" },
      { name: "Blush", hex: "#e8b4b8" },
      { name: "Cocoa", hex: "#5c4033" },
    ],
    image: p.floralPaddedBands,
    imageHover: p.pastelHeadbandsBag,
  },
];

export const categories = [
  {
    title: "Velvet Headbands",
    description: "Couture cushioning for all-day comfort.",
    href: "/collections?cat=headbands",
    image: siteImages.categories.velvet,
    itemCount: "85+ Items",
    tint: "#fce8ec",
  },
  {
    title: "Silk Ribbon Bows",
    description: "Mulberry silk tails that flutter with every step.",
    href: "/collections?cat=bows",
    image: siteImages.categories.bows,
    itemCount: "62+ Items",
    tint: "#ffe8d9",
  },
  {
    title: "Pearl & Crystal",
    description: "Heirloom sparkle for ceremonies and galas.",
    href: "/collections?cat=pearl",
    image: siteImages.categories.pearl,
    itemCount: "40+ Items",
    tint: "#e8f7f0",
  },
  {
    title: "Cloud Scrunchies",
    description: "Gentle hold for the softest strands.",
    href: "/collections?cat=scrunchies",
    image: siteImages.categories.scrunchie,
    itemCount: "55+ Items",
    tint: "#e3f0ff",
  },
  {
    title: "Clips & Barrettes",
    description: "Everyday elegance with a soft grip.",
    href: "/collections",
    image: siteImages.gallery[0],
    itemCount: "70+ Items",
    tint: "#f3ebe4",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
