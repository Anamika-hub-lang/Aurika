$dir = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$files = @{
  "hero.jpg" = "https://picsum.photos/seed/aurika-hero/1000/1250"
  "hero-product.jpg" = "https://picsum.photos/seed/aurika-bow/600/600"
  "cat-velvet.jpg" = "https://picsum.photos/seed/aurika-velvet/700/560"
  "cat-bows.jpg" = "https://picsum.photos/seed/aurika-bows/700/560"
  "cat-pearl.jpg" = "https://picsum.photos/seed/aurika-pearl/700/560"
  "cat-scrunchie.jpg" = "https://picsum.photos/seed/aurika-scrunchie/700/560"
  "style-waves.jpg" = "https://picsum.photos/seed/aurika-style1/800/1000"
  "style-ponytail.jpg" = "https://picsum.photos/seed/aurika-style2/800/1000"
  "style-bun.jpg" = "https://picsum.photos/seed/aurika-style3/800/1000"
  "gallery-1.jpg" = "https://picsum.photos/seed/aurika-g1/600/750"
  "gallery-2.jpg" = "https://picsum.photos/seed/aurika-g2/600/750"
  "gallery-3.jpg" = "https://picsum.photos/seed/aurika-g3/600/750"
  "gallery-4.jpg" = "https://picsum.photos/seed/aurika-g4/600/750"
  "gift-box.jpg" = "https://picsum.photos/seed/aurika-gift/900/650"
  "banner.jpg" = "https://picsum.photos/seed/aurika-banner/1000/700"
  "order-portrait.jpg" = "https://picsum.photos/seed/aurika-order/600/800"
  "newsletter.jpg" = "https://picsum.photos/seed/aurika-news/1400/450"
  "stylist.jpg" = "https://picsum.photos/seed/aurika-stylist/1000/600"
  "product-1.jpg" = "https://picsum.photos/seed/aurika-p1/800/1000"
  "product-1b.jpg" = "https://picsum.photos/seed/aurika-p1b/800/1000"
  "product-2.jpg" = "https://picsum.photos/seed/aurika-p2/800/1000"
  "product-2b.jpg" = "https://picsum.photos/seed/aurika-p2b/800/1000"
  "product-3.jpg" = "https://picsum.photos/seed/aurika-p3/800/1000"
  "product-4.jpg" = "https://picsum.photos/seed/aurika-p4/800/1000"
  "product-5.jpg" = "https://picsum.photos/seed/aurika-p5/800/1000"
  "product-6.jpg" = "https://picsum.photos/seed/aurika-p6/800/1000"
  "product-7.jpg" = "https://picsum.photos/seed/aurika-p7/800/1000"
  "product-8.jpg" = "https://picsum.photos/seed/aurika-p8/800/1000"
  "feature-1.jpg" = "https://picsum.photos/seed/aurika-f1/600/400"
  "feature-2.jpg" = "https://picsum.photos/seed/aurika-f2/600/400"
  "feature-3.jpg" = "https://picsum.photos/seed/aurika-f3/600/400"
  "feature-4.jpg" = "https://picsum.photos/seed/aurika-f4/600/400"
  "packaging-1.jpg" = "https://picsum.photos/seed/aurika-pack1/700/480"
  "packaging-2.jpg" = "https://picsum.photos/seed/aurika-pack2/700/480"
  "trust-1.jpg" = "https://picsum.photos/seed/aurika-trust1/320/240"
  "trust-2.jpg" = "https://picsum.photos/seed/aurika-trust2/320/240"
  "trust-3.jpg" = "https://picsum.photos/seed/aurika-trust3/320/240"
}

foreach ($name in $files.Keys) {
  $out = Join-Path $dir $name
  Write-Host "Fetching $name..."
  curl.exe -sL -A "Mozilla/5.0" -o $out $files[$name]
}

Write-Host "Done."
