import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import useScrollReveal from '../hooks/useScrollReveal';
import CardArt from './CardArt';
import { ChevronLeft, ChevronRight } from './icons';

const ACHIEVEMENTS = [
  { caption: 'Season Debut', sub: 'First car, first events, first full season — [year].', glyph: 'flag', image: null },
  { caption: 'Design Event', sub: 'Static scrutiny passed at [competition], [year].', glyph: 'trophy', image: null },
  { caption: 'Endurance', sub: '22 km completed at [competition], [year].', glyph: 'gauge', image: null },
  { caption: 'Autocross', sub: 'Fastest runs at [competition], [year].', glyph: 'bolt', image: null },
];

function CardCarousel({ cards }) {
  const reduced = useReducedMotion();
  const scrollerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = cards.length;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;
    let settled = false;
    const reset = () => {
      if (settled) return;
      el.scrollLeft = 0;
      setIndex(0);
    };
    reset();
    const raf = requestAnimationFrame(reset);
    const timer = window.setInterval(() => {
      if (el.scrollLeft === 0) {
        window.clearInterval(timer);
        settled = true;
      } else {
        reset();
      }
    }, 100);
    window.addEventListener('pageshow', reset);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
      settled = true;
      window.removeEventListener('pageshow', reset);
    };
  }, []);

  const step = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector('[data-card]');
    return card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    const s = step();
    if (!el || !s) return;
    setIndex(Math.max(0, Math.min(count - 1, Math.round(el.scrollLeft / s))));
  };

  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(count - 1, i));
    el.scrollTo({
      left: target * step(),
      behavior: reduced ? 'auto' : 'smooth',
    });
    el.style.scrollBehavior = 'smooth';
    el.style.scrollSnapType = 'x mandatory';
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Achievement highlights"
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 min-h-[400px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, i) => (
          <article
            key={card.caption}
            data-card
            className="glass-panel relative aspect-[4/5] w-[80%] shrink-0 snap-start overflow-hidden sm:w-[46%] lg:w-[36%] hover:holographic-border transition-all duration-300"
          >
            <CardArt image={card.image} glyph={card.glyph} alt={card.caption} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h4 className="font-display text-2xl font-bold uppercase leading-tight tracking-display text-white">
                {card.caption}
              </h4>
              <p className="mt-1 text-sm text-ink-60">{card.sub}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous achievements"
          className="glass-panel flex h-10 w-10 items-center justify-center border border-aether/15 text-aether transition-colors hover:border-aether/30 hover:text-aether-light disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" role="group" aria-label="Choose achievement">
          {cards.map((card, i) => (
            <button
              key={card.caption}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to achievement ${i + 1}`}
              aria-current={index === i}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i
                  ? 'w-8 bg-gold animate-glow-gold'
                  : 'w-2 bg-ink-20 hover:bg-ink-30'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === count - 1}
          aria-label="Next achievements"
          className="glass-panel flex h-10 w-10 items-center justify-center border border-aether/15 text-aether transition-colors hover:border-aether/30 hover:text-aether-light disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [headingRef, headingVisible] = useScrollReveal();

  return (
    <section id="achievements" className="section-obsidian relative overflow-hidden">
      <div className="container-x relative z-10 py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <div
            ref={headingRef}
            className={`self-start lg:sticky lg:top-24 reveal-up ${headingVisible ? 'visible' : ''}`}
          >
            <span className="eyebrow text-gold">OUR HISTORY</span>
            <h2 className="display-xl mt-4 text-white">OUR ACHIEVEMENTS</h2>
            <div className="hairline-gold mt-5 w-16" />
            <p className="mt-6 max-w-sm leading-relaxed text-ink-60">
              Historical highlights of our team — built season by season, event by
              event.
            </p>
            <div className="mt-9">
              <a href="#achievements-full" className="btn-gold">
                READ MORE
              </a>
            </div>
          </div>

          <div ref={sectionRef} className={`reveal-up ${sectionVisible ? 'visible' : ''}`}>
            <CardCarousel cards={ACHIEVEMENTS} />
          </div>
        </div>
      </div>
    </section>
  );
}
