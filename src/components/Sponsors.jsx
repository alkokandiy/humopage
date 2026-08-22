import { SPONSOR_TIERS } from '../data';

const TIER_STYLES = {
  gold: {
    border: 'border-gold/30',
    bg: 'bg-gold/[0.04]',
    badge: 'bg-gold/10 text-gold-deep',
    glow: 'shadow-[0_0_30px_-8px_rgba(212,160,23,0.15)]',
    accent: 'bg-gold/20',
  },
  navy: {
    border: 'border-navy/20',
    bg: 'bg-navy/[0.03]',
    badge: 'bg-navy/10 text-navy',
    glow: 'shadow-[0_0_30px_-8px_rgba(11,61,145,0.12)]',
    accent: 'bg-navy/15',
  },
  slate: {
    border: 'border-ink/10',
    bg: 'bg-ink/[0.02]',
    badge: 'bg-ink/5 text-ink/60',
    glow: '',
    accent: 'bg-ink/10',
  },
};

function SponsorCard({ name, placeholder, tierStyle }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border ${tierStyle.border} ${tierStyle.bg} ${tierStyle.glow} transition-all duration-300 hover:scale-[1.02]`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className={`h-10 w-10 rounded-lg ${tierStyle.accent} sm:h-12 sm:w-12`} />
        <p className="mt-3 text-center font-display text-xs font-bold uppercase tracking-widest text-ink/40 sm:text-sm">
          {placeholder ? 'Your Logo' : name}
        </p>
      </div>
    </div>
  );
}

function TierSection({ tier }) {
  const style = TIER_STYLES[tier.color] || TIER_STYLES.slate;
  const colCount = tier.sponsors.length === 1 ? 'grid-cols-1' : tier.sponsors.length <= 3 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className={`inline-block rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${style.badge}`}>
          {tier.name}
        </span>
        <span className="h-px flex-1 bg-ink/8" />
      </div>
      <p className="max-w-lg text-sm leading-relaxed text-navy/60">
        {tier.description}
      </p>
      <div className={`grid ${colCount} gap-4`}>
        {tier.sponsors.map((sponsor, i) => (
          <SponsorCard
            key={`${tier.name}-${i}`}
            name={sponsor.name}
            placeholder={sponsor.placeholder}
            tierStyle={style}
          />
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative bg-white py-28">
      <div className="container-x">
        <div className="text-center">
          <h2 className="display-xl text-navy">Partnered by</h2>
          <div className="hairline-gold mx-auto mt-5 w-16" />
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-navy/70">
            The brands behind the build — funding the parts, the travel and the
            pit passes that keep Humo Racing on the grid.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-12">
          {SPONSOR_TIERS.map((tier) => (
            <TierSection key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-navy/50">
            Interested in sponsoring?{' '}
            <a href="#partners" className="font-semibold text-gold-deep transition-colors hover:text-gold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
