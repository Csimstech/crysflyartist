import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { artworks, getArtwork, getRelated, adjacent } from "@/data/artworks";
import { collections } from "@/data/collections";
import { dims } from "@/lib/image-dims";
import { Reveal } from "@/components/reveal";
import { ArtworkCard } from "@/components/artwork-card";
import { InquiryForm } from "@/components/inquiry-form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crysflyartist.com";

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) return {};
  const title = `${art.title}, ${art.year}`;
  const description = `${art.medium} · ${art.dimensions}. ${art.note}`;
  return {
    title,
    description,
    alternates: { canonical: `/gallery/${art.slug}` },
    openGraph: {
      type: "article",
      title: `${art.title}, ${art.year} — Crys Adams`,
      description: `${art.medium} · ${art.dimensions} · ${art.edition}`,
      images: [{ url: art.image, alt: `${art.title} by Crys Adams` }],
    },
  };
}

const statusLabel = { available: "Available", reserved: "Reserved", sold: "Sold" } as const;

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) notFound();

  const collection = collections.find((c) => c.id === art.collection)!;
  const related = getRelated(slug, 3);
  const { prev, next } = adjacent(slug);
  const main = dims(art.image);

  const schema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: art.title,
    creator: { "@type": "Person", name: "Crys Adams", alternateName: "CrysFLY" },
    artform: "Painting",
    artMedium: art.medium,
    dateCreated: String(art.year),
    image: `${siteUrl}${art.image}`,
    width: { "@type": "QuantitativeValue", value: art.dimensions },
    offers: {
      "@type": "Offer",
      availability:
        art.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      seller: { "@type": "Person", name: "Crys Adams" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* BREADCRUMB */}
      <section className="pt-[calc(1.05rem+1.18rem+2rem)]">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 pt-8">
          <nav className="flex flex-wrap items-center gap-2.5 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-60)]" aria-label="Breadcrumb">
            <Link href="/gallery" className="transition-colors hover:text-gold-deep">Work</Link>
            <span className="text-[var(--ink-42)]">/</span>
            <Link href={`/gallery?collection=${collection.id}`} className="transition-colors hover:text-gold-deep">{collection.title}</Link>
            <span className="text-[var(--ink-42)]">/</span>
            <span className="text-char">{art.title}</span>
          </nav>
          <div className="hidden gap-6 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-60)] sm:flex">
            <Link href={`/gallery/${prev.slug}`} className="transition-colors hover:text-gold-deep">← {prev.title}</Link>
            <Link href={`/gallery/${next.slug}`} className="transition-colors hover:text-gold-deep">{next.title} →</Link>
          </div>
        </div>
      </section>

      {/* VIEWING ROOM */}
      <section className="py-[2.4rem] pb-[clamp(4rem,7vw,6.5rem)]">
        <div className="container-site grid grid-cols-1 items-start gap-[clamp(2rem,4vw,4.5rem)] lg:grid-cols-[1.55fr_1fr]">
          <Reveal className="relative flex min-h-[40vh] items-center justify-center overflow-hidden p-[clamp(2rem,5vw,4.5rem)]"
            >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(170deg,#211f1d,#121110 70%)" }}
            />
            <span
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(70% 55% at 50% 30%, rgba(198,161,91,.10), transparent 70%)" }}
            />
            <div className="relative w-full max-w-[560px]">
              <Image
                src={art.image}
                width={main.width}
                height={main.height}
                alt={`${art.title}, ${art.year} — ${art.medium}.`}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="w-full shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7),0_8px_24px_-8px_rgba(0,0,0,0.5)]"
              />
            </div>
            <span className="absolute bottom-[clamp(1.4rem,4vw,2.8rem)] left-[clamp(1.4rem,4vw,2.8rem)] font-sans text-[0.6rem] uppercase tracking-[0.24em] text-ivory-45">
              Crys Adams · CrysFLY
            </span>
          </Reveal>

          {/* RAIL */}
          <Reveal delay={0.1} className="lg:sticky lg:top-[calc(1.05rem+1.18rem+2.4rem)]">
            <span className="font-serif text-[0.95rem] font-medium italic tracking-[0.03em] text-gold-deep">
              {collection.title} — No. {String(artworks.indexOf(art) + 1).padStart(2, "0")}
            </span>
            <h1
              className="mb-2 mt-3 font-serif font-bold leading-[0.98] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem,5.2vw,4.2rem)" }}
            >
              {art.title}
            </h1>
            <p className="mb-8 font-cormorant text-[1.35rem] italic text-[var(--ink-60)]">
              by <b className="not-italic font-medium text-char">Crys Adams</b>{" "}
              <span className="opacity-60">(CrysFLY)</span>
            </p>

            <dl className="mb-7 border-t border-[var(--line)]">
              <SpecRow label="Year" value={String(art.year)} />
              <SpecRow label="Medium" value={art.medium} />
              <SpecRow
                label="Dimensions"
                value={
                  <>
                    {art.dimensions}
                    {art.dimensionsCm && (
                      <span className="block text-[0.95rem] text-[var(--ink-60)]">{art.dimensionsCm}</span>
                    )}
                  </>
                }
              />
              <SpecRow label="Collection" value={art.collection === collection.id ? collection.title : ""} />
              <SpecRow label="Edition" value={art.edition} />
            </dl>

            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-char">
                <span className="h-2 w-2 rounded-full bg-gold-deep shadow-[0_0_0_3px_rgba(169,132,47,0.2)]" />
                {statusLabel[art.status]}
              </span>
              <span className="font-cormorant text-[1.3rem] italic text-[var(--ink-60)]">{art.price}</span>
            </div>

            <div className="mb-7 flex flex-col gap-3">
              <Link href="#inquire" className="btn btn-gold w-full">
                Inquire About This Work <span className="arr">→</span>
              </Link>
              <Link href="#inquire" className="btn btn-ghost w-full">
                Request a Private Viewing
              </Link>
            </div>

            <ul className="space-y-1 font-sans text-[0.72rem] leading-loose tracking-[0.04em] text-[var(--ink-60)]">
              {[
                "Signed Certificate of Authenticity included",
                "Ships insured worldwide from the artist's Atlanta studio",
                "Complimentary advisory consultation with each acquisition",
              ].map((t) => (
                <li key={t} className="relative pl-6 before:absolute before:left-0 before:top-[0.7em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-gold-deep">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ABOUT THE WORK */}
      <section className="bg-ivory-2 py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site max-w-[1140px]">
          <Reveal>
            <span className="eyebrow mb-9 block text-center">About the Work</span>
            <div
              className="mx-auto max-w-[62ch] font-cormorant leading-relaxed [&>p:first-child::first-letter]:float-left [&>p:first-child::first-letter]:pr-[0.12em] [&>p:first-child::first-letter]:font-serif [&>p:first-child::first-letter]:text-[3.6em] [&>p:first-child::first-letter]:font-bold [&>p:first-child::first-letter]:leading-[0.78] [&>p:first-child::first-letter]:text-burgundy"
              style={{ fontSize: "clamp(1.2rem,1.8vw,1.45rem)" }}
            >
              <p className="mb-6">{art.note}</p>
              <p className="mb-6">
                Rooted in the artist&rsquo;s practice of self-reflection, the work asks not so much to
                be looked at as to be looked into — completed, in part, by the gaze of the viewer who
                stands before it.
              </p>
            </div>
          </Reveal>

          {art.details && art.details.length > 0 && (
            <Reveal delay={0.1} className="mt-[clamp(3rem,5vw,4.5rem)] grid grid-cols-1 gap-[clamp(1.2rem,3vw,2.4rem)] md:grid-cols-2">
              {art.details.map((d) => {
                const dd = dims(d.src);
                return (
                  <figure key={d.src} className="m-0">
                    <Image
                      src={d.src}
                      width={dd.width}
                      height={dd.height}
                      alt={`${art.title} — ${d.caption}`}
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="h-auto w-full bg-char-soft"
                    />
                    <figcaption className="mt-3.5 font-sans text-[0.66rem] uppercase tracking-[0.18em] text-[var(--ink-60)]">
                      {d.caption}
                    </figcaption>
                  </figure>
                );
              })}
            </Reveal>
          )}
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site max-w-[1000px]">
          <Reveal>
            <span className="eyebrow">Details</span>
            <h2 className="mb-10 mt-4 font-serif font-bold tracking-[-0.01em]" style={{ fontSize: "clamp(1.9rem,3.6vw,2.7rem)" }}>
              Specifications &amp; Provenance
            </h2>
            <dl className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] md:grid-cols-2">
              <ProvRow label="Title" value={art.title} />
              <ProvRow label="Artist" value="Crys Adams (CrysFLY)" />
              <ProvRow label="Year" value={String(art.year)} />
              <ProvRow label="Medium" value={art.medium} />
              {art.support && <ProvRow label="Support" value={art.support} />}
              <ProvRow label="Dimensions" value={art.dimensions} />
              <ProvRow label="Collection" value={collection.title} />
              <ProvRow label="Edition" value={art.edition} />
              <ProvRow label="Signature" value="Signed and dated" />
              <ProvRow label="Authenticity" value="Certificate included" />
              <ProvRow label="Origin" value="Atlanta, Georgia" />
              <ProvRow label="Availability" value={statusLabel[art.status]} />
            </dl>
          </Reveal>
        </div>
      </section>

      {/* INQUIRE */}
      <section id="inquire" className="bg-char py-[clamp(5rem,9vw,8rem)] text-ivory">
        <div className="container-site grid grid-cols-1 items-start gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--ivory-70)" }}>
              Inquire <span className="dot" style={{ color: "var(--gold)" }}>·</span> Acquisition
            </span>
            <h2 className="my-6 font-serif font-bold leading-none tracking-[-0.02em] text-ivory" style={{ fontSize: "clamp(2.2rem,4.6vw,3.5rem)" }}>
              Inquire about {art.title}
            </h2>
            <p className="mb-10 max-w-[40ch] font-cormorant font-light leading-snug text-ivory-70" style={{ fontSize: "clamp(1.15rem,1.8vw,1.4rem)" }}>
              Share a little about your interest and the studio will respond personally — typically
              within two business days.
            </p>
            <div className="flex items-center gap-5 border border-ivory-22 bg-ivory/[0.03] p-5">
              <Image src={art.image} width={78} height={Math.round((78 * main.height) / main.width)} alt={art.title} className="w-[78px] flex-shrink-0" />
              <div>
                <div className="font-serif text-[1.4rem] italic text-ivory">{art.title}, {art.year}</div>
                <div className="mt-2 font-sans text-[0.66rem] uppercase leading-loose tracking-[0.16em] text-ivory-45">
                  {art.medium} · {art.dimensions}
                  <br />
                  {art.edition.split(" — ")[0]} · {art.price}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InquiryForm artworkTitle={art.title} artworkYear={art.year} variant="dark" />
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-[clamp(5rem,9vw,8rem)]">
        <div className="container-site">
          <Reveal className="mb-[clamp(2.5rem,4vw,3.5rem)] flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="eyebrow">Continue Looking</span>
              <h2 className="mt-4 font-serif font-bold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                More Works
              </h2>
            </div>
            <Link href="/gallery" className="tlink">View All Works <span>→</span></Link>
          </Reveal>
          <div className="grid grid-cols-1 gap-[clamp(1.4rem,3vw,2.6rem)] sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.08}>
                <ArtworkCard artwork={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-6 border-b border-[var(--line)] py-3.5">
      <dt className="flex-shrink-0 font-sans text-[0.66rem] uppercase tracking-[0.2em] text-[var(--ink-60)]">{label}</dt>
      <dd className="text-right font-cormorant text-[1.18rem] leading-snug text-char">{value}</dd>
    </div>
  );
}

function ProvRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 border-b border-[var(--line)] py-4">
      <dt className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ink-60)]">{label}</dt>
      <dd className="text-right font-cormorant text-[1.16rem] text-char">{value}</dd>
    </div>
  );
}
