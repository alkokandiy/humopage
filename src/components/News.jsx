import useScrollReveal from '../hooks/useScrollReveal';
import CardArt from './CardArt';

const NEWS = [
  { title: '2026 Open Call', sub: 'Recruitment opens across all ten divisions. Applications close [date].', tag: 'Recruitment', glyph: 'megaphone', image: null },
  { title: 'New Sponsor On Board', sub: '[Sponsor] joins Humo Racing for the [year] season.', tag: 'Sponsorship', glyph: 'bolt', image: null },
  { title: 'HUMO-01 Reveal', sub: 'First look at the [year] car — revealed at [venue].', tag: 'Car', glyph: 'calendar', image: null },
  { title: 'Test Day', sub: 'Shakedown laps at [circuit] before the first event.', tag: 'Track', glyph: 'flag', image: null },
];

function NewsCard({ item, index }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`reveal-up stagger-${index + 1} ${visible ? 'visible' : ''} glass-panel group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-aether/30 hover:shadow-[0_0_24px_rgba(0,123,255,0.15)]`}
    >
      <CardArt image={item.image} glyph={item.glyph} alt={item.title} className="h-40 w-full" />
      <div className="p-5">
        <span className="inline-block rounded-full bg-aether/10 px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-display text-aether">
          {item.tag}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold uppercase leading-tight tracking-display text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-60">{item.sub}</p>
      </div>
    </article>
  );
}

export default function News() {
  const [sectionRef, sectionVisible] = useScrollReveal();

  return (
    <section id="news" className="section-obsidian-alt relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0" />

      <div className="container-x relative z-10 py-24 lg:py-32">
        <div ref={sectionRef} className={`reveal-up ${sectionVisible ? 'visible' : ''}`}>
          <span className="eyebrow text-gold">UPDATES</span>
          <h2 className="display-xl text-glow-aether mt-4 text-white">LATEST NEWS</h2>
          <div className="hairline-aether mt-5 w-16" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.map((item, i) => (
            <NewsCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
