type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function TreeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 6 11h3l-4 6h14l-4-6h3l-6-8Z" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function RopeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v6" />
      <circle cx="12" cy="10" r="2" />
      <path d="M12 12v3l-3 3m3-3 3 3M9 21h6" />
      <path d="M5 4c2 2 2 4 0 6M19 4c-2 2-2 4 0 6" />
    </svg>
  );
}

export function StumpIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <ellipse cx="12" cy="8" rx="7" ry="3" />
      <path d="M5 8v6c0 1.7 3.1 3 7 3s7-1.3 7-3V8" />
      <path d="M5 14l-2 5m16-5 2 5M12 17v4" />
      <ellipse cx="12" cy="8" rx="3" ry="1.2" />
    </svg>
  );
}

export function ScissorsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
    </svg>
  );
}

export function ContainerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 9h20l-2 9H4L2 9Z" />
      <path d="M7 9v9M12 9v9M17 9v9" />
      <path d="M5 9 7 5h10l2 4" />
    </svg>
  );
}

export function RecycleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L6 11" />
      <path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7L19 13" />
      <path d="m14 16-3 3 3 3M8.3 7.6 11 3.2a1.8 1.8 0 0 1 3.1 0L16 6.5" />
      <path d="m3 9 3 2 2-3.5M13 9l3-2.5 1 3.8" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function BroomIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19 3 11 11" />
      <path d="M9.5 9.5 14.5 14.5 12 21c-3-1-6-3-8-6l5.5-5.5Z" />
      <path d="M7 16l2-2" />
    </svg>
  );
}

export function EuroIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M17 6.5A7 7 0 1 0 17 17.5" />
      <path d="M4 10h9M4 14h9" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" />
    </svg>
  );
}
