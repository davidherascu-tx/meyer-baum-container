import { PageHero } from "./ui";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={title} />
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-4 leading-relaxed text-forest-900/85 sm:px-6 [&_a]:font-semibold [&_a]:text-forest-700 [&_a]:underline [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-forest-900 [&_p+p]:mt-3">
          {children}
        </div>
      </section>
    </>
  );
}
