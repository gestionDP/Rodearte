import Image from "next/image";

/** Icono de Rodearte (versión símbolo) como elemento decorativo, tal y como aparece en el Canva. */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logos/icon.svg"
      alt=""
      aria-hidden="true"
      width={396}
      height={620}
      className={className}
    />
  );
}
