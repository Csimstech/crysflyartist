import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory/10 bg-char pb-10 pt-[clamp(4rem,7vw,6rem)] text-ivory">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 border-b border-ivory/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="md:col-span-1">
            <b className="block font-serif text-2xl font-bold uppercase tracking-[0.2em]">
              Crys&nbsp;Adams
            </b>
            <span className="mt-3 block font-sans text-[0.6rem] uppercase tracking-[0.4em] text-ivory-45">
              CrysFLY · Fine Art
            </span>
            <p className="mt-7 max-w-[24ch] font-cormorant text-[1.3rem] italic text-ivory-70">
              Contemporary painter exploring identity, memory, and reflection.
            </p>
          </div>
          <FooterCol
            title="Explore"
            links={[
              { label: "Work", href: "/gallery" },
              { label: "Collections", href: "/collections" },
              { label: "About", href: "/about" },
              { label: "Exhibitions", href: "/about#exhibitions" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              { label: "Inquire", href: "/contact" },
              { label: "Tumblr", href: "https://www.tumblr.com/crysfly", external: true },
              { label: "Email", href: "mailto:studio@crysflyartist.com" },
            ]}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-9">
          <p className="font-sans text-[0.68rem] tracking-[0.1em] text-ivory-45">
            © {new Date().getFullYear()} Crys Adams. All rights reserved. · Atlanta, Georgia
          </p>
          <p className="font-serif text-base italic tracking-[0.02em] text-gold">
            Find Light Yourself.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="mb-5 font-sans text-[0.66rem] uppercase tracking-[0.26em] text-ivory-45">
        {title}
      </h4>
      {links.map((l) =>
        l.external ? (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-1.5 font-sans text-[0.86rem] tracking-[0.06em] text-ivory-70 transition-all duration-300 hover:pl-1.5 hover:text-gold"
          >
            {l.label}
          </a>
        ) : (
          <Link
            key={l.label}
            href={l.href}
            className="block py-1.5 font-sans text-[0.86rem] tracking-[0.06em] text-ivory-70 transition-all duration-300 hover:pl-1.5 hover:text-gold"
          >
            {l.label}
          </Link>
        ),
      )}
    </div>
  );
}
