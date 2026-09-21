import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background">
      {/* Foto del estudio al 25 % de opacidad, como en el Canva */}
      <div className="absolute inset-0">
        <Image
          src="/jpg/Rodearte_03-76.jpg"
          alt="Clase de movimiento consciente en el estudio Rodearte"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%] opacity-25"
        />
      </div>

      <div className="rd-container relative flex min-h-[62vh] items-center py-16 md:min-h-0 md:aspect-[800/473] md:py-0">
        <div className="max-w-[560px] animate-fade-in-up md:max-w-[52%]">
          <p className="text-small font-sans uppercase tracking-[0.12em] text-foreground">
            Tu espacio de movimiento consciente
          </p>
          <h1 className="text-h1 mt-5 font-serif text-foreground md:mt-7">
            Aquí tu cuerpo piensa, respira y vuelve a ti
          </h1>
          <p className="text-lead mt-3 font-sans text-foreground md:mt-4">
            Un espacio íntimo para escucharte y habitarte
          </p>
        </div>
      </div>
    </section>
  );
}
