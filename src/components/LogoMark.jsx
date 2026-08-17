export default function LogoMark({ className = 'h-[50px] w-[50px]' }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} fill="none">
      <defs>
        <linearGradient id="humo-gold" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#B8860B" />
          <stop offset="0.55" stopColor="#D4A017" />
          <stop offset="1" stopColor="#F0D27A" />
        </linearGradient>
      </defs>
      <path
        d="M5 41 C17 39 28 32 36 20 L43 9 C40 21 33 31 22 37 C15 41 9 42 5 41 Z"
        fill="url(#humo-gold)"
      />
      <path
        d="M43 9 L39 18"
        stroke="url(#humo-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}