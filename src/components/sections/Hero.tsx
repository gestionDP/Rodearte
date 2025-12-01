import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const testimonial = {
  quote:
    "Más que movimiento: un refugio donde el cuerpo piensa, respira y vuelve a sí.",
  author: "Comunidad Rodearte",
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] md:min-h-screen w-full overflow-hidden text-foreground"
      style={{ marginTop: 0 }}
    >
      <div className="absolute inset-0">
        <Image
          src="/jpg/Rodearte_01-22.jpg"
          alt="Personas practicando movimiento consciente en Rodearte"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/5 to-transparent" />

      <div className="relative z-10 flex min-h-[70vh] md:min-h-screen flex-col justify-between">
        <div className="container mx-auto px-4 pt-32 sm:pt-40 md:pt-48 lg:pt-56">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/90 font-sans mb-3 sm:mb-4">
            Estudio de movimiento somático
          </p>
          <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-5xl font-serif font-bold leading-tight text-white lg:text-6xl">
            Aquí tu cuerpo piensa, respira y vuelve a ti.
          </h1>
          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl text-xs sm:text-sm font-sans text-white/95 md:text-base lg:text-lg">
            Un espacio íntimo para escucharte y habitarte.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-8 sm:pb-10 lg:pb-16">
          {/* Mobile: Layout simplificado - solo testimonio */}
          <div className="lg:hidden">
            <div className="rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md p-4">
              <p className="text-sm font-serif leading-relaxed mb-2">
                "{testimonial.quote}"
              </p>
              <p className="text-xs font-sans text-white/80">
                {testimonial.author}
              </p>
            </div>
          </div>

          {/* Desktop: Layout original */}
          <div className="hidden lg:block">
            {/* Títulos fuera de los contenedores */}
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] mb-4">
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white font-sans">
                Lo que dicen quienes practican
              </h2>
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white font-sans">
                Sobre Rodearte
              </h2>
            </div>

            <div className="relative">
              <div className="border-t border-white/30" />

              {/* Recuadros con muy poca opacidad */}
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_1px_minmax(0,1fr)] items-start">
                <div className="rounded-[28px] border border-white/25 bg-white/10 text-white backdrop-blur-sm p-6">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl md:w-44 flex-shrink-0">
                      <Image
                        src="/jpg/Rodearte_01-89.jpg"
                        alt="Testimonio Rodearte"
                        fill
                        className="object-cover"
                        sizes="250px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-serif md:text-xl leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <p className="mt-4 text-sm font-sans text-white/70">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-px bg-white/30 h-full -translate-y-6" />

                <div className="flex flex-col gap-4 text-white">
                  <p className="text-base font-sans text-white/90 leading-relaxed">
                    Somos una comunidad íntima donde el movimiento es escucha
                    profunda. Cada clase combina somática creativa, tiempo para
                    ti y acompañamiento humano para sostener tus procesos y
                    crear tu propio ritmo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
