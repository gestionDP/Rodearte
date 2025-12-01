import Image from "next/image";

const pilares = [
  {
    title: "Cuerpo que piensa",
    subtitle: "El movimiento como lenguaje interior.",
    description: "Tu cuerpo recuerda y te guía.",
    image: "/jpg/Rodearte_01-89.jpg", 
    position: "left",
  },
  {
    title: "Movimiento que libera",
    subtitle: "Pequeños gestos que transforman tu día.",
    description: "Escuchar, soltar, crear.",
    image: "/jpg/Rodearte_01-64.jpg", 
    position: "center",
  },
  {
    title: "Cuidado que acompaña",
    subtitle: "Clases que sostienen tu ritmo, tus días y tu proceso.",
    description: "",
    image: "/jpg/Rodearte_01-93.jpg",
    position: "right",
  },
];

export function Pilares() {
  return (
    <section id="pilares" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-30 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight">
            <span className="text-background">Cuerpo que piensa,</span>
            <br />
            <span className="text-background/80 font-bold">
              movimiento que libera,
            </span>
            <br />
            <span className="text-background">cuidado que acompaña</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mt-40">
          {pilares.map((pilar, index) => {
            const heights = [
              "h-[380px] md:h-[420px]",
              "h-[480px] md:h-[520px]",
              "h-[360px] md:h-[400px]",
            ];
            const animations = [
              "animate-float-left",
              "animate-float-center",
              "animate-float-right",
            ];
            const verticalOffsets = [
              "-mt-8 md:-mt-12",
              "mt-12 md:mt-16",
              "mt-0",
            ];

            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-2xl ${animations[index]} ${verticalOffsets[index]}`}
              >
                <div className={`relative w-full ${heights[index]}`}>
                  <Image
                    src={pilar.image}
                    alt={pilar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-4 md:p-6 flex flex-col justify-end">
                    <h3 className="text-background font-serif font-bold text-base md:text-lg lg:text-xl mb-1">
                      {pilar.title}
                    </h3>
                    <p className="text-background/90 font-sans text-xs md:text-sm italic">
                      {pilar.subtitle}
                    </p>
                    {pilar.description && (
                      <p className="text-background/80 font-sans text-xs mt-1">
                        {pilar.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
