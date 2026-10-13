"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ivDripCopy, type IvDripLocale } from "@/lib/iv-drip-content";
import { useBranch } from "@/lib/useBranch";

const localeStorageKey = "pmc-iv-drip-locale";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function IvDripPage() {
  const branch = useBranch();
  const [locale, setLocale] = useState<IvDripLocale>("th");
  const copy = ivDripCopy[locale];
  const lineUrl = `https://line.me/R/ti/p/${branch.line}`;
  const whatsappUrl = `https://wa.me/${branch.whatsapp}`;
  const mapEmbedUrl = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(branch.addressFull)}&output=embed`,
    [branch.addressFull],
  );

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey);
    if (savedLocale !== "th" && savedLocale !== "my" && savedLocale !== "en") return;
    const restoreLocale = window.setTimeout(() => setLocale(savedLocale), 0);
    return () => window.clearTimeout(restoreLocale);
  }, []);

  const changeLocale = (nextLocale: IvDripLocale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
  };

  return (
    <main lang={locale} className={locale === "my" ? "font-[var(--font-myanmar)]" : locale === "th" ? "font-[var(--font-thai)]" : "font-sans"}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" aria-label="PMC Koh Sirey home" className="shrink-0">
            <Image src="/phuket-medical-clinic-1-1024x228.webp" alt="Phuket Medical Clinic Koh Sirey" width={220} height={50} className="h-9 w-auto sm:h-10" priority />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex" aria-label="IV Drip page navigation">
            <a href="#information" className="hover:text-blue-700">{copy.nav.overview}</a>
            <a href="#before-visit" className="hover:text-blue-700">{copy.nav.whatToExpect}</a>
            <a href="#location" className="hover:text-blue-700">{copy.nav.location}</a>
            <a href="#contact" className="hover:text-blue-700">{copy.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1" aria-label={copy.languageLabel}>
              {(["th", "my", "en"] as const).map((item) => (
                <button key={item} type="button" aria-pressed={locale === item} onClick={() => changeLocale(item)} className={`min-h-9 rounded-lg px-2.5 text-xs font-extrabold transition sm:px-3 ${locale === item ? "bg-white text-blue-800 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>
                  {item === "th" ? "ไทย" : item === "my" ? "မြန်မာ" : "EN"}
                </button>
              ))}
            </div>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="hidden rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-blue-800 sm:inline-flex">{copy.actions.enquire}</a>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-slate-950 pb-16 pt-34 text-white sm:pb-24 sm:pt-42">
        <Image src="/about/PMC-455.jpg" alt="PMC Koh Sirey clinic interior" fill priority sizes="100vw" className="-z-20 object-cover object-center opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/95 via-slate-900/91 to-cyan-950/84" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-sm font-bold tracking-wide text-cyan-50">{copy.hero.eyebrow}</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{copy.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-50 sm:text-xl">{copy.hero.body}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-blue-50">
              <span className="rounded-full bg-emerald-400/20 px-4 py-2 ring-1 ring-emerald-300/45">{copy.hero.openingHours}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{copy.hero.location}</span>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06c755] px-6 py-4 font-extrabold text-white shadow-lg transition hover:bg-[#05ae4a]"><Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></Icon>{copy.actions.line}</a>
              <a href={branch.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-extrabold text-slate-900 shadow-lg transition hover:bg-blue-50"><Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></Icon>{copy.actions.call}: {branch.phoneDisplay}</a>
            </div>
          </div>
          <aside className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur sm:p-7">
            <p className="text-sm font-bold text-cyan-100">{copy.safety.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black">{copy.safety.title}</h2>
            <p className="mt-4 leading-relaxed text-blue-50">{copy.safety.body}</p>
            <a href="#before-visit" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-200 hover:text-white">{copy.nav.whatToExpect} <span aria-hidden="true">↓</span></a>
          </aside>
        </div>
      </section>

      <section className="relative z-10 -mt-7 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-xl sm:grid-cols-4">
          {[
            { label: copy.actions.line, href: lineUrl, tone: "bg-green-50 text-green-700" },
            { label: copy.actions.call, href: branch.phoneHref, tone: "bg-blue-50 text-blue-700" },
            { label: copy.actions.whatsapp, href: whatsappUrl, tone: "bg-emerald-50 text-emerald-700" },
            { label: copy.actions.map, href: branch.mapUrl, tone: "bg-cyan-50 text-cyan-700" },
          ].map((action) => <a key={action.label} href={action.href} target={action.href.startsWith("tel:") ? undefined : "_blank"} rel={action.href.startsWith("tel:") ? undefined : "noopener noreferrer"} className={`rounded-2xl px-3 py-5 text-center text-sm font-extrabold transition hover:brightness-95 ${action.tone}`}>{action.label}</a>)}
        </div>
      </section>

      <section id="information" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-slate-100"><Image src="/about/PMC-472.jpg" alt="PMC Koh Sirey clinic interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div>
          <div><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.overview.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.overview.title}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{copy.overview.body}</p><p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 leading-relaxed text-blue-950">{copy.overview.note}</p></div>
        </div>
      </section>

      <section id="before-visit" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.whatToExpect.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.whatToExpect.title}</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{copy.whatToExpect.items.map((item) => <article key={item.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><h3 className="text-xl font-black text-slate-900">{item.title}</h3><p className="mt-4 leading-relaxed text-slate-600">{item.body}</p></article>)}</div>
        </div>
      </section>

      <section id="safety" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="rounded-[2rem] bg-gradient-to-br from-blue-900 to-cyan-800 p-7 text-white shadow-xl sm:p-12"><p className="text-sm font-extrabold tracking-widest text-cyan-100">{copy.safety.eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">{copy.safety.title}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-50">{copy.safety.body}</p><ul className="mt-8 grid gap-4 md:grid-cols-3">{copy.safety.items.map((item) => <li key={item} className="rounded-2xl bg-white/10 p-5 leading-relaxed ring-1 ring-white/20"><span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-200 font-black text-blue-950">✓</span><p>{item}</p></li>)}</ul><div className="mt-8 rounded-2xl border border-white/25 bg-slate-950/20 p-5 text-blue-50"><p className="font-extrabold">{copy.privacy.title}</p><p className="mt-2 leading-relaxed">{copy.privacy.body}</p></div></div></div>
      </section>

      <section id="location" className="bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.location.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.location.title}</h2></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><h3 className="text-lg font-extrabold text-slate-900">{copy.location.hoursTitle}</h3><p className="mt-3 text-2xl font-black text-blue-700">09:00–20:00</p><p className="mt-1 text-slate-600">{copy.hero.openingHours}</p><div className="my-7 h-px bg-slate-200" /><h3 className="text-lg font-extrabold text-slate-900">{copy.location.addressTitle}</h3>{branch.address.map((line) => <p className="mt-2 text-slate-600" key={line}>{line}</p>)}<a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-xl bg-blue-700 px-5 py-3 font-extrabold text-white transition hover:bg-blue-800">{copy.location.mapsCta}</a></div><div className="min-h-[25rem] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"><iframe title="PMC Koh Sirey location map" src={mapEmbedUrl} loading="lazy" className="h-full min-h-[25rem] w-full border-0" referrerPolicy="no-referrer-when-downgrade" /></div></div>
        </div>
      </section>

      <section id="contact" className="bg-blue-950 py-20 text-white sm:py-24"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"><p className="text-sm font-extrabold tracking-widest text-cyan-200">{copy.contact.eyebrow}</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">{copy.contact.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">{copy.contact.body}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={lineUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#06c755] px-6 py-4 font-extrabold text-white transition hover:bg-[#05ae4a]">{copy.actions.line}</a><a href={branch.phoneHref} className="rounded-2xl bg-white px-6 py-4 font-extrabold text-blue-950 transition hover:bg-blue-50">{copy.actions.call}: {branch.phoneDisplay}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-transparent px-6 py-4 font-extrabold text-white ring-1 ring-white/40 transition hover:bg-white/10">{copy.actions.whatsapp}</a></div><p className="mx-auto mt-9 max-w-3xl text-sm leading-relaxed text-blue-200">{copy.disclaimer}</p><div className="mt-8 flex justify-center"><div className="flex rounded-xl border border-white/20 bg-white/10 p-1">{(["th", "my", "en"] as const).map((item) => <button key={item} type="button" aria-pressed={locale === item} onClick={() => changeLocale(item)} className={`min-h-10 rounded-lg px-4 text-sm font-bold ${locale === item ? "bg-white text-blue-800" : "text-white"}`}>{item === "th" ? "ไทย" : item === "my" ? "မြန်မာ" : "EN"}</button>)}</div></div></div></section>

      <footer className="bg-slate-950 px-4 py-9 text-center text-sm text-slate-400 sm:px-6"><p>© 2026 {branch.name}. {copy.footer.rights}.</p><div className="mt-4 flex justify-center gap-4"><Link href="/" className="hover:text-white">{copy.footer.home}</Link><a href="/privacy-policy" className="hover:text-white">{copy.footer.privacy}</a><a href="/terms" className="hover:text-white">{copy.footer.terms}</a></div></footer>
    </main>
  );
}
