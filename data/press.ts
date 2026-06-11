export interface PressItem {
  outlet: string;
  title: string;
  date?: string;
  url?: string;
}

// Add real features here as they appear. Until then, the Press page shows a
// graceful "features will appear here" state — nothing is fabricated.
export const press: PressItem[] = [];

export const pressKit = {
  shortBio:
    "Crys Adams (CrysFLY) is an Atlanta-based contemporary painter whose work explores self-reflection as a process of understanding identity, growth, and personal responsibility. A 2016 graduate of Georgia State University (B.A., Studio Arts), she works across oil, mixed media, ceramics, and sculpture, and has exhibited throughout Atlanta.",
  extendedBio:
    "Working primarily in painting, Adams creates visually engaging work that encourages viewers to look inward and engage with themselves beyond surface-level perception. Her practice has evolved from incorporating literal mirrors to using abstract representations of water as a symbolic form of reflection. Rooted in her artist name — CrysFLY, Find Light Yourself — her work is grounded in the belief that healing and growth require ownership, inviting viewers to confront, understand, and evolve through their own experiences.",
  facts: [
    { label: "Name", value: "Crys Adams" },
    { label: "Artist name", value: "CrysFLY" },
    { label: "Tagline", value: "Find Light Yourself" },
    { label: "Based in", value: "Atlanta, Georgia" },
    { label: "Education", value: "B.A. Studio Arts, Georgia State University, 2016" },
    { label: "Mediums", value: "Oil, mixed media, ceramics, sculpture" },
    { label: "Themes", value: "Self-reflection, identity, growth, responsibility" },
    { label: "Contact", value: "crysflyartist@gmail.com" },
  ],
  images: [
    { src: "/images/artist/portrait-hero.jpg", label: "Artist portrait — primary" },
    { src: "/images/artist/portrait-studio.jpg", label: "Artist in studio" },
    { src: "/images/artwork/sacral.jpg", label: "Sacral, 2023" },
    { src: "/images/artwork/blue-42.jpg", label: "Blue 42, 2023" },
    { src: "/images/artwork/dahomey.jpg", label: "DaHomey, 2021" },
    { src: "/images/artwork/nine.jpg", label: "Nine, 2017" },
  ],
};
