import { DIVISIONS } from '../data';

export default function Divisions() {
  return (
    <section id="divisions" className="angle relative bg-navy py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-6 text-gold">Ten divisions</p>
            <h2 className="display-2xl text-white">Our Divisions</h2>
          </div>
          <p className="max-w-sm text-ink-60">
            Every part of the car is owned by a division — and every division
            reports into the same design freeze.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((division, i) => (
            <article
              key={division.name}
              className="group border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-gold hover:bg-white/[0.06]"
            >
              <span className="font-display text-sm font-bold tracking-display text-ink-30 transition-colors group-hover:text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-display text-white">
                {division.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">
                Lead — {division.lead}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-60">
                {division.desc}
              </p>
            </article>
          ))}

          <article className="flex flex-col justify-between border border-gold/40 bg-gold/[0.06] p-6">
            <div>
              <span className="font-display text-sm font-bold tracking-display text-gold">
                Your division
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-display text-white">
                No seat is empty
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-60">
                We recruit year-round across engineering, management and
                driving. If a division calls you, apply.
              </p>
            </div>
            <a
              href="#join"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-display text-gold transition-colors hover:text-white"
            >
              Join the team →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}