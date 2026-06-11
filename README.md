# CrysFLY Fine Art — crysflyartist.com

A museum-grade portfolio site for **Crys Adams (CrysFLY)**, Atlanta-based contemporary painter.
Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

---

## Quick start

```bash
# 1. From inside documents/websites/crysflyartist
npm install

# 2. Create your env file
cp .env.example .env.local

# 3. Run locally
npm run dev          # http://localhost:3000
```

> **Note:** the first `npm run dev` / `npm run build` downloads the Playfair Display,
> Cormorant Garamond, and Inter fonts via `next/font`. An internet connection is required
> for that first run; afterwards they are cached.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint |

---

## Project structure

```
crysflyartist/
├── app/
│   ├── layout.tsx              # Fonts, sitewide <head> metadata, Person schema, header/footer
│   ├── page.tsx                # Home
│   ├── globals.css             # Design tokens + base styles + component utilities
│   ├── gallery/
│   │   ├── page.tsx            # Browsable wall (filters by collection + medium)
│   │   └── [slug]/page.tsx     # Artwork detail "viewing room" (static-generated per work)
│   ├── collections/page.tsx    # Bodies of work
│   ├── about/page.tsx          # Biography, statement, exhibitions (#exhibitions)
│   ├── contact/page.tsx        # Inquiry page
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts / robots.ts  # SEO
├── components/                 # Header, Footer, ArtworkCard, CollectionCard, GalleryFilter,
│                               #   InquiryForm, Reveal (Framer Motion), SectionTitle
├── data/                       # artworks.ts · collections.ts · exhibitions.ts  ← edit content here
├── lib/                        # types.ts · image-dims.ts (auto-generated aspect ratios)
└── public/images/
    ├── artist/                 # portrait-hero / portrait-about / portrait-studio
    └── artwork/                # one .jpg per work (+ detail crops)
```

---

## Editing content

**All artwork lives in `data/artworks.ts`.** Each entry is fully typed (see `lib/types.ts`).
To add a new work:

1. Drop the image into `public/images/artwork/your-slug.jpg`.
2. Add its width/height to `lib/image-dims.ts` (or regenerate — see below).
3. Add an `Artwork` object to the `artworks` array.

It will appear automatically in the Gallery, its collection, related works, the sitemap,
and at its own page `/gallery/your-slug`.

Collections are in `data/collections.ts`; exhibitions in `data/exhibitions.ts`.

### Regenerating image dimensions
`lib/image-dims.ts` is generated from the files in `public/images`. If you change images and
have Python + Pillow available, you can re-run the measurement step (script provided in the
build notes) — or simply add the `{ width, height }` entry by hand.

---

## Design system

- **Type:** Playfair Display (display) · Cormorant Garamond (literary) · Inter (UI/metadata)
- **Palette** (in `tailwind.config.ts` + `globals.css`):
  charcoal `#141312` · ivory `#F7F1E8` · sand `#D8C3A5` · sienna `#A0522D` ·
  burgundy `#5A1F2E` · gold `#C6A15B`
- **Motion:** subtle fade-and-rise via the `<Reveal>` component; honors `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, descriptive alt text, visible focus rings, keyboard-navigable.

---

## Wiring the inquiry form

`components/inquiry-form.tsx` posts to `NEXT_PUBLIC_INQUIRY_ENDPOINT`. With no endpoint set it
simulates success (good for previewing). To make it live, set the variable in `.env.local`:

```env
# Easiest: Formspree (no backend needed)
NEXT_PUBLIC_INQUIRY_ENDPOINT=https://formspree.io/f/your-form-id
```

Other options: a Next.js Route Handler with **Resend**, or **Firebase/Supabase**. The form
already sends `name`, `email`, `role`, `purpose`, `message`, and `regarding` (the work title).

---

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add env vars `NEXT_PUBLIC_SITE_URL=https://crysflyartist.com` and your inquiry endpoint.
4. Add the domain **crysflyartist.com** in Vercel → Project → Domains, and point your DNS.

---

## Roadmap (not yet built)

These routes are scaffolded in the data layer and easy to add next:
**Commissions** page · **Press / Media** kit · per-collection pages (`/collections/[slug]`) ·
a CMS layer (Sanity) so Crys can add work without code.

© 2026 Crys Adams. All rights reserved.
