import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
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
    el.scrollTo({ left: target * step(), behavior: reduced ? 'auto' : 'smooth' });
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
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <article
            key={card.caption}
            data-card
            className="relative aspect-[4/5] w-[80%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[46%] lg:w-[36%]"
          >
            <CardArt image={card.image} glyph={card.glyph} alt={card.caption} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
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
                index === i ? 'w-8 bg-gold' : 'w-2 bg-navy/20 hover:bg-navy/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === count - 1}
          aria-label="Next achievements"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-white py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <div className="self-start lg:sticky lg:top-24">
          <p className="eyebrow mb-6 text-gold-deep">Our history</p>
          <h2 className="display-xl text-navy">Our Achievements</h2>
          <div className="hairline-gold mt-5 w-16" />
          <p className="mt-6 max-w-sm leading-relaxed text-navy/70">
            Historical highlights of our team — built season by season, event by
            event.
          </p>
          <div className="mt-9">
            <a
              href="#achievements-full"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
            >
              Read more
            </a>
          </div>
        </div>

        <CardCarousel cards={ACHIEVEMENTS} />
      </div>
    </section>
  );
}