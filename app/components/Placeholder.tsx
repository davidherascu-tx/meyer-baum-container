/**
 * Platzhalter für Fotos. Sobald Bilder vorhanden sind, durch
 * <Image src="/bilder/..." alt="..." fill className="object-cover" /> ersetzen.
 */
export default function Placeholder({
  label,
  variant = "forest",
  className = "",
}: {
  label: string;
  variant?: "forest" | "bark";
  className?: string;
}) {
  const dark = variant === "forest";
  return (
    <div
      className={`relative overflow-hidden ${dark ? "bg-forest-800 text-forest-200" : "bg-bark-200 text-forest-700"} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <g fill="currentColor">
          <path opacity="0.12" d="M0 230 60 120l30 50 50-100 60 110 40-60 70 120 40-70 50 90v60H0Z" />
          <path opacity="0.2" d="M40 300V200l-20 10 30-60-15 5 30-60 30 60-15-5 30 60-20-10v100Z" />
          <path opacity="0.2" d="M300 300V180l-25 12 36-72-18 6 36-72 36 72-18-6 36 72-25-12v120Z" />
          <path opacity="0.14" d="M160 300v-70l-15 8 22-45-11 4 22-45 22 45-11-4 22 45-15-8v70Z" />
        </g>
      </svg>
      <span
        className={`absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ${dark ? "bg-black/25 text-forest-100" : "bg-white/50 text-forest-800"}`}
      >
        Foto folgt · {label}
      </span>
    </div>
  );
}
