import { SPONSOR_TIERS } from '../data';

function SponsorCard({ name, placeholder }) {
  return (
    <div className="gold-etched-plate group flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex h-full w-full flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aether/10 text-aether sm:h-12 sm:w-12">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 12h8M12 8v8" />
          </svg>
        </div>
        <p className="mt-3 text-center font-display text-xs font-bold uppercase tracking-widest text-ink-40 group-hover:text-gold-deep transition-colors sm:text-sm">
          {placeholder ? 'YOUR LOGO' : name}
        </p>
      </div>
    </div>
  );
}

function TierSection({ tier }) {
  const colCount =
    tier.sponsors.length === 1
      ? 'grid-cols-1'
      : tier.sponsors.length <= 3
        ? 'grid-cols-2 sm:grid-cols-3'
        : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="inline-block rounded-full bg-aether/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-aether">
          {tier.name}
        </span>
        <span className="h-px flex-1 bg-ink-10" />
      </div>
      <p className="max-w-lg text-sm leading-relaxed text-ink-60">
        {tier.description}
      </p>
      <div className={`grid ${colCount} gap-4`}>
        {tier.sponsors.map((sponsor, i) => (
          <SponsorCard
            key={`${tier.name}-${i}`}
            name={sponsor.name}
            placeholder={sponsor.placeholder}
          />
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-obsidian relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0" />

      <div className="container-x relative z-10 py-24 lg:py-32">
        <div className="text-center">
          <h2 className="display-xl text-glow-aether text-white">PARTNERED BY</h2>
          <div className="hairline-aether mx-auto mt-5 w-16" />
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-60">
            The brands behind the build — funding the parts, the travel and the
            pit passes that keep Humo Racing on the grid.
          </p>
        </div>

        <div className="glass-panel mx-auto mt-16 max-w-4xl space-y-12 p-8 lg:p-12">
          {SPONSOR_TIERS.map((tier) => (
            <TierSection key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-ink-60">
            Interested in sponsoring?{' '}
            <a href="#partners" className="font-semibold text-gold transition-colors hover:text-gold-deep">
              GET IN TOUCH
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
