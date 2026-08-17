export default function About() {
  return (
    <section id="team" className="angle relative bg-navy py-28">
      <div className="container-x">
        <p className="eyebrow mb-12 text-gold">About</p>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <h2 className="display-xl text-white">About Formula Student</h2>
            <div className="hairline-gold mt-5 w-16" />
            <div className="mt-8 max-w-xl space-y-4 leading-relaxed text-ink-60">
              <p>
                Formula Student is the world's largest student engineering
                competition. Every year, university teams from dozens of
                countries design, build and race a single-seat, open-wheel
                formula-style car.
              </p>
              <p>
                Cars are judged across three static events — engineering
                design, cost &amp; manufacturing, and business presentation —
                and four dynamic events on track, from acceleration to a
                22-kilometre endurance race.
              </p>
              <p>
                The series began in the United States in the early 1980s and
                now runs on nearly every continent. It is often described as
                the toughest test an engineering student can take.
              </p>
            </div>
            <div className="mt-9">
              <a
                href="#about-full"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
              >
                Read more
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="display-xl text-white">About Us</h2>
            <div className="hairline-gold mt-5 w-16" />
            <div className="mt-8 max-w-xl space-y-4 leading-relaxed text-ink-60">
              <p>
                Humo Racing is a Formula Student team from Tashkent, Uzbekistan,
                founded in [20XX] at [university name] by [founder name].
              </p>
              <p>
                Today we are 79 students working across ten divisions — from
                aerodynamics and powertrain to drivers and management.
              </p>
              <p>
                Our mission is simple: design, build and race a new single-seater
                every season, and give every member the chance to do real
                engineering under real deadlines.
              </p>
            </div>
            <div className="mt-9">
              <a
                href="#about-full"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-2.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}