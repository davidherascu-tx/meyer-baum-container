import Link from "next/link";
import { navItems, site } from "@/lib/site";
import Logo from "./Logo";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-forest-200/80">
            Baumfällung, Grünpflege und Containerdienst aus einer Hand – für
            Privatkunden, Hausverwaltungen und Gewerbe in Eichwalde und Umgebung.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-signal-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
              <span>
                {site.street}
                <br />
                {site.zip} {site.city}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-signal-400">
                <PhoneIcon className="h-4 w-4 shrink-0 text-signal-400" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-signal-400">
                <MailIcon className="h-4 w-4 shrink-0 text-signal-400" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-forest-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name} · Inh. {site.owner}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
