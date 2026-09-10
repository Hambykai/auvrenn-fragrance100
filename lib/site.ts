/**
 * Auvrenn house catalog.
 *
 * When a new scent is ready to announce:
 * 1. Add it to `releases` with copy, notes, and photography.
 * 2. Set `status` to "coming-soon" (waitlist) or "live" (ready to sell).
 * 3. Keep using the same bottle so the house stays visually consistent.
 *
 * Reserved placeholders live in `reservedReleases` until they earn a name.
 */

export const site = {
  name: "Auvrenn",
  tagline: "One fragrance worth remembering.",
  description:
    "Terra by Auvrenn — an earthy, grounded debut fragrance from a new independent house. Coming soon.",
  email: "contact@auvrenn.com",
  instagram: "https://instagram.com/auvrenn",
  url: "https://auvrenn.com",
} as const;

export type ReleaseStatus = "live" | "coming-soon" | "reserved";

export type Release = {
  id: string;
  number: string;
  name: string;
  status: ReleaseStatus;
  volume: string;
  family: string;
  summary: string;
  href: string;
  notes: {
    top: { title: string; body: string };
    heart: { title: string; body: string };
    base: { title: string; body: string };
  };
  images: {
    bottle: string;
    portrait: string;
    detail: string;
    campaign: string;
    studio: string;
    alcove: string;
    materials: string;
  };
};

export const releases: Release[] = [
  {
    id: "terra",
    number: "01",
    name: "Terra",
    status: "coming-soon",
    volume: "75 ml",
    family: "Woody · Amber · Citrus",
    summary:
      "An earthy, grounded scent built to leave a quiet impression.",
    href: "/fragrance",
    notes: {
      top: {
        title: "Bergamot & Mandarin",
        body: "A dry luminous opening, cool spice against clean, bright chips of citrus peel.",
      },
      heart: {
        title: "Neroli & Labdanum",
        body: "A radiant floral-resinous heart, blending luminous neroli with an airy diffusion and modern warmth.",
      },
      base: {
        title: "Polished woods & Amber",
        body: "A polished wood, amber resin, skin-resonant trace that stays close.",
      },
    },
    images: {
      bottle: "/images/auvrenn-bottle.webp",
      portrait: "/images/terra-ivory-architecture.webp",
      detail: "/images/terra-close-detail.webp",
      campaign: "/images/terra-brass-shadow.webp",
      studio: "/images/terra-glass-studio.webp",
      alcove: "/images/terra-black-plinth.webp",
      materials: "/images/terra-materials.webp",
    },
  },
];

export const reservedReleases = [
  {
    number: "02",
    name: "Not yet named",
    blurb: "Held until the idea is as clear as Terra.",
  },
  {
    number: "03",
    name: "Not yet named",
    blurb: "A later chapter, kept in shadow until it is ready.",
  },
] as const;

export const lineupImage = "/images/future-lineup.webp";

/** The current flagship. Home, fragrance, and shop all read from here. */
export const debut = releases[0];

export const nav = [
  { href: "/fragrance", label: "Terra", number: "01" },
  { href: "/story", label: "Story", number: "02" },
  { href: "/shop", label: "Shop", number: "03" },
  { href: "/contact", label: "Contact", number: "04" },
] as const;

export function statusLabel(status: ReleaseStatus) {
  if (status === "live") return "Available now";
  if (status === "coming-soon") return "Coming soon";
  return "Reserved";
}
