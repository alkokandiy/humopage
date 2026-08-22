export default function CarSilhouette({ className = 'h-full w-full', strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 520 180"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* Main body outline */}
      <path d="M40 110 L80 104 L80 112 L40 120 Z" fill="currentColor" stroke="none" opacity="0.15" />
      <path
        d="M42 106 C 68 82, 120 68, 180 60 L 230 52 C 248 48, 262 62, 282 50 C 315 36, 370 38, 410 50 L 428 55 C 436 58, 442 68, 438 76 C 434 84, 424 90, 412 92 L 42 106 Z"
        opacity="0.6"
      />

      {/* Nose cone */}
      <path d="M42 106 L30 108 L28 112 L42 112" opacity="0.4" />

      {/* Cockpit / halo */}
      <path d="M190 58 L198 38 L220 34 L232 42 L248 50" opacity="0.5" />
      <path d="M198 38 L198 32 L222 28 L222 34" opacity="0.35" />

      {/* Rear wing */}
      <path d="M410 48 L414 22 L440 18 L442 48" opacity="0.5" />
      <path d="M414 22 L440 22" opacity="0.3" />
      <path d="M416 30 L438 30" opacity="0.2" />

      {/* Front wing elements */}
      <path d="M30 108 L22 110 L20 114 L30 114" opacity="0.3" />

      {/* Sidepod intakes */}
      <path d="M200 62 L208 72 L214 72 L210 62" opacity="0.2" />

      {/* Rear diffuser */}
      <path d="M380 92 L390 98 L412 92" opacity="0.2" />

      {/* Floor line */}
      <path d="M50 118 L400 100 L430 96" opacity="0.15" strokeDasharray="4 6" />

      {/* Wheels */}
      <circle cx="138" cy="114" r="30" opacity="0.6" />
      <circle cx="138" cy="114" r="22" opacity="0.25" />
      <circle cx="138" cy="114" r="10" opacity="0.4" />
      <circle cx="138" cy="114" r="3" fill="currentColor" opacity="0.3" />

      <circle cx="370" cy="114" r="30" opacity="0.6" />
      <circle cx="370" cy="114" r="22" opacity="0.25" />
      <circle cx="370" cy="114" r="10" opacity="0.4" />
      <circle cx="370" cy="114" r="3" fill="currentColor" opacity="0.3" />

      {/* Wheel spokes - front */}
      <line x1="138" y1="92" x2="138" y2="136" opacity="0.15" />
      <line x1="116" y1="114" x2="160" y2="114" opacity="0.15" />
      <line x1="122" y1="98" x2="154" y2="130" opacity="0.1" />
      <line x1="122" y1="130" x2="154" y2="98" opacity="0.1" />

      {/* Wheel spokes - rear */}
      <line x1="370" y1="92" x2="370" y2="136" opacity="0.15" />
      <line x1="348" y1="114" x2="392" y2="114" opacity="0.15" />
      <line x1="354" y1="98" x2="386" y2="130" opacity="0.1" />
      <line x1="354" y1="130" x2="386" y2="98" opacity="0.1" />

      {/* Suspension arms */}
      <line x1="158" y1="108" x2="188" y2="80" opacity="0.2" />
      <line x1="158" y1="120" x2="188" y2="96" opacity="0.2" />
      <line x1="348" y1="108" x2="310" y2="82" opacity="0.2" />
      <line x1="348" y1="120" x2="310" y2="98" opacity="0.2" />

      {/* Aero elements - bargeboard area */}
      <path d="M170 72 L180 68 L178 76" opacity="0.15" />

      {/* Exhaust line */}
      <path d="M410 86 L428 88" opacity="0.15" strokeDasharray="2 3" />
    </svg>
  );
}
