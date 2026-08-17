import CarSilhouette from './CarSilhouette';

export default function Partners({ image = null }) {
  return (
    <section id="partners" className="relative flex min-h-[65vh] items-center overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {image ? (
          <img src={image} alt="Humo Racing car on track" className="h-full w-full object-cover object-center" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-navy" />
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(closest-side, rgba(212,160,23,0.16), transparent 70%)' }}
            />
            <div className="absolute bottom-[16%] left-1/2 w-[86%] max-w-5xl -translate-x-1/2 text-white/15">
              <CarSilhouette />
            </div>
            <div className="absolute bottom-[12%] left-1/2 h-px w-[70%] max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {[
              { top: '24%', width: '16rem', opacity: 0.14 },
              { top: '40%', width: '22rem', opacity: 0.1 },
              { top: '62%', width: '14rem', opacity: 0.16 },
            ].map((line, i) => (
              <span
                key={i}
                className="absolute right-0 block h-[2px] bg-gradient-to-l from-gold/40 to-transparent blur-[1px]"
                style={{ top: line.top, width: line.width, opacity: line.opacity }}
              />
            ))}
          </>
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(10,14,20,0.82), rgba(10,14,20,0.45) 55%, rgba(10,14,20,0.2))',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="container-x relative z-10 py-28 text-center">
        <p className="eyebrow mb-6 text-gold">Partnership</p>
        <h2 className="display-2xl text-white">Become Partner</h2>
        <p className="mx-auto mt-7 max-w-xl text-lg font-light leading-relaxed text-ink-60">
          Support our dream and help create the engineers of the future.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#partners-full"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}