/** Product & marketing images (user-provided photos in public/images) */

const img = (file: string) => `/images/${file}`;

const user = {
  neutralClawClips: img("user-neutral-claw-clips.jpg"),
  plushHeadbands: img("user-plush-headbands.png"),
  fabricHeadbandSets: img("user-fabric-headband-sets.jpg"),
  floralSilkBows: img("user-floral-silk-bows.png"),
  pinkFloralClips: img("user-pink-floral-clips.png"),
  brownAestheticClips: img("user-brown-aesthetic-clips.jpg"),
  pearlGoldClips: img("user-pearl-gold-clips.png"),
  pastelHeadbandsBag: img("user-pastel-headbands-bag.png"),
  headbandsBasket: img("user-headbands-basket.png"),
  floralPaddedBands: img("user-floral-padded-bands.png"),
} as const;

export const siteImages = {
  hero: {
    main: user.neutralClawClips,
    floatingProduct: user.floralSilkBows,
  },
  categories: {
    velvet: user.floralPaddedBands,
    bows: user.floralSilkBows,
    pearl: user.pearlGoldClips,
    scrunchie: user.plushHeadbands,
  },
  styling: {
    waves: user.headbandsBasket,
    ponytail: user.pastelHeadbandsBag,
    bun: user.fabricHeadbandSets,
  },
  gallery: [
    user.pinkFloralClips,
    user.brownAestheticClips,
    user.pearlGoldClips,
    user.neutralClawClips,
  ],
  collectionBanner: user.fabricHeadbandSets,
  giftBox: user.pastelHeadbandsBag,
  orderPortrait: user.floralSilkBows,
  productGallery: {
    lifestyle: user.headbandsBasket,
    packaging: user.pastelHeadbandsBag,
  },
  atelierFeatures: [
    user.neutralClawClips,
    user.plushHeadbands,
    user.fabricHeadbandSets,
    user.floralSilkBows,
  ],
  newsletter: user.floralPaddedBands,
  stylist: user.pearlGoldClips,
  trust: [user.headbandsBasket, user.pastelHeadbandsBag, user.floralPaddedBands],
  checkoutPackaging: [user.pastelHeadbandsBag, user.floralSilkBows],
  products: {
    neutralClawClips: user.neutralClawClips,
    plushHeadbands: user.plushHeadbands,
    fabricHeadbandSets: user.fabricHeadbandSets,
    floralSilkBows: user.floralSilkBows,
    pinkFloralClips: user.pinkFloralClips,
    brownAestheticClips: user.brownAestheticClips,
    pearlGoldClips: user.pearlGoldClips,
    pastelHeadbandsBag: user.pastelHeadbandsBag,
    headbandsBasket: user.headbandsBasket,
    floralPaddedBands: user.floralPaddedBands,
  },
} as const;
