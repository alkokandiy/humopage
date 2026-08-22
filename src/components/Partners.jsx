import CarSilhouette from './CarSilhouette';

export default function Partners() {
  return (
    <section id="partners" className="section-obsidian relative min-h-[65vh] overflow-hidden">
      {/* Blueprint grid */}
      <div className="blueprint-grid absolute inset-0" />

      {/* Ghost car silhouette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none">
        <div className="relative">
          {/* Radial aether glow behind the car */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-[600px] h-[300px] bg-aether/[0.04] rounded-full blur-3xl" />
          </div>
          <CarSilhouette className="relative text-white/[0.06] w-full h-auto" />
        </div>
      </div>

      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(3,4,10,0.4)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center justify-center min-h-[65vh] text-center py-24">
        <span className="eyebrow text-aether-light">Partnership</span>
        <h2 className="display-2xl mt-4 text-glow-aether text-white">
          BECOME PARTNER
        </h2>
        <div className="hairline-aether my-6 mx-auto" />
        <p className="max-w-xl text-ink-60 leading-relaxed text-lg">
          Join Humo Racing as a partner and stand at the forefront of innovation. We
          offer brands a unique opportunity to align with engineering excellence,
          international visibility, and a story that resonates across borders.
        </p>
        <a href="#contact" className="btn-gold mt-10">
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}
