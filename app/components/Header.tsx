"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";
import Logo from "./Logo";
import { ArrowIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border py-2 pl-3 pr-2 transition-all duration-500 sm:pl-4 ${
            scrolled || open
              ? "border-forest-900/10 bg-white/85 shadow-lg shadow-forest-950/10 backdrop-blur-xl"
              : "border-white/15 bg-white/5 backdrop-blur-md"
          }`}
        >
          <Link href="/" onClick={() => setOpen(false)} aria-label="Zur Startseite">
            <Logo light={!scrolled && !open} compact />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    active
                      ? scrolled
                        ? "bg-forest-900 text-white"
                        : "bg-white text-forest-950"
                      : scrolled
                        ? "text-forest-800 hover:bg-forest-900/5"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="group hidden items-center gap-2 rounded-full bg-signal-500 py-2.5 pl-3 pr-5 text-sm font-bold text-forest-950 transition hover:bg-signal-400 md:inline-flex"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-950/10 transition group-hover:rotate-12">
                <PhoneIcon className="h-4 w-4" />
              </span>
              {site.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
                scrolled || open ? "bg-forest-900 text-white" : "bg-white text-forest-950"
              }`}
            >
              <span className="sr-only">Menü</span>
              <span
                className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobiles Vollbild-Menü */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-forest-950 transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "[clip-path:circle(150%_at_calc(100%-3rem)_2.5rem)]" : "pointer-events-none [clip-path:circle(0%_at_calc(100%-3rem)_2.5rem)]"
        }`}
        aria-hidden={!open}
      >
        <div className="bg-grain flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-col" aria-label="Mobile Navigation">
            {open &&
              navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${120 + i * 60}ms` }}
                  className={`group flex animate-menu-in items-center justify-between border-b border-white/10 py-4 font-display text-4xl font-bold uppercase ${
                    isActive(item.href) ? "text-signal-400" : "text-white"
                  }`}
                >
                  {item.label}
                  <ArrowIcon className="h-6 w-6 -translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
          </nav>
          {open && (
            <div className="mt-auto grid animate-menu-in gap-3 [animation-delay:450ms]">
              <a href={site.phoneHref} className="flex items-center gap-3 rounded-2xl bg-signal-500 px-5 py-4 font-bold text-forest-950">
                <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-4 font-semibold text-white">
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-4 font-semibold text-white">
                  <MailIcon className="h-5 w-5" /> E-Mail
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
