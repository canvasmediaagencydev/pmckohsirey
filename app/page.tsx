"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { landingCopy, pricingItems, type LandingLocale } from "@/lib/landing-content";
import { useBranch } from "@/lib/useBranch";

const LOCALE_STORAGE_KEY = "pmc-koh-sirey-locale";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Home() {
  const branch = useBranch();
  const [locale, setLocale] = useState<LandingLocale>("th");
  const copy = landingCopy[locale];
  const mapEmbedUrl = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(branch.addressFull)}&output=embed`,
    [branch.addressFull],
  );

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedLocale !== "th" && savedLocale !== "my") return;

    // Restore preference after hydration without changing the server-rendered Thai default.
    const restoreLocale = window.setTimeout(() => setLocale(savedLocale), 0);
    return () => window.clearTimeout(restoreLocale);
  }, []);

  const changeLocale = (nextLocale: LandingLocale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  };

  const lineUrl = `https://line.me/R/ti/p/${branch.line}`;
  const whatsappUrl = `https://wa.me/${branch.whatsapp}`;

  return (
    <main lang={locale === "th" ? "th" : "my"} className={locale === "my" ? "font-[var(--font-myanmar)]" : "font-[var(--font-thai)]"}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="shrink-0" aria-label="PMC Koh Sirey home">
            <Image src="/phuket-medical-clinic-1-1024x228.webp" alt="Phuket Medical Clinic Koh Sirey" width={200} height={44} className="h-9 w-auto sm:h-10" priority />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex" aria-label="Primary navigation">
            <a href="#services" className="hover:text-blue-700">{copy.nav.services}</a>
            <a href="#pricing" className="hover:text-blue-700">{copy.nav.pricing}</a>
            <a href="#location" className="hover:text-blue-700">{copy.nav.location}</a>
            <a href="#contact" className="hover:text-blue-700">{copy.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1" aria-label={copy.languageLabel}>
              <button type="button" aria-pressed={locale === "th"} onClick={() => changeLocale("th")} className={`min-h-9 rounded-lg px-2.5 text-xs font-bold transition sm:px-3 ${locale === "th" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>ไทย</button>
              <button type="button" aria-pressed={locale === "my"} onClick={() => changeLocale("my")} className={`min-h-9 rounded-lg px-2.5 text-xs font-bold transition sm:px-3 ${locale === "my" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>မြန်မာ</button>
            </div>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="hidden rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 sm:inline-flex">{copy.actions.book}</a>
          </div>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-slate-950 pb-16 pt-34 text-white sm:pb-24 sm:pt-42">
        <Image src="/Patients-bg.jpg" alt="" fill className="-z-20 object-cover object-center opacity-45" priority sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/95 via-blue-900/86 to-cyan-950/78" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-sm font-bold tracking-wide text-cyan-50">{copy.hero.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{copy.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-50 sm:text-xl">{copy.hero.body}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-blue-50">
              <span className="rounded-full bg-emerald-400/20 px-4 py-2 ring-1 ring-emerald-300/45">{copy.hero.openingHours}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{copy.hero.location}</span>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={branch.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-extrabold text-slate-900 shadow-lg transition hover:bg-blue-50"><Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></Icon>{copy.actions.call}: {branch.phoneDisplay}</a>
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06c755] px-6 py-4 font-extrabold text-white shadow-lg transition hover:bg-[#05ae4a]"><Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></Icon>{copy.actions.line}</a>
            </div>
          </div>
          <aside className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur sm:p-7">
            <p className="text-sm font-bold text-cyan-100">{copy.location.hoursTitle}</p>
            <p className="mt-2 text-3xl font-black">09:00–20:00</p>
            <p className="mt-1 text-blue-100">{copy.hero.openingHours}</p>
            <div className="my-6 h-px bg-white/20" />
            <p className="text-sm font-bold text-cyan-100">{copy.location.addressTitle}</p>
            <p className="mt-2 leading-relaxed text-white">{branch.address.join(", ")}</p>
            <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-200 hover:text-white"><Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a3 3 0 100-6 3 3 0 000 6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.5c0 5.75-7.5 12-7.5 12S4.5 14.25 4.5 8.5a7.5 7.5 0 1115 0z" /></Icon>{copy.actions.map}</a>
          </aside>
        </div>
      </section>

      <section className="-mt-7 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-xl sm:grid-cols-4">
          {[
            { label: copy.actions.call, href: branch.phoneHref, tone: "text-blue-700 bg-blue-50" },
            { label: copy.actions.line, href: lineUrl, tone: "text-green-700 bg-green-50" },
            { label: copy.actions.whatsapp, href: whatsappUrl, tone: "text-emerald-700 bg-emerald-50" },
            { label: copy.actions.map, href: branch.mapUrl, tone: "text-cyan-700 bg-cyan-50" },
          ].map((action) => <a key={action.label} href={action.href} target={action.href.startsWith("tel:") ? undefined : "_blank"} rel={action.href.startsWith("tel:") ? undefined : "noopener noreferrer"} className={`rounded-2xl px-3 py-5 text-center text-sm font-extrabold transition hover:brightness-95 ${action.tone}`}>{action.label}</a>)}
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.services.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.services.title}</h2></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.services.items.map((service) => <article key={service.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-44"><Image src={service.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" /></div>
              <div className="p-6"><h3 className="text-xl font-extrabold text-slate-900">{service.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{service.description}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-800 to-cyan-700 p-7 text-white shadow-xl sm:p-12">
            <p className="text-sm font-extrabold tracking-widest text-cyan-100">{copy.pricing.eyebrow}</p><h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">{copy.pricing.title}</h2><p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-50">{copy.pricing.body}</p>
            {pricingItems.length > 0 ? <div className="mt-8 grid gap-3 sm:grid-cols-2">{pricingItems.map((item) => <div key={item.serviceId} className="rounded-2xl bg-white/12 p-5 ring-1 ring-white/20"><p className="font-bold">{item.name[locale]}</p><p className="mt-2 text-2xl font-black">{item.isFromPrice ? `${locale === "th" ? "เริ่มต้น " : "မှစ၍ "}` : ""}{item.price}</p>{item.note ? <p className="mt-2 text-sm text-blue-100">{item.note[locale]}</p> : null}</div>)}</div> : <div className="mt-8 rounded-2xl border border-white/25 bg-white/10 p-5 text-blue-50"><p className="font-bold">{copy.pricing.note}</p></div>}
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-2xl bg-white px-6 py-4 font-extrabold text-blue-800 transition hover:bg-blue-50">{copy.pricing.contactForPrice}</a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-80 overflow-hidden rounded-[2rem]"><Image src="/about/PMC-455.jpg" alt="PMC Koh Sirey clinic interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.about.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.about.title}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{copy.about.body}</p><ul className="mt-7 space-y-3">{copy.about.points.map((point) => <li key={point} className="flex gap-3 font-semibold text-slate-800"><span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">✓</span>{point}</li>)}</ul></div>
        </div>
      </section>

      <section id="location" className="bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.location.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.location.title}</h2></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><h3 className="text-lg font-extrabold text-slate-900">{copy.location.hoursTitle}</h3><p className="mt-3 text-2xl font-black text-blue-700">09:00–20:00</p><p className="mt-1 text-slate-600">{copy.hero.openingHours}</p><div className="my-7 h-px bg-slate-200" /><h3 className="text-lg font-extrabold text-slate-900">{copy.location.addressTitle}</h3>{branch.address.map((line) => <p className="mt-2 text-slate-600" key={line}>{line}</p>)}<a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-xl bg-blue-700 px-5 py-3 font-extrabold text-white transition hover:bg-blue-800">{copy.location.mapsCta}</a></div>
            <div className="min-h-[25rem] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"><iframe title="PMC Koh Sirey location map" src={mapEmbedUrl} loading="lazy" className="h-full min-h-[25rem] w-full border-0" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="text-sm font-extrabold tracking-widest text-blue-700">{copy.faq.eyebrow}</p><h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.faq.title}</h2></div><div className="mt-10 space-y-4">{copy.faq.items.map((item, index) => <article key={item.question} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"><p className="font-extrabold text-slate-900"><span className="mr-3 text-blue-700">0{index + 1}</span>{item.question}</p><p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p></article>)}</div></div></section>

      <section id="contact" className="bg-blue-950 py-20 text-white sm:py-24"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"><p className="text-sm font-extrabold tracking-widest text-cyan-200">{copy.contact.eyebrow}</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">{copy.contact.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">{copy.contact.body}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={lineUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#06c755] px-6 py-4 font-extrabold text-white transition hover:bg-[#05ae4a]">{copy.contact.line}</a><a href={branch.phoneHref} className="rounded-2xl bg-white px-6 py-4 font-extrabold text-blue-950 transition hover:bg-blue-50">{copy.contact.call}: {branch.phoneDisplay}</a></div><div className="mt-10 flex justify-center"><div className="flex rounded-xl border border-white/20 bg-white/10 p-1"><button type="button" aria-pressed={locale === "th"} onClick={() => changeLocale("th")} className={`min-h-10 rounded-lg px-4 text-sm font-bold ${locale === "th" ? "bg-white text-blue-800" : "text-white"}`}>ไทย</button><button type="button" aria-pressed={locale === "my"} onClick={() => changeLocale("my")} className={`min-h-10 rounded-lg px-4 text-sm font-bold ${locale === "my" ? "bg-white text-blue-800" : "text-white"}`}>မြန်မာ</button></div></div></div></section>

      <footer className="bg-slate-950 px-4 py-9 text-center text-sm text-slate-400 sm:px-6"><p>© 2026 {branch.name}. {copy.footer.rights}.</p><div className="mt-4 flex justify-center gap-4"><a href="/privacy-policy" className="hover:text-white">{copy.footer.privacy}</a><a href="/terms" className="hover:text-white">{copy.footer.terms}</a></div></footer>
    </main>
  );
}
