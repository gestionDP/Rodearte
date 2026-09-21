import Image from "next/image";

const fotos = {
  izquierda: {
    src: "/jpg/Rodearte_03-28.jpg",
    posicion: "object-center",
    alt: "Detalle del top y las mallas Rodearte en color oliva",
  },
  centro: {
    src: "/jpg/Rodearte_03-42.jpg",
    posicion: "object-[89%_94%]",
    alt: "Vanesa mostrando prendas de la colección Rodearte en perchas",
  },
  derecha: {
    src: "/jpg/Rodearte_03-133.jpg",
    posicion: "object-bottom",
    alt: "Detalle de una prenda Rodearte con el logotipo bordado",
  },
};

export function Ropa() {
  return (
    <section id="ropa" className="bg-secondary/50 pt-12 md:pt-14">
      <div className="rd-container text-center">
        <h2 className="text-h2 font-serif uppercase text-foreground">Ropa Rodearte</h2>
        <p className="text-body mt-3 font-sans text-primary">
          Ropa que acompaña tu cuerpo,
          <br />
          dentro y fuera de clase
        </p>
      </div>

      {/* Desktop: composición a sangre del Canva (laterales pegados a los bordes) */}
      <div className="mt-10 hidden w-full items-start justify-between pb-[7%] md:flex">
        <div className="relative mt-[11.9%] aspect-[234/274] w-[29.2%] overflow-hidden">
          <Image src={fotos.izquierda.src} alt={fotos.izquierda.alt} fill sizes="30vw" className={`object-cover ${fotos.izquierda.posicion}`} />
        </div>
        <div className="relative aspect-[325/465] w-[40.6%] overflow-hidden">
          <Image src={fotos.centro.src} alt={fotos.centro.alt} fill sizes="41vw" className={`object-cover ${fotos.centro.posicion}`} />
        </div>
        <div className="relative mt-[11.9%] aspect-[234/274] w-[29.2%] overflow-hidden">
          <Image src={fotos.derecha.src} alt={fotos.derecha.alt} fill sizes="30vw" className={`object-cover ${fotos.derecha.posicion}`} />
        </div>
      </div>

      {/* Móvil: foto principal y las dos de detalle en una fila */}
      <div className="rd-container mt-8 pb-12 md:hidden">
        <div className="relative aspect-[325/400] w-full overflow-hidden">
          <Image src={fotos.centro.src} alt={fotos.centro.alt} fill sizes="100vw" className={`object-cover ${fotos.centro.posicion}`} />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="relative aspect-[234/274] overflow-hidden">
            <Image src={fotos.izquierda.src} alt={fotos.izquierda.alt} fill sizes="50vw" className={`object-cover ${fotos.izquierda.posicion}`} />
          </div>
          <div className="relative aspect-[234/274] overflow-hidden">
            <Image src={fotos.derecha.src} alt={fotos.derecha.alt} fill sizes="50vw" className={`object-cover ${fotos.derecha.posicion}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
