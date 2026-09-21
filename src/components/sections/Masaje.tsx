import Image from "next/image";

const pasos = [
  {
    titulo: "1. Valoración inicial",
    texto: "Conocemos tu constitución ayurvédica y cómo te encuentras ahora.",
  },
  {
    titulo: "2. Masaje adaptado",
    texto: "Elegimos el aceite y técnicas según tus necesidades.",
  },
  {
    titulo: "3. Beneficios",
    texto: "Relaja cuerpo y mente → Mejora la circulación → Aporta calma",
  },
];

export function Masaje() {
  return (
    <section id="masaje" className="bg-background pb-6 pt-10 md:pb-10 md:pt-14">
      <div className="rd-container">
        <div className="text-center">
          <h2 className="text-h2 font-serif text-foreground">
            Un masaje único creado para ti
          </h2>
          <p className="text-body mt-2 font-sans text-foreground">
            Aceite templado · Masaje corporal · Equilibrio
          </p>
        </div>

        <div className="relative mx-auto mt-6 max-w-[860px] md:mt-8 md:pt-[13.6%]">
          {/* Foto de la camilla: en desktop se superpone a la caja beige */}
          <div className="relative z-10 aspect-[5/3] w-full overflow-hidden md:absolute md:left-0 md:top-0 md:aspect-square md:w-[50.8%]">
            <Image
              src="/jpg/Rodearte_01-109.jpg"
              alt="Camilla de masaje con aceite templado y quemador de esencias"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[50%_58%] md:object-center"
            />
          </div>

          <div className="relative z-0 mt-3 bg-secondary/50 px-5 py-6 md:ml-[40.8%] md:mt-0 md:aspect-[379/276] md:w-[59.2%] md:py-[4.7%] md:pl-[16.1%] md:pr-[4.8%]">
            <h3 className="text-h2 font-serif text-foreground">Masaje ayurvédico</h3>
            <dl className="mt-4 space-y-3 md:mt-6 md:space-y-4">
              {pasos.map((paso) => (
                <div key={paso.titulo}>
                  <dt className="font-sans text-[clamp(1rem,1.45vw,1.2rem)] font-bold uppercase italic leading-tight text-foreground">
                    {paso.titulo}
                  </dt>
                  <dd className="font-sans text-[clamp(1rem,1.45vw,1.2rem)] leading-tight text-foreground">
                    {paso.texto}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
