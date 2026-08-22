import { useState, useEffect } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import { ChevronLeft, ChevronRight } from './icons';

import heroBg from '../assets/images/new.jpeg';

const SLIDES = [
  {
    id: 'brand',
    accent: 'gold',
    eyebrow: 'Formula Student \u00b7 Tashkent',
    headline: ['HUMO', 'RACING.'],
    body: 'We are a student team of engineers, drivers and organisers from Tashkent building a Formula Student car \u2014 and racing it against the best.',
    cta: [
      { label: 'Meet the team', href: '#team', variant: 'gold' },
      { label: 'Our car', href: '#car', variant: 'outline' },
    ],
  },
  {
    id: 'car',
    accent: 'aether',
    eyebrow: 'The car',
    headline: ['DESIGNED.', 'BUILT.', 'RACED.'],
    body: 'A single-seater born in CAD, laid up in carbon and shaken down on track. Every subsystem owned by a division, every division owned by the design freeze.',
    cta: [{ label: 'See the car', href: '#car', variant: 'outline' }],
  },
  {
    id: 'race',
    accent: 'gold',
    eyebrow: 'Race week',
    headline: ['FIVE EVENTS.', 'ONE CAR.'],
    body: 'Static scrutiny and design review first \u2014 then skidpad, autocross and the endurance race that decides who goes home fastest.',
    cta: [{ label: 'Our achievements', href: '#achievements', variant: 'outline' }],
  },
  {
    id: 'sponsors',
    accent: 'aether',
    eyebrow: 'Sponsorship',
    headline: ['BACKED BY', 'THE BEST.'],
    body: 'Partnerships fund the build, the travel and the parts. Join the roster of brands behind a Tashkent-built race car.',
    cta: [{ label: 'Become a sponsor', href: '#sponsors', variant: 'outline' }],
  },
  {
    id: 'join',
    accent: 'gold',
    eyebrow: 'Open positions',
    headline: ['JOIN THE', 'TEAM.'],
    body: 'Recruiting across all ten divisions \u2014 engineering, management and driving. No empty seats, no dead ends.',
    cta: [{ label: 'Apply now', href: '#join', variant: 'gold' }],
  },
];

const PARTICLES = [
  { top: '12%', left: '6%', size: 3, delay: 0, duration: 5.5 },
  { top: '28%', left: '68%', size: 4, delay: 1.2, duration: 6.2 },
  { top: '65%', left: '12%', size: 3, delay: 0.8, duration: 5.0 },
  { top: '45%', left: '82%', size: 3, delay: 2.0, duration: 6.8 },
  { top: '78%', left: '50%', size: 4, delay: 0.5, duration: 5.8 },
  { top: '8%', left: '42%', size: 3, delay: 1.8, duration: 6.0 },
  { top: '82%', left: '25%', size: 3, delay: 2.5, duration: 5.5 },
  { top: '55%', left: '75%', size: 4, delay: 3.0, duration: 6.5 },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!reduced);
  const [holding, setHolding] = useState(false);
  const slideCount = SLIDES.length;
  const paused = !playing || holding;

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 6000);
    return () => clearInterval(id);
  }, [paused, slideCount]);

  const goTo = (i) => setIndex((i + slideCount) % slideCount);
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount);
  const next = () => setIndex((i) => (i + 1) % slideCount);

  const slide = SLIDES[index];
  const accentIsGold = slide.accent === 'gold';

  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[100svh] overflow-hidden"
      style={{ backgroundColor: '#05080c' }}
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onFocusCapture={() => setHolding(true)}
      onBlurCapture={() => setHolding(false)}
    >
      {/* LAYER 0: Full-bleed background image with left-edge mask fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.7) 30%, black 50%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.7) 30%, black 50%)',
        }}
      >
        <img
          src={heroBg}
          alt="HUMO-01 Formula Student car with cyan atmospheric effects"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className={`blueprint-grid-fine pointer-events-none absolute inset-0 z-[1] animate-grid-pulse ${
          reduced ? 'opacity-[0.03]' : ''
        }`}
      />

      {/* Glowing particles */}
      {!reduced &&
        PARTICLES.map((p, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="absolute z-[2] rounded-full bg-aether-light animate-particle-float"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}

      {/* LEFT COLUMN: Typography — z-10, highest layer for text */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-full flex-col justify-center md:w-[42%] px-8 py-32 md:pl-16 md:pr-8 lg:pl-24">
        {/* Safety gradient behind text for guaranteed legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(to right, #05080c 0%, rgba(5,8,12,0.95) 40%, rgba(5,8,12,0.6) 70%, transparent 100%)',
          }}
        />

        <div className="relative max-w-xl">
          <p
            className={`eyebrow mb-6 ${
              accentIsGold ? 'text-gold' : 'text-aether-light'
            }`}
          >
            {slide.eyebrow}
          </p>

          <h1 className="relative z-10 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.92] tracking-display text-white">
            {slide.headline.map((line, li) => (
              <span
                key={li}
                className="block text-glow-aether"
                style={{
                  textShadow:
                    '0 0 40px rgba(0,204,255,0.25), 0 0 80px rgba(0,123,255,0.12)',
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ink-60">
            {slide.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {slide.cta.map((cta) =>
              cta.variant === 'gold' ? (
                <a key={cta.href} href={cta.href} className="btn-gold">
                  {cta.label}
                </a>
              ) : (
                <a key={cta.href} href={cta.href} className="btn-outline">
                  {cta.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="glass-panel absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-aether/30 p-2 text-aether-light transition-colors hover:border-aether hover:text-aether sm:left-5 sm:p-3"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="glass-panel absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-aether/30 p-2 text-aether-light transition-colors hover:border-aether hover:text-aether sm:right-5 sm:p-3"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-6 left-4 z-30 sm:left-8">
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          className="glass-panel flex h-11 w-11 items-center justify-center rounded-full border border-aether/30 text-aether-light transition-colors hover:border-aether hover:text-aether"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {/* Pagination dots */}
      <div
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3"
        role="group"
        aria-label="Choose slide"
      >
        {SLIDES.map((slide, i) => {
          const active = index === i;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active}
              className={`relative h-2 rounded-full transition-all duration-400 ${
                active
                  ? 'w-8 bg-aether shadow-aether-glow'
                  : 'w-2 bg-ink-20 hover:bg-ink-40'
              }`}
            >
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-aether-light animate-holographic-trace opacity-60"
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
