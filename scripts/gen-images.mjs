import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public", "images");
const map = {
  "product-headband-1.jpg": "product-headband-1.svg",
  "product-headband-1-alt.jpg": "product-headband-1.svg",
  "product-headband-2.jpg": "product-headband-1.svg",
  "product-headband-3.jpg": "product-headband-1.svg",
  "product-bow-1.jpg": "product-bow-1.svg",
  "product-bow-2.jpg": "product-bow-1.svg",
  "product-scrunchie-1.jpg": "product-scrunchie-1.svg",
  "product-tiara-1.jpg": "product-tiara-1.svg",
  "product-clips-1.jpg": "product-clips-1.svg",
  "cat-velvet.jpg": "cat-velvet.svg",
  "cat-bows.jpg": "product-bow-1.svg",
  "cat-pearl.jpg": "product-tiara-1.svg",
  "cat-scrunchie.jpg": "product-scrunchie-1.svg",
  "hero-model.jpg": "hero-model.svg",
  "hero-product-card.jpg": "product-bow-1.svg",
  "banner-girl.jpg": "banner-girl.svg",
  "gallery-1.jpg": "gallery-1.svg",
  "gallery-2.jpg": "gallery-2.svg",
  "gallery-3.jpg": "gallery-3.svg",
  "gallery-4.jpg": "gallery-4.svg",
  "style-1.jpg": "style-1.svg",
  "style-2.jpg": "style-2.svg",
  "style-3.jpg": "style-3.svg",
  "gift-box.jpg": "gift-box.svg",
  "order-hero.jpg": "order-hero.svg",
};

for (const [jpg, svg] of Object.entries(map)) {
  const src = path.join(dir, svg);
  const dest = path.join(dir, jpg);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

console.log("Image aliases created.");
