import CarSilhouette from './CarSilhouette';

const DEFAULT_BODY = [
  'HUMO-01 is the first Humo Racing car designed from a blank screen — every panel, bracket and bolt decided by the team.',
  'The powertrain is combustion — the rest of the spec sheet, from monocoque material to aero package, is still being finalized as design work progresses.',
  'Driver ergonomics are a priority from day one: the goal is a seat, pedal box and wheel position that put the driver in the same headspace as the engineers who built the car.',
];

const SPECS = [
  { label: 'Powertrain', value: 'Combustion' },
  { label: 'Chassis', value: 'Tubular Steel' },
  { label: 'Aero', value: '2-Wing Package' },
  { label: 'Weight', value: '~230 kg' },
];

function CarShot({ image }) {
  if (image) {
    return (
      <img
        src={image}
        alt="Humo Racing car on track"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink via-ink to-navy-deep">
      {/* Base radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'radial-gradient(closest-side, rgba(212,160,23,0.2), transparent 70%)' }}
      />
      {/* Car wireframe with glow */}
      <div className="relative z-10 w-[80%] text-gold/30">
        <CarSilhouette
          className="relative z-10 w-full text-gold/40"
          strokeWidth={1.2}
        />
        {/* Glow layer behind car */}
        <div
          className="absolute inset-0 blur-xl opacity-40"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212,160,23,0.4), transparent 65%)' }}
        />
      </div>
      {/* Horizontal speed lines */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        {[
          { top: '18%', width: '14rem', opacity: 0.3 },
          { top: '32%', width: '20rem', opacity: 0.15 },
          { top: '48%', width: '16rem', opacity: 0.25 },
          { top: '64%', width: '12rem', opacity: 0.2 },
          { top: '80%', width: '18rem', opacity: 0.12 },
        ].map((line, i) => (
          <span
            key={i}
            className="absolute right-0 block h-[1px] bg-gradient-to-l from-gold/60 to-transparent"
            style={{ top: line.top, width: line.width, opacity: line.opacity }}
          />
        ))}
      </div>
      {/* Bottom reflection line */}
      <div aria-hidden="true" className="absolute bottom-[22%] left-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </div>
  );
}

export default function CarSection({
  title = 'HUMO-01',
  eyebrow = 'Our car',
  body = DEFAULT_BODY,
  specs = SPECS,
  image = null,
  readMoreHref = '#car-full',
}) {
  return (
    <section id="car" className="relative bg-white py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-1 overflow-hidden rounded-2xl shadow-2xl shadow-ink/20">
          <div className="aspect-[16/11] w-full">
            <CarShot image={image} />
          </div>
        </div>

        <div className="order-2">
          <p className="eyebrow mb-6 text-gold-deep">{eyebrow}</p>
          <h2 className="display-2xl text-navy">{title}</h2>
          <div className="hairline-gold mt-6 w-16" />
          <div className="mt-8 max-w-xl space-y-4 leading-relaxed text-navy/80">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Specs grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-navy/10 bg-navy/[0.03] px-4 py-3"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-navy/40">
                  {spec.label}
                </p>
                <p className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-navy">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <a
              href={readMoreHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
