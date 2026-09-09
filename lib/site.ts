export const site = {
  name: "Auvrenn",
  fragrance: "Terra",
  tagline: "One fragrance worth remembering.",
  description:
    "Terra by Auvrenn — an earthy, grounded debut fragrance from a new independent house. Coming soon.",
  email: "hello@auvrenn.com",
  instagram: "https://instagram.com/auvrenn",
  volume: "75 ml",
} as const;

export const nav = [
  { href: "/", label: "Home", number: "01" },
  { href: "/fragrance", label: "The Fragrance", number: "02" },
  { href: "/story", label: "Our Story", number: "03" },
  { href: "/shop", label: "Shop", number: "04" },
  { href: "/faq", label: "FAQ", number: "05" },
  { href: "/contact", label: "Contact", number: "06" },
] as const;

export const images = {
  bottle: "/images/auvrenn-bottle.webp",
  campaign: "/images/campaign-shadow.webp",
  future: "/images/future-lineup.webp",
  studio: "/images/modern-studio.webp",
  plinth: "/images/product-plinth.webp",
  materials: "/images/terra-materials.webp",
} as const;
