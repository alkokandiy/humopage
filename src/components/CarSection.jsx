import render640 from '../assets/images/humo-01-render-640.png';
import render640Webp from '../assets/images/humo-01-render-640.webp';
import render960 from '../assets/images/humo-01-render-960.png';
import render960Webp from '../assets/images/humo-01-render-960.webp';
import render1280 from '../assets/images/humo-01-render-1280.png';
import render1280Webp from '../assets/images/humo-01-render-1280.webp';

const SPECS = [
  { label: 'POWERTRAIN', value: 'Combustion' },
  { label: 'CHASSIS', value: 'Tubular Steel' },
  { label: 'AERO', value: '2-Wing Package' },
  { label: 'WEIGHT', value: '~230 kg' },
];

export default function CarSection() {
  return (
    <section id="car" className="section-obsidian-alt relative overflow-hidden">
      <div className="container-x relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Car Image */}
          <div className="relative">
            <div className="holographic-border rounded-lg overflow-hidden bg-ink/50">
              <picture>
                <source
                  srcSet={`${render640Webp} 640w, ${render960Webp} 960w, ${render1280Webp} 1280w`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  type="image/webp"
                />
                <source
                  srcSet={`${render640} 640w, ${render960} 960w, ${render1280} 1280w`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  type="image/png"
                />
                <img
                  src={render960}
                  alt="HUMO-01 concept render, front three-quarter view, car #44"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Right: Specs & Info */}
          <div>
            <span className="eyebrow text-gold">The Machine</span>
            <h2 className="display-2xl mt-4 text-white">HUMO-01</h2>
            <div className="hairline-gold my-6" />

            {/* HUD Telemetry Gauges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {SPECS.map((spec, i) => (
                <div key={i} className="hud-gauge p-4 rounded-md bg-ink/40 border border-aether/10">
                  <span className="hud-text text-aether text-xs tracking-widest uppercase">
                    {spec.label}
                  </span>
                  <p className="text-glow-aether font-display text-2xl font-bold text-white mt-1">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-ink-60 leading-relaxed">
              <p>
                HUMO-01 is a purpose-built formula car engineered from a clean sheet.
                Every tube in the chassis, every element of the aero package, and every
                line of the engine map is designed in-house to extract maximum performance
                within the regulations.
              </p>
              <p>
                From concept to composite, HUMO-01 represents thousands of hours of CAD,
                CFD, FEA, and hands-on fabrication. It is where theory meets tarmac.
              </p>
            </div>

            <button className="btn-gold mt-8">READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
