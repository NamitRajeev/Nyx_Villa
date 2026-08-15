export const siteConfig = {
  name: "NYX Pool Villa",
  description:
    "NYX Pool Villa is a premium indoor private pool villa where deep water, warm light, and private stays meet.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
  bookingHref: process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "#availability",
  navigation: [
    { label: "The Villa", href: "#villa" },
    { label: "Gallery", href: "#gallery" },
    { label: "Details", href: "#amenities" },
  ],
} as const;

export const galleryImages = [
  {
    src: "/images/nyx-bedroom-teal-day.jpeg",
    alt: "A teal-accented bedroom with a blue-lit headboard at NYX Pool Villa",
    
  },
  {
    src: "/images/nyx-bedroom-ember-wide.jpeg",
    alt: "A warm bedroom with walnut fluting and marble detail at NYX Pool Villa",
    label: "Gilded ember",
  },
  {
    src: "/images/nyx-bathroom-marble.jpeg",
    alt: "A green-grey marble bathroom with an illuminated oval mirror at NYX Pool Villa",
    label: "Sculpted stone",
  },
  {
    src: "/images/nyx-bedroom-nocturne.jpeg",
    alt: "A softly lit bedroom with dark bedding and marble detail at NYX Pool Villa",
    label: "Nocturne",
  },
  {
    src: "/images/nyx-bedroom-umber.jpeg",
    alt: "A warm neutral bedroom illuminated by ambient bedside lighting at NYX Pool Villa",
    label: "Quiet warmth",
  },
  {
    src: "/images/nyx-bathroom-ivory.jpeg",
    alt: "A warm ivory marble bathroom with an illuminated mirror and glass shower",
    label: "Soft reflection",
  },
  {
    src: "/images/nyx-bedroom-ember-detail.jpeg",
    alt: "A rust-toned bed beside timber fluting and marbled wall detail at NYX Pool Villa",
    label: "Amber hour",
  },
  {
    src: "/images/nyx-bedroom-teal-night.jpeg",
    alt: "A bedroom at night illuminated by deep blue ambient light at NYX Pool Villa",
    label: "Blue hour",
  },
] as const;

export const amenities = [
  {
    icon: "Waves",
    title: "Indoor pool",
    description: "The signature NYX experience, reserved for a private stay.",
  },
  {
    icon: "BedDouble",
    title: "Restful rooms",
    description: "Bedrooms shaped by deep tones, layered light, and warmth.",
  },
  {
    icon: "Bath",
    title: "Marble bathing",
    description: "Stone, glass, and illuminated mirrors create a composed retreat.",
  },
  {
    icon: "LampWallUp",
    title: "Ambient light",
    description: "A nocturnal lighting language carries through the villa.",
  },
] as const;
