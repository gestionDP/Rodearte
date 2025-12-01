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
      className="relative min-h-screen w-full overflow-hidden text-foreground"
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
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/10 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <div className="container mx-auto px-4 pt-32 sm:pt-36 lg:pt-40">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80 font-sans mb-4 sm:mb-6">
            Estudio de movimiento somático
          </p>
          <h1 className="max-w-3xl text-3xl sm:text-4xl font-serif font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Aquí tu cuerpo piensa, respira y vuelve a ti.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base font-sans text-white/90 md:text-lg">
            Rodearte es un espacio íntimo para escucharte. Movimiento
            consciente, somática creativa y acompañamiento humano para habitarte
            con calma.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-10 sm:pb-12 lg:pb-16">
          {/* Mobile: Layout simplificado */}
          <div className="lg:hidden space-y-6">
            {/* Testimonio */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-white font-sans mb-3">
                Lo que dicen quienes practican
              </h2>
              <div className="border-t border-white/30 mb-4" />
              <div className="rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-sm p-4">
                <p className="text-sm font-serif leading-relaxed mb-3">
                  "{testimonial.quote}"
                </p>
                <p className="text-xs font-sans text-white/70">
                  {testimonial.author}
                </p>
              </div>
            </div>

            {/* Sobre Rodearte */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-white font-sans mb-3">
                Sobre Rodearte
              </h2>
              <div className="border-t border-white/30 mb-4" />
              <div className="rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-sm p-4">
                <p className="text-sm font-sans text-white/90 leading-relaxed">
                  Somos una comunidad íntima donde el movimiento es escucha
                  profunda. Cada clase combina somática creativa, tiempo para ti
                  y acompañamiento humano para sostener tus procesos y crear tu
                  propio ritmo.
                </p>
              </div>
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
