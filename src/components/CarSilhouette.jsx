export default function CarSilhouette({ className = 'h-full w-full', strokeWidth = 3 }) {
  return (
    <svg
      viewBox="0 0 420 150"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M30 92 L 76 84 L 76 92 L 30 100 Z" fill="currentColor" stroke="none" opacity="0.9" />
      <path d="M32 88 C 56 70, 100 60, 158 55 L 196 49 C 210 46, 222 56, 240 47 C 268 35, 312 37, 344 47 L 358 51 C 364 53, 368 60, 364 66 C 360 72, 352 76, 342 78 L 30 92 Z" />
      <path d="M330 46 L 332 22 L 356 20 L 358 48" />
      <circle cx="118" cy="94" r="27" />
      <circle cx="118" cy="94" r="9" />
      <circle cx="302" cy="94" r="27" />
      <circle cx="302" cy="94" r="9" />
    </svg>
  );
}