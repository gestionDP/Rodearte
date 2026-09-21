import Image from "next/image";
import { Blob } from "@/components/sections/Blob";

const clases = [
  {
    nombre: "BVRRE Full Body",
    horarios: ["Lunes - 18:30h", "Martes - 09:30h"],
    imagen: "/jpg/Rodearte_03-139.jpg",
    posicion: "object-center",
    alt: "Alumna de espaldas en la barra durante una clase de BVRRE Full Body",
  },
  {
    nombre: "BVRRE Ballet",
    horarios: ["Miércoles - 18:30h", "Jueves - 09:30h"],
    imagen: "/jpg/Rodearte_03-130.jpg",
    posicion: "object-center",
    alt: "Alumna estirando en la barra en una clase de BVRRE Ballet",
  },
  {
    nombre: "Rodearte Stretch",
    horarios: ["Viernes - 18:30h"],
    imagen: "/jpg/Rodearte_03-22.jpg",
    posicion: "object-[center_85%]",
    alt: "Clase de Rodearte Stretch con rodillo frente al espejo del estudio",
  },
];

export function Clases() {
  return (
    <section id="clases" className="relative bg-background pb-14 pt-12 md:pb-24 md:pt-24">
      {/* Icono grande y difuminado por detrás: en el Canva ocupa 646×808 sobre 800 de ancho, a x=425 e y=-234 respecto a la sección, al 16 % */}
      <Blob className="pointer-events-none absolute left-[53%] top-[-29vw] z-0 h-[101vw] w-auto max-w-none opacity-[0.16]" />

      <div className="rd-container relative z-10">
        <h2 className="text-h2 font-serif text-foreground">Lo que hacemos</h2>
        <p className="text-body mt-3 font-sans text-foreground">
          Elige la clase que te pida el cuerpo
          <br />
          Todas están pensadas para acompañarte
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-[2.8%]">
          {clases.map((clase) => (
            <li key={clase.nombre}>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={clase.imagen}
                  alt={clase.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className={`object-cover ${clase.posicion}`}
                />
              </div>
              <h3 className="mt-5 font-sans text-[clamp(1.1rem,1.75vw,1.4rem)] font-bold uppercase leading-none text-black">
                {clase.nombre}
              </h3>
              <p className="text-body mt-2 font-sans uppercase text-foreground">
                {clase.horarios.map((h) => (
                  <span key={h} className="block">
                    {h}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
