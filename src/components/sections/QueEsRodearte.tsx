import Image from "next/image";
import Link from "next/link";

export function QueEsRodearte() {
  return (
    <section id="sobre" className="bg-background pb-16 pt-6 md:pb-24 md:pt-10">
      <div className="rd-container grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.18fr] md:gap-[8%]">
        <div className="order-2 md:order-1">
          <h2 className="text-h2 font-serif text-foreground">Qué es Rodearte</h2>
          <p className="text-small mt-1 font-sans italic text-primary">
            Un espacio para volver a ti
          </p>

          <p className="text-lead mt-8 font-sans italic text-primary md:mt-10">
            Un estudio donde cada clase está pensada para que escuches tu
            cuerpo, te muevas a tu ritmo y reconectes con tu cuerpo.
          </p>
          <p className="text-lead mt-5 font-sans font-bold italic text-primary">
            Aquí el cuerpo no se fuerza. Se acompaña
          </p>

          <p className="text-small mt-8 max-w-[300px] font-sans italic text-primary md:mt-12">
            Un espacio para moverte sin presión, a tu ritmo, siempre cuidada
          </p>

          <Link href="#clases" className="rd-outline-button mt-7 md:mt-8">
            Conoce nuestras clases
          </Link>
        </div>

        <div className="relative order-1 aspect-[334/423] w-full overflow-hidden md:order-2">
          <Image
            src="/jpg/Rodearte_03-124.jpg"
            alt="Vanesa, fundadora de Rodearte, sonriendo en el estudio"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[51%_83%]"
          />
        </div>
      </div>
    </section>
  );
}
