export default function Logo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center rounded-full bg-forest-700 text-signal-400 ${compact ? "h-10 w-10" : "h-12 w-12"}`}
      >
        <svg viewBox="0 0 32 32" className={compact ? "h-5 w-5" : "h-6 w-6"} fill="currentColor" aria-hidden>
          <path d="M16 3 8 14h4l-5 7h7v6h4v-6h7l-5-7h4L16 3Z" />
        </svg>
      </span>
      <span className="leading-none transition-colors duration-500">
        <span
          className={`block font-display font-bold uppercase tracking-wide ${compact ? "text-xl" : "text-2xl"} ${light ? "text-white" : "text-forest-900"}`}
        >
          Meyer
        </span>
        <span
          className={`block text-[0.6rem] font-bold uppercase tracking-[0.2em] ${light ? "text-forest-200" : "text-forest-600"}`}
        >
          Baum &amp; Container
        </span>
      </span>
    </span>
  );
}
