import { useCallback, useRef } from 'react';

export default function LogoCoin({ size = 64, className = '' }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`relative shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        '--mouse-x': '50%',
        '--mouse-y': '30%',
      }}
    >
      {/* Iron casing — outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(145deg, #2a2a2e 0%, #1a1a1d 40%, #0d0d0f 100%)',
          boxShadow: `
            0 2px 8px rgba(0,0,0,0.6),
            0 8px 24px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.06),
            inset 0 -1px 0 rgba(0,0,0,0.5)
          `,
        }}
      />

      {/* Brushed iron texture ring */}
      <div
        className="absolute rounded-full"
        style={{
          inset: size * 0.04,
          background: `
            radial-gradient(circle at 30% 25%, rgba(255,255,255,0.05) 0%, transparent 50%),
            linear-gradient(160deg, #3a3a40 0%, #252528 50%, #18181b 100%)
          `,
          boxShadow: `
            inset 0 2px 4px rgba(0,0,0,0.4),
            inset 0 -1px 2px rgba(255,255,255,0.04)
          `,
        }}
      />

      {/* Inner bevel ring */}
      <div
        className="absolute rounded-full"
        style={{
          inset: size * 0.08,
          background: 'linear-gradient(145deg, #1f1f22 0%, #141416 100%)',
          boxShadow: `
            inset 0 2px 6px rgba(0,0,0,0.6),
            inset 0 -1px 3px rgba(255,255,255,0.03)
          `,
        }}
      />

      {/* Logo image — clipped to circle */}
      <div
        className="absolute overflow-hidden rounded-full"
        style={{ inset: size * 0.1 }}
      >
        <img
          src="/logo.jpg"
          alt="Humo Racing"
          draggable="false"
          className="h-full w-full object-cover rounded-full"
          style={{
            filter: 'saturate(0.85) contrast(1.05)',
          }}
        />
      </div>

      {/* Glass dome — base gradient */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: size * 0.1,
          background: `
            linear-gradient(
              165deg,
              rgba(255,255,255,0.12) 0%,
              rgba(255,255,255,0.04) 30%,
              transparent 50%,
              rgba(0,0,0,0.08) 80%,
              rgba(0,0,0,0.15) 100%
            )
          `,
        }}
      />

      {/* Glass dome — specular glare (mouse-driven) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: size * 0.1,
          overflow: 'hidden',
          background: `
            radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              rgba(255,255,255,0.35) 0%,
              rgba(255,255,255,0.12) 15%,
              rgba(200,220,255,0.06) 30%,
              transparent 55%
            )
          `,
          transition: 'background 0.05s linear',
          mixBlendMode: 'screen',
        }}
      />

      {/* Glass dome — secondary soft highlight */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: size * 0.1,
          overflow: 'hidden',
          background: `
            radial-gradient(
              ellipse at 35% 25%,
              rgba(180,210,255,0.1) 0%,
              transparent 50%
            )
          `,
        }}
      />

      {/* Edge ring — glass refraction highlight */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: size * 0.1,
          boxShadow: `
            inset 0 1px 1px rgba(255,255,255,0.15),
            inset 0 -1px 2px rgba(0,0,0,0.3)
          `,
        }}
      />

      {/* Outer rim highlight */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: 0,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.4)
          `,
        }}
      />
    </div>
  );
}
