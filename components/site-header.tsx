"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/gallery" },
  { label: "Collections", href: "/collections" },
  { label: "Commissions", href: "/commissions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/gallery"
      ? pathname.startsWith("/gallery")
      : pathname === href.split("#")[0];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] border-b transition-all duration-500 ${
          scrolled
            ? "border-[var(--line)] bg-ivory/[0.86] backdrop-blur-[14px]"
            : "border-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between py-[1.05rem]">
          <Link href="/" className="flex flex-col leading-none" aria-label="Crys Adams — home">
            <b className="font-serif text-[1.18rem] font-bold uppercase tracking-[0.22em]">
              Crys&nbsp;Adams
            </b>
            <span className="mt-[0.45em] font-sans text-[0.56rem] uppercase tracking-[0.42em] text-[var(--ink-60)]">
              CrysFLY · Fine Art
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`group relative font-sans text-[0.76rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                  isActive(l.href) ? "text-gold-deep" : "text-char hover:text-gold-deep"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-[7px] left-0 h-px bg-gold-deep transition-all duration-500 ease-editorial ${
                    isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 border border-char px-[1.55em] py-[0.85em] font-sans text-[0.72rem] uppercase tracking-[0.16em] transition-all duration-500 ease-editorial hover:bg-char hover:text-ivory"
            >
              Inquire
            </Link>
          </nav>

          <button
            className="z-[1100] flex w-[30px] flex-col gap-[6px] py-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-full bg-char transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-char transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-full bg-char transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[1050] flex flex-col justify-center bg-ivory px-[var(--pad)] transition-transform duration-[600ms] ease-editorial md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serif font-medium leading-[1.45] text-char transition-colors hover:italic hover:text-gold-deep"
            style={{ fontSize: "clamp(2rem,9vw,3.2rem)" }}
          >
            {l.label}
          </Link>
        ))}
        <div className="mt-12 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ink-60)]">
          Atlanta, Georgia · Find Light Yourself
        </div>
      </div>
    </>
  );
}
