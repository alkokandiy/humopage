function Trophy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14" aria-hidden="true">
      <path d="M6 4h12v6a6 6 0 0 1-12 0V4Z" />
      <path d="M6 6H3v1a4 4 0 0 0 3 3.9M18 6h3v1a4 4 0 0 1-3 3.9" />
      <path d="M12 16v2M8 22h8M9 19h6" />
    </svg>
  );
}

function Flag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14" aria-hidden="true">
      <path d="M5 3v18" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </svg>
  );
}

function Gauge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14" aria-hidden="true">
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-5" />
      <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Bolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14" aria-hidden="true">
      <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
    </svg>
  );
}

function Megaphone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14" aria-hidden="true">
      <path d="M4 9v5h3l8 5V4L7 9H4Z" />
      <path d="M16 8a4 4 0 0 1 0 7" />
    </svg>
  );
}

function Calendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14" aria-hidden="true">
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <path d="M4 10h16M8 3v5M16 3v5" />
    </svg>
  );
}

const GLYPHS = {
  trophy: Trophy,
  flag: Flag,
  gauge: Gauge,
  bolt: Bolt,
  megaphone: Megaphone,
  calendar: Calendar,
};

export default function CardArt({ image, glyph, className, alt = '' }) {
  const Glyph = GLYPHS[glyph] || (() => null);
  return (
    <div className={className}>
      {image ? (
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-obsidian via-ink to-obsidian">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(closest-side, rgba(0,123,255,0.15), transparent 70%)' }}
          />
          <span className="text-aether/20">
            <Glyph />
          </span>
        </div>
      )}
    </div>
  );
}
