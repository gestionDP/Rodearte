/** Mancha orgánica decorativa (esquina superior derecha de "Lo que hacemos"). */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 560"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#c5baa8"
        fillOpacity="0.5"
        d="M 268 6 C 340 -10 396 48 398 120 C 400 190 352 224 330 286 C 308 350 342 406 292 454 C 244 500 182 470 128 504 C 76 536 20 560 8 502 C -4 444 50 420 78 372 C 106 322 62 268 96 214 C 130 160 190 168 214 108 C 232 62 214 18 268 6 Z"
      />
    </svg>
  );
}
