import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import CarSilhouette from './CarSilhouette';
import { ChevronLeft, ChevronRight } from './icons';

const SLIDES = [
  {
    id: 'brand',
    placement: 'top',
    accent: 'gold',
    image: null,
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
    accent: 'navy',
    image: null,
    eyebrow: 'The car',
    headline: 'Designed. Built. Raced.',
    body: 'A single-seater born in CAD, laid up in carbon and shaken down on track. Every subsystem owned by a division, every division owned by the design freeze.',
    cta: [{ label: 'See the car', href: '#car', variant: 'outline' }],
  },
  {
    id: 'race',
    placement: 'bottom',
    accent: 'gold',
    image: null,
    eyebrow: 'Race week',
    headline: 'Five events. One car.',
    body: 'Static scrutiny and design review first — then skidpad, autocross and the endurance race that decides who goes home fastest.',
    cta: [{ label: 'Our achievements', href: '#achievements', variant: 'outline' }],
  },
  {
    id: 'sponsors',
    placement: 'bottom',
    accent: 'navy',
    image: null,
    eyebrow: 'Sponsorship',
    headline: 'Backed by the best.',
    body: 'Partnerships fund the build, the travel and the parts. Join the roster of brands behind a Tashkent-built race car.',
    cta: [{ label: 'Become a sponsor', href: '#sponsors', variant: 'outline' }],
  },
  {
    id: 'join',
    placement: 'bottom',
    accent: 'gold',
    image: null,
    eyebrow: 'Open positions',
    headline: 'Join the team.',
    body: 'Recruiting across all ten divisions — engineering, management and driving. No empty seats, no dead ends.',
    cta: [{ label: 'Apply now', href: '#join', variant: 'gold' }],
  },
];

const ACCENTS = {
  gold: {
    glow: 'rgba(212, 160, 23, 0.28)',
    shadow: '0 0 80px 20px rgba(212, 160, 23, 0.2), 0 0 160px 40px rgba(212, 160, 23, 0.08)',
  },
  navy: {
    glow: 'rgba(27, 90, 208, 0.32)',
    shadow: '0 0 80px 20px rgba(27, 90, 208, 0.2), 0 0 160px 40px rgba(27, 90, 208, 0.08)',
  },
};

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

function SlideArt({ slide }) {
  const accent = ACCENTS[slide.accent];
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {slide.image ? (
        <img src={slide.image} alt="" className="absolute right-[-10%] top-1/2 h-[65%] w-[70%] -translate-y-1/2 -rotate-3 object-cover" />
      ) : (
        <div className="absolute right-[-10%] top-1/2 aspect-[520/180] w-[86%] max-w-[56rem] -translate-y-1/2 -rotate-3 sm:right-[2%] sm:w-[58%]">
          {/* Radial glow behind the car */}
          <div
            className="absolute -inset-[35%]"
            style={{ background: `radial-gradient(closest-side, ${accent.glow}, transparent 72%)` }}
          />
          {/* Car silhouette with drop-shadow glow */}
          <CarSilhouette
            strokeWidth={1.5}
            className="h-full w-full text-white/25"
            style={{ filter: `drop-shadow(${accent.shadow})` }}
          />
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent bg-[length:100%_4px] pointer-events-none" />
        </div>
      )}
    </div>
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
      {SLIDES.map((slide, i) => {
        const active = i === index;
        const top = slide.placement === 'top';
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
            <SlideArt slide={slide} />
            <div className={`container-x relative z-10 flex h-full flex-col ${top ? 'justify-start pt-40' : 'justify-end pb-44'}`}>
              <div className={`max-w-2xl ${top ? '' : 'pb-6'}`}>
                <p className={`eyebrow mb-5 ${slide.accent === 'gold' ? 'text-gold' : 'text-navy-light'}`}>{slide.eyebrow}</p>
                <h1 className="display-3xl text-white">{slide.headline}</h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-60">{slide.body}</p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  {slide.cta.map((cta) =>
                    cta.variant === 'gold' ? (
                      <a key={cta.href} href={cta.href} tabIndex={active ? 0 : -1} className="btn-gold">
                        {cta.label}
                      </a>
                    ) : (
                      <a key={cta.href} href={cta.href} tabIndex={active ? 0 : -1} className="btn-outline">
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

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:border-gold hover:text-gold sm:left-5 sm:p-3"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:border-gold hover:text-gold sm:right-5 sm:p-3"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-6 left-4 z-20 sm:left-8">
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5" role="group" aria-label="Choose slide">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={index === i}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
