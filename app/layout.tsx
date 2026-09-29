import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Baumfällung & Containerdienst in Eichwalde`,
    template: `%s | ${site.name}`,
  },
  description:
    "Professionelle Baumfällung, Problemfällung, Wurzelfräsen, Grünschnitt und Containerdienst in Eichwalde, Zeuthen, Königs Wusterhausen und Berlin-Süd. Jetzt unverbindlich anfragen.",
  keywords: [
    "Baumfällung Eichwalde",
    "Baumfällarbeiten",
    "Containerdienst Eichwalde",
    "Problemfällung",
    "Wurzelfräsen",
    "Grünschnitt Entsorgung",
    "Königs Wusterhausen",
    "Zeuthen",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${body.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
