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
    <section id="ropa" className="bg-secondary/50 pt-8 md:pt-14">
      <div className="rd-container text-center">
        <h2 className="text-h2 font-serif uppercase text-foreground">Ropa Rodearte</h2>
        <p className="text-body mt-3 font-sans text-primary">
          Ropa que acompaña tu cuerpo,
          <br />
          dentro y fuera de clase
        </p>
      </div>

      {/* Desktop: la composición del Canva, reducida y centrada para equilibrarla con el texto */}
      <div className="rd-container mt-8 hidden items-start justify-between pb-14 md:flex">
        <div className="relative mt-[9%] aspect-[234/250] w-[29%] overflow-hidden">
          <Image src={fotos.izquierda.src} alt={fotos.izquierda.alt} fill sizes="30vw" className={`object-cover ${fotos.izquierda.posicion}`} />
        </div>
        <div className="relative aspect-[325/390] w-[38%] overflow-hidden">
          <Image src={fotos.centro.src} alt={fotos.centro.alt} fill sizes="41vw" className={`object-cover ${fotos.centro.posicion}`} />
        </div>
        <div className="relative mt-[9%] aspect-[234/250] w-[29%] overflow-hidden">
          <Image src={fotos.derecha.src} alt={fotos.derecha.alt} fill sizes="30vw" className={`object-cover ${fotos.derecha.posicion}`} />
        </div>
      </div>

      {/* Móvil: foto principal recortada (sin pared) y las dos de detalle en una fila */}
      <div className="rd-container mt-5 pb-8 md:hidden">
        <div className="relative aspect-[5/4] w-full overflow-hidden">
          <Image src={fotos.centro.src} alt={fotos.centro.alt} fill sizes="100vw" className="object-cover object-[50%_50%]" />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={fotos.izquierda.src} alt={fotos.izquierda.alt} fill sizes="50vw" className="object-cover object-[50%_40%]" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={fotos.derecha.src} alt={fotos.derecha.alt} fill sizes="50vw" className="object-cover object-[50%_65%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
