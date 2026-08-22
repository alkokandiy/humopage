import { useState } from 'react';
import { DIVISIONS } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const [showDivisions, setShowDivisions] = useState(false);
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="team" className="section-obsidian relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0" />

      <div className="container-x relative z-10 py-24 lg:py-32">
        <div ref={sectionRef} className={`reveal-up ${sectionVisible ? 'visible' : ''}`}>
          <div className="eyebrow-wrap mb-12">
            <span className="eyebrow text-aether">About Us</span>
            <span className="animate-tech-trace" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: About Formula Student */}
          <div ref={leftRef} className={`reveal-up ${leftVisible ? 'visible' : ''} glass-panel p-8 lg:p-12 angle`}>
            <div className="eyebrow-wrap">
              <span className="eyebrow text-aether">About</span>
              <span className="animate-tech-trace" />
            </div>
            <h2 className="display-xl mt-4 text-white">ABOUT FORMULA STUDENT</h2>
            <div className="hairline-gold my-6" />
            <div className="space-y-4 text-ink-60 leading-relaxed">
              <p>
                Formula Student is the world's largest design competition for engineering
                students. Teams from around the globe design, build, and race small-scale
                formula-style racing cars, judged on design, cost, business case, and
                dynamic performance.
              </p>
              <p>
                Beyond pure speed, the competition evaluates innovation, reliability, and
                the team's ability to present a viable engineering and business
                proposition. It is the ultimate proving ground for the next generation of
                automotive engineers.
              </p>
            </div>
            <a href="#car" className="btn-aether mt-8">READ MORE</a>
          </div>

          {/* Right: About Us */}
          <div ref={rightRef} className={`reveal-up ${rightVisible ? 'visible' : ''} glass-panel p-8 lg:p-12 angle`}>
            <div className="eyebrow-wrap">
              <span className="eyebrow text-gold">Team</span>
              <span className="animate-tech-trace" />
            </div>
            <h2 className="display-xl mt-4 text-white">ABOUT US</h2>
            <div className="hairline-aether my-6" />
            <div className="space-y-4 text-ink-60 leading-relaxed">
              <p>
                Humo Racing is Tajikistan's first Formula Student team, forged in Dushanbe
                with a singular mission: to prove that world-class engineering knows no
                borders.
              </p>
              <p>
                Our team spans mechanical, electrical, and software disciplines, united by
                an obsession with performance and a refusal to accept "impossible." We are
                writing the first chapter of motorsport history for our nation.
              </p>
            </div>
            <button
              className="btn-gold mt-8"
              onClick={() => setShowDivisions(!showDivisions)}
            >
              {showDivisions ? 'CLOSE' : 'READ MORE'}
            </button>
          </div>
        </div>
      </div>

      {/* Divisions Pop-out Overlay */}
      {showDivisions && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowDivisions(false)}
        >
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />
          <div
            className="glass-panel relative z-10 w-full max-w-5xl max-h-[85vh] overflow-y-auto p-8 lg:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="eyebrow-wrap">
                  <span className="eyebrow text-aether">Our Divisions</span>
                  <span className="animate-tech-trace" />
                </div>
                <h3 className="display-xl text-white mt-2">TEAM DIVISIONS</h3>
              </div>
              <button
                className="text-ink-40 hover:text-white transition-colors text-2xl leading-none"
                onClick={() => setShowDivisions(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="hairline-gold mb-8" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIVISIONS.map((division, i) => (
                <div
                  key={i}
                  className={`reveal-up stagger-${i + 1} glass-panel p-6 hover:border-aether/30 transition-colors`}
                >
                  <h4 className="text-aether text-lg font-semibold font-display tracking-wide">
                    {division.name}
                  </h4>
                  <p className="text-ink-60 mt-2 text-sm leading-relaxed">
                    {division.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="#team" className="btn-gold">
                MEET THE TEAM
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
