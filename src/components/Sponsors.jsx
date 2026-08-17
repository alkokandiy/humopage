const LOGOS = [
  { glyph: 'AS', label: 'Aerospace Supply', shape: 'square' },
  { glyph: 'PC', label: 'Precision CNC', shape: 'round' },
  { glyph: 'CW', label: 'Carbon Works', shape: 'diamond' },
  { glyph: 'TM', label: 'Technik Motorsport', shape: 'square' },
  { glyph: 'VB', label: 'Velocity Bank', shape: 'round' },
  { glyph: 'GG', label: 'Grid Garage', shape: 'diamond' },
];

const SHAPES = {
  square: 'rounded-md',
  round: 'rounded-full',
  diamond: 'rotate-45 rounded-md',
};

function Logo({ glyph, label, shape }) {
  return (
    <div className="mx-10 flex h-12 shrink-0 items-center gap-3 text-ink/45" aria-hidden="true">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center border border-ink/25 font-display text-sm font-bold tracking-display ${SHAPES[shape]}`}
      >
        {glyph}
      </span>
      <span className="whitespace-nowrap font-display text-xl font-bold uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}

function LogoRun() {
  return LOGOS.map((logo) => <Logo key={logo.glyph} {...logo} />);
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative bg-white py-28">
      <div className="container-x text-center">
        <h2 className="display-xl text-navy">Partnered by</h2>
        <div className="hairline-gold mx-auto mt-5 w-16" />
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-navy/70">
          The brands behind the build — funding the parts, the travel and the
          pit passes that keep Humo Racing on the grid.
        </p>
      </div>

      <div
        className="marquee mt-14 overflow-hidden py-2"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
        role="region"
        aria-label="Sponsor logos"
      >
        <div className="marquee-track">
          <LogoRun />
          <LogoRun />
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#sponsors-full"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
        >
          Read more
        </a>
      </div>
    </section>
  );
}