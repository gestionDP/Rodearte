import Image from "next/image";

export function Pasaporte() {
  return (
    <section
      id="pasaporte"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Image
        src="/jpg/-.png"
        alt="Pasaporte de asistencia en mesa verde"
        fill
        className="object-cover"
     
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/30" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-background/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-background/20 shadow-xl animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 md:mb-8">
                Pasaporte de Asistencia
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl font-sans text-foreground leading-relaxed">
                <p>
                  En Rodearte te entregamos tu{" "}
                  <span className="font-serif font-semibold text-primary">
                    Pasaporte
                  </span>
                  :
                </p>
                <p>tu forma de acompañar tu propio camino clase a clase.</p>
                <p>
                  Cada sello es{" "}
                  <span className="font-serif font-semibold text-primary">
                    constancia
                  </span>
                  ,{" "}
                  <span className="font-serif font-semibold text-primary">
                    presencia
                  </span>{" "}
                  y{" "}
                  <span className="font-serif font-semibold text-primary">
                    cuidado
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
