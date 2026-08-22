import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import { ChevronLeft, ChevronRight } from './icons';

import trackAction768 from '../assets/images/humo-01-track-action-768.jpg';
import trackAction768Webp from '../assets/images/humo-01-track-action-768.webp';
import trackAction1280 from '../assets/images/humo-01-track-action-1280.jpg';
import trackAction1280Webp from '../assets/images/humo-01-track-action-1280.webp';

const SLIDES = [
  {
    id: 'brand',
    placement: 'top',
    accent: 'gold',
    eyebrow: 'Formula Student · Tashkent',
    headline: 'HUMO RACING.',
    body: 'We are a student team of engineers, drivers and organisers from Tashkent building a Formula Student car — and racing it against the best.',
    cta: [
      { label: 'Meet the team', href: '#team', variant: 'gold' },
      { label: 'Our car', href: '#car', variant: 'outline' },
    ],
  },
  {
    id: 'car',
    placement: 'bottom',
    accent: 'aether',
    eyebrow: 'The car',
    headline: 'Designed. Built. Raced.',
    body: 'A single-seater born in CAD, laid up in carbon and shaken down on track. Every subsystem owned by a division, every division owned by the design freeze.',
    cta: [{ label: 'See the car', href: '#car', variant: 'outline' }],
  },
  {
    id: 'race',
    placement: 'bottom',
    accent: 'gold',
    eyebrow: 'Race week',
    headline: 'Five events. One car.',
    body: 'Static scrutiny and design review first — then skidpad, autocross and the endurance race that decides who goes home fastest.',
    cta: [{ label: 'Our achievements', href: '#achievements', variant: 'outline' }],
  },
  {
    id: 'sponsors',
    placement: 'bottom',
    accent: 'aether',
    eyebrow: 'Sponsorship',
    headline: 'Backed by the best.',
    body: 'Partnerships fund the build, the travel and the parts. Join the roster of brands behind a Tashkent-built race car.',
    cta: [{ label: 'Become a sponsor', href: '#sponsors', variant: 'outline' }],
  },
  {
    id: 'join',
    placement: 'bottom',
    accent: 'gold',
    eyebrow: 'Open positions',
    headline: 'Join the team.',
    body: 'Recruiting across all ten divisions — engineering, management and driving. No empty seats, no dead ends.',
    cta: [{ label: 'Apply now', href: '#join', variant: 'gold' }],
  },
];

const PARTICLES = [
  { top: '15%', left: '8%', size: 4, delay: 0, duration: 5.5 },
  { top: '25%', left: '72%', size: 3, delay: 1.2, duration: 6.2 },
  { top: '60%', left: '15%', size: 5, delay: 0.8, duration: 5.0 },
  { top: '40%', left: '85%', size: 3, delay: 2.0, duration: 6.8 },
  { top: '75%', left: '55%', size: 4, delay: 0.5, duration: 5.8 },
  { top: '10%', left: '45%', size: 3, delay: 1.8, duration: 6.0 },
  { top: '80%', left: '30%', size: 4, delay: 2.5, duration: 5.5 },
  { top: '50%', left: '60%', size: 3, delay: 3.0, duration: 6.5 },
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

  return (
    <section
      id="top"
      className="relative flex min-h-screen min-h-[100svh] overflow-hidden bg-ink"
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onFocusCapture={() => setHolding(true)}
      onBlurCapture={() => setHolding(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <picture>
          <source
            type="image/webp"
            srcSet={`${trackAction768Webp} 768w, ${trackAction1280Webp} 1280w`}
            sizes="100vw"
          />
          <img
            src={trackAction1280}
            srcSet={`${trackAction768} 768w, ${trackAction1280} 1280w`}
            sizes="100vw"
            alt="Humo Racing's HUMO-01 on a wet test track"
            loading="eager"
            fetchPriority="high"
            className="h-full max-w-[80rem] object-cover"
          />
        </picture>
      </div>

      {/* Blueprint grid overlay */}
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
            className="absolute rounded-full bg-aether-light animate-particle-float"
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

      {/* Per-slide content */}
      {SLIDES.map((slide, i) => {
        const active = i === index;
        const top = slide.placement === 'top';
        const accentIsGold = slide.accent === 'gold';
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slideCount}: ${slide.eyebrow}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {/* Radial gradient overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[2]"
              style={{
                background: top
                  ? 'radial-gradient(ellipse at 20% 30%, rgba(3,4,10,0.88) 0%, rgba(3,4,10,0.5) 35%, transparent 65%)'
                  : 'radial-gradient(ellipse at 20% 70%, rgba(3,4,10,0.88) 0%, rgba(3,4,10,0.5) 35%, transparent 65%)',
              }}
            />

            {/* Slide copy */}
            <div
              className={`container-x relative z-10 flex h-full flex-col ${
                top ? 'justify-start pt-36 sm:pt-40' : 'justify-end pb-36 sm:pb-44'
              }`}
            >
              <div className={`max-w-2xl ${top ? '' : 'pb-6'}`}>
                <p
                  className={`eyebrow mb-5 ${
                    accentIsGold ? 'text-gold' : 'text-aether-light'
                  }`}
                >
                  {slide.eyebrow}
                </p>
                <h1 className="display-3xl text-white text-glow-aether">
                  {slide.headline}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-60">
                  {slide.body}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  {slide.cta.map((cta) =>
                    cta.variant === 'gold' ? (
                      <a
                        key={cta.href}
                        href={cta.href}
                        tabIndex={active ? 0 : -1}
                        className="btn-gold"
                      >
                        {cta.label}
                      </a>
                    ) : (
                      <a
                        key={cta.href}
                        href={cta.href}
                        tabIndex={active ? 0 : -1}
                        className="btn-outline"
                      >
                        {cta.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Previous arrow */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="glass-panel absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-aether/30 p-2 text-aether-light transition-colors hover:border-aether hover:text-aether sm:left-5 sm:p-3"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="glass-panel absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-aether/30 p-2 text-aether-light transition-colors hover:border-aether hover:text-aether sm:right-5 sm:p-3"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Play / pause */}
      <div className="absolute bottom-6 left-4 z-20 sm:left-8">
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          className="glass-panel flex h-11 w-11 items-center justify-center rounded-full border border-aether/30 text-aether-light transition-colors hover:border-aether hover:text-aether"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {/* Pagination dots — holographic trace */}
      <div
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3"
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
