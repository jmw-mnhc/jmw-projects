export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
    >
      <circle cx="16" cy="16" r="14" stroke="#0d8b85" strokeWidth="1.25" />
      <circle cx="16" cy="8" r="1.5" fill="#0d8b85" stroke="none" />
      <circle cx="24" cy="14" r="1.5" fill="#0d8b85" stroke="none" />
      <circle cx="22" cy="23" r="1.5" fill="#0d8b85" stroke="none" />
      <circle cx="10" cy="23" r="1.5" fill="#0d8b85" stroke="none" />
      <circle cx="8" cy="14" r="1.5" fill="#0d8b85" stroke="none" />
      <circle cx="16" cy="16" r="2" fill="#0a6d68" stroke="none" />
      <path
        d="M16 8 L24 14 L22 23 L10 23 L8 14 Z M16 8 L16 16 M24 14 L16 16 M22 23 L16 16 M10 23 L16 16 M8 14 L16 16"
        stroke="#0d8b85"
        strokeOpacity="0.55"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
