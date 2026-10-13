"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ivDripCopy, type IvDripLocale } from "@/lib/iv-drip-content";
import { useBranch } from "@/lib/useBranch";

const localeStorageKey = "pmc-iv-drip-locale";
type ContactKind = "line" | "phone" | "whatsapp" | "map";

function ContactIcon({ kind }: { kind: ContactKind }) {
  if (kind === "phone") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.5 5.5a2 2 0 012-2h2.7a1 1 0 01.95.69l1.25 3.75a1 1 0 01-.5 1.22l-1.75.88a12.1 12.1 0 005.95 5.95l.88-1.75a1 1 0 011.22-.5l3.75 1.25a1 1 0 01.69.95v2.7a2 2 0 01-2 2h-1C9.52 21 3.5 14.98 3.5 7.5v-2z" /></svg>;
  if (kind === "map") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5.25-8 10.5-8 10.5S4 15.25 4 10a8 8 0 1116 0z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (kind === "whatsapp") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.3 11.4a8.3 8.3 0 01-12.26 7.27L3.7 20.3l1.63-4.15a8.3 8.3 0 1114.97-4.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.2 7.8c.22-.5.45-.52.75-.5l.6.03c.2 0 .42.06.5.3l.72 1.7c.07.18.04.39-.08.54l-.38.5c-.14.15-.1.33 0 .48.4.7 1 1.35 1.73 1.75.14.08.3.1.43-.02l.55-.5c.16-.13.37-.16.55-.08l1.55.72c.24.1.3.3.27.52-.09.65-.47 1.2-1.03 1.43-.4.17-.9.22-1.45.1-1.03-.23-2.45-1.12-3.58-2.35-1.05-1.14-1.83-2.53-2-3.5-.1-.55-.02-1.07.18-1.48z" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20 11.5a7.5 7.5 0 01-8 7.48 8.4 8.4 0 01-3.28-.69L4 20l1.55-4.17A7.32 7.32 0 014 11.5a8 8 0 0116 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 11h.01M12 11h.01M16 11h.01" strokeWidth="2.5" /></svg>;
}

function IconButton({ href, kind, label, tone }: { href: string; kind: ContactKind; label: string; tone: string }) {
  const external = !href.startsWith("tel:");
  return <a href={href} aria-label={label} title={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`group inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 ${tone}`}><span className="h-6 w-6"><ContactIcon kind={kind} /></span><span className="sr-only">{label}</span></a>;
}

export default function IvDripPage() {
  const branch = useBranch();
  const [locale, setLocale] = useState<IvDripLocale>("th");
  const copy = ivDripCopy[locale];
  const lineUrl = `https://line.me/R/ti/p/${branch.line}`;
  const whatsappUrl = `https://wa.me/${branch.whatsapp}`;
  const mapEmbedUrl = useMemo(() => `https://www.google.com/maps?q=${encodeURIComponent(branch.addressFull)}&output=embed`, [branch.addressFull]);
  const contacts = [
    { kind: "line" as const, href: lineUrl, label: copy.contactIcons.line, tone: "bg-[#06c755] text-white focus-visible:outline-[#06c755]" },
    { kind: "phone" as const, href: branch.phoneHref, label: copy.contactIcons.phone, tone: "bg-blue-800 text-white focus-visible:outline-blue-800" },
    { kind: "whatsapp" as const, href: whatsappUrl, label: copy.contactIcons.whatsapp, tone: "bg-emerald-600 text-white focus-visible:outline-emerald-600" },
  ];

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);
    if (savedLocale !== "th" && savedLocale !== "my" && savedLocale !== "en") return;
    const timer = window.setTimeout(() => setLocale(savedLocale), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const changeLocale = (nextLocale: IvDripLocale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
  };

  return <main lang={locale} className={locale === "my" ? "font-[var(--font-myanmar)]" : locale === "th" ? "font-[var(--font-thai)]" : "font-sans"}>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="PMC Koh Sirey home" className="shrink-0"><Image src="/phuket-medical-clinic-1-1024x228.webp" alt="Phuket Medical Clinic Koh Sirey" width={220} height={50} className="h-9 w-auto sm:h-10" priority /></Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-600 lg:flex" aria-label="IV Drip page navigation"><a href="#information" className="hover:text-blue-800">{copy.nav.overview}</a><a href="#questions" className="hover:text-blue-800">{copy.nav.questions}</a><a href="#visit" className="hover:text-blue-800">{copy.nav.visit}</a><a href="#location" className="hover:text-blue-800">{copy.nav.location}</a></nav>
        <div className="flex items-center gap-2"><div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1" aria-label={copy.languageLabel}>{(["th", "my", "en"] as const).map((item) => <button key={item} type="button" aria-pressed={locale === item} onClick={() => changeLocale(item)} className={`min-h-9 rounded-lg px-2.5 text-xs font-extrabold transition sm:px-3 ${locale === item ? "bg-white text-blue-800 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>{item === "th" ? "ไทย" : item === "my" ? "မြန်မာ" : "EN"}</button>)}</div><div className="hidden sm:block"><IconButton kind="line" href={lineUrl} label={copy.contactIcons.line} tone="bg-[#06c755] text-white focus-visible:outline-[#06c755]" /></div></div>
      </div>
    </header>

    <section className="bg-[#f3f8fc] pb-12 pt-28 sm:pb-20 sm:pt-34">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-stretch lg:px-8">
        <div className="flex flex-col justify-center py-7 lg:py-14"><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.hero.eyebrow}</p><h1 className="mt-5 max-w-xl text-4xl font-black leading-[1.12] text-slate-950 sm:text-5xl lg:text-6xl">{copy.hero.title}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">{copy.hero.body}</p><div className="mt-8 flex flex-wrap items-center gap-3"><span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-900">{copy.hero.openingHours}</span><span className="text-sm font-semibold text-slate-500">{copy.hero.location}</span></div><div className="mt-9 flex flex-wrap gap-3">{contacts.map((item) => <IconButton key={item.kind} {...item} />)}</div></div>
        <div className="relative min-h-[26rem] overflow-hidden rounded-[2.25rem] bg-slate-200 shadow-[0_24px_70px_rgba(15,23,42,.16)] sm:min-h-[34rem]"><Image src="/Patients-bg.jpg" alt="PMC consultation at the clinic" fill priority sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-2xl bg-slate-950/78 p-5 text-white backdrop-blur"><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan-200">PMC Koh Sirey</p><p className="mt-2 text-lg font-extrabold">{copy.disclaimer}</p></div></div>
      </div>
    </section>

    <section id="information" className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.overview.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{copy.overview.title}</h2><p className="mt-6 text-lg leading-relaxed text-slate-600">{copy.overview.body}</p><p className="mt-6 border-l-4 border-blue-700 pl-5 leading-relaxed text-slate-700">{copy.overview.note}</p></div></div></section>

    <section id="questions" className="bg-slate-50 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.questions.eyebrow}</p><h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">{copy.questions.title}</h2></div><div className="mt-10 grid gap-4 md:grid-cols-3">{copy.questions.items.map((item, index) => <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7"><span className="text-sm font-black text-blue-700">0{index + 1}</span><h3 className="mt-6 text-xl font-extrabold leading-snug text-slate-950">{item.title}</h3><p className="mt-4 leading-relaxed text-slate-600">{item.body}</p></article>)}</div></div></section>

    <section id="visit" className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8"><div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-slate-100"><Image src="/about/PMC-455.jpg" alt="PMC Koh Sirey care area" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" /></div><div><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.visit.eyebrow}</p><h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">{copy.visit.title}</h2><div className="mt-9 space-y-5">{copy.visit.items.map((item) => <article key={item.number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-slate-200 pt-5 first:border-t-0 first:pt-0"><span className="text-2xl font-black text-blue-700">{item.number}</span><div><h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3><p className="mt-2 leading-relaxed text-slate-600">{item.body}</p></div></article>)}</div></div></div></section>

    <section className="bg-blue-950 py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold tracking-[.16em] text-cyan-200">{copy.safety.eyebrow}</p><h2 className="mt-4 text-3xl font-black sm:text-5xl">{copy.safety.title}</h2><p className="mt-5 text-lg leading-relaxed text-blue-100">{copy.safety.body}</p></div><ul className="mt-10 grid gap-4 md:grid-cols-3">{copy.safety.items.map((item) => <li key={item} className="rounded-2xl border border-white/20 bg-white/10 p-6 leading-relaxed text-blue-50"><span className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-200 font-black text-blue-950">✓</span>{item}</li>)}</ul></div></section>

    <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.faq.eyebrow}</p><h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">{copy.faq.title}</h2><div className="mt-9 divide-y divide-slate-200 border-y border-slate-200">{copy.faq.items.map((item) => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-extrabold text-slate-950"><span>{item.question}</span><span className="text-2xl font-normal text-blue-700 transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 leading-relaxed text-slate-600">{item.answer}</p></details>)}</div></div></section>

    <section id="location" className="bg-slate-100 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10"><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.location.eyebrow}</p><h2 className="mt-4 text-3xl font-black text-slate-950">{copy.location.title}</h2><div className="mt-9 grid gap-7"><div><p className="text-sm font-bold text-slate-500">{copy.location.hoursTitle}</p><p className="mt-2 text-2xl font-black text-blue-800">09:00–20:00</p></div><div><p className="text-sm font-bold text-slate-500">{copy.location.addressTitle}</p>{branch.address.map((line) => <p key={line} className="mt-1 text-slate-700">{line}</p>)}</div><div className="flex flex-wrap gap-3"><IconButton kind="map" href={branch.mapUrl} label={copy.contactIcons.map} tone="bg-white text-blue-800 ring-1 ring-blue-200 focus-visible:outline-blue-800" />{contacts.map((item) => <IconButton key={item.kind} {...item} />)}</div></div></div><div className="min-h-[30rem] overflow-hidden rounded-[2rem] bg-white shadow-sm"><iframe title="PMC Koh Sirey location map" src={mapEmbedUrl} loading="lazy" className="h-full min-h-[30rem] w-full border-0" referrerPolicy="no-referrer-when-downgrade" /></div></div></div></section>

    <section id="contact" className="bg-white py-20 sm:py-24"><div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8"><div><p className="text-sm font-extrabold tracking-[.16em] text-blue-700">{copy.contact.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-950">{copy.contact.title}</h2><p className="mt-3 max-w-xl leading-relaxed text-slate-600">{copy.contact.body}</p></div><div className="flex gap-3">{contacts.map((item) => <IconButton key={item.kind} {...item} />)}</div></div></section>

    <footer className="bg-slate-950 px-4 py-9 text-center text-sm text-slate-400 sm:px-6"><p>© 2026 {branch.name}. {copy.footer.rights}.</p><div className="mt-4 flex justify-center gap-4"><Link href="/" className="hover:text-white">{copy.footer.home}</Link><a href="/privacy-policy" className="hover:text-white">{copy.footer.privacy}</a><a href="/terms" className="hover:text-white">{copy.footer.terms}</a></div></footer>
  </main>;
}
