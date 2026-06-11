import type { Metadata } from "next";
import "@fontsource-variable/playfair-display/index.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crysflyartist.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crys Adams — Contemporary Painter | CrysFLY Fine Art",
    template: "%s — Crys Adams · CrysFLY",
  },
  description:
    "Crys Adams (CrysFLY) is an Atlanta-based contemporary painter exploring identity, memory, and reflection. View selected works, exhibitions, and acquisition inquiries.",
  keywords: [
    "Crys Adams",
    "CrysFLY",
    "Atlanta painter",
    "contemporary art",
    "fine art",
    "oil painting",
    "mixed media",
    "Black artist",
  ],
  authors: [{ name: "Crys Adams" }],
  creator: "Crys Adams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CrysFLY Fine Art",
    title: "Crys Adams — Contemporary Painter | CrysFLY Fine Art",
    description:
      "An Atlanta-based painter exploring identity, memory, and reflection. Selected works 2016–2024.",
    images: [{ url: "/images/artwork/sacral.jpg", width: 1200, height: 1400, alt: "Sacral by Crys Adams" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crys Adams — Contemporary Painter",
    description: "Atlanta-based painter exploring identity, memory, and reflection.",
    images: ["/images/artwork/sacral.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Crys Adams",
  alternateName: "CrysFLY",
  jobTitle: "Visual Artist",
  description:
    "Atlanta-based contemporary painter exploring self-reflection, identity, growth, and personal responsibility.",
  url: siteUrl,
  sameAs: ["https://www.tumblr.com/crysfly"],
  homeLocation: { "@type": "Place", name: "Atlanta, Georgia, USA" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Georgia State University" },
  knowsAbout: ["Oil painting", "Mixed media", "Ceramics", "Sculpture"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
