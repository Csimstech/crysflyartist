"use client";

import { useState } from "react";

interface InquiryFormProps {
  /** Pre-fills the message + locks the subject to a specific work. */
  artworkTitle?: string;
  artworkYear?: number;
  /** "dark" suits the charcoal panels on artwork pages; "light" suits the contact page. */
  variant?: "dark" | "light";
}

const roles = [
  "Private collector",
  "Gallery or dealer",
  "Museum or institution",
  "Interior designer / advisor",
  "Press / media",
];

const purposesArtwork = [
  "Purchase this work",
  "Commission a related work",
  "Request a private viewing",
  "General question",
];

const purposesGeneral = [
  "Purchase an artwork",
  "Commission a custom work",
  "Exhibition or representation",
  "Press / media",
  "General inquiry",
];

export function InquiryForm({ artworkTitle, artworkYear, variant = "dark" }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const dark = variant === "dark";

  const labelCls = `block font-sans text-[0.64rem] uppercase tracking-[0.2em] mb-2.5 ${
    dark ? "text-ivory-45" : "text-[var(--ink-42)]"
  }`;
  const fieldCls = `w-full bg-transparent border-b font-cormorant text-[1.2rem] py-2 outline-none transition-colors duration-300 ${
    dark
      ? "border-ivory-22 text-ivory placeholder:text-ivory-45 focus:border-gold"
      : "border-[var(--line)] text-char placeholder:text-[var(--ink-42)] focus:border-gold-deep"
  }`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, regarding: artworkTitle ?? "General inquiry" }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No endpoint configured yet — simulate success so the UI is testable.
        await new Promise((r) => setTimeout(r, 700));
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={`border p-10 text-center ${
          dark ? "border-ivory-22 text-ivory" : "border-[var(--line)] text-char"
        }`}
      >
        <p className="font-serif text-2xl italic">Thank you.</p>
        <p className={`mt-3 font-cormorant text-lg ${dark ? "text-ivory-70" : "text-[var(--ink-60)]"}`}>
          Your inquiry has been received. The studio will respond personally, typically within two
          business days.
        </p>
      </div>
    );
  }

  const purposes = artworkTitle ? purposesArtwork : purposesGeneral;

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelCls}>Full name</label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={fieldCls} />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>Email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" className={fieldCls} />
      </div>
      <div>
        <label htmlFor="role" className={labelCls}>I am a</label>
        <select id="role" name="role" className={`${fieldCls} cursor-pointer`}>
          {roles.map((r) => (
            <option key={r} className="bg-char text-ivory">{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="purpose" className={labelCls}>Inquiry type</label>
        <select id="purpose" name="purpose" className={`${fieldCls} cursor-pointer`}>
          {purposes.map((p) => (
            <option key={p} className="bg-char text-ivory">{p}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={`${fieldCls} min-h-[90px] resize-y leading-relaxed`}
          defaultValue={
            artworkTitle
              ? `I'm interested in ${artworkTitle}${artworkYear ? ` (${artworkYear})` : ""} and would like to know more about availability and acquisition…`
              : ""
          }
          placeholder={artworkTitle ? "" : "Tell us a little about your interest…"}
        />
      </div>
      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-gold disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Inquiry"} <span className="arr">→</span>
        </button>
        <p className={`max-w-[34ch] font-sans text-[0.66rem] leading-relaxed ${dark ? "text-ivory-45" : "text-[var(--ink-42)]"}`}>
          {status === "error"
            ? "Something went wrong — please email crysflyartist@gmail.com directly."
            : "By sending, you agree to be contacted by the studio regarding this inquiry. Your details are never shared."}
        </p>
      </div>
    </form>
  );
}
