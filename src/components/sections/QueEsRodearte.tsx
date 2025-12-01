import Image from "next/image";
import Link from "next/link";

export function QueEsRodearte() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Image
        src="/jpg/aboutUs.avif"
        alt="Vanesa sentada, acogedora y serena"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
              Qué es Rodearte
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal text-white/90">
              Un espacio para volver a ti
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
          <div className="flex justify-end">
            <div className="rounded-3xl border border-white/25 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 backdrop-blur-xl shadow-xl p-6 md:p-8 max-w-md w-full">
              <div className="space-y-4 text-white">
                <p className="text-base md:text-lg font-sans leading-relaxed">
                  Un estudio donde trabajamos desde la{" "}
                  <span className="text-xl md:text-2xl font-serif font-bold text-background">
                    somática creativa
                  </span>
                  , el{" "}
                  <span className="text-lg md:text-xl font-serif font-semibold text-secondary">
                    movimiento integrativo
                  </span>{" "}
                  y la{" "}
                  <span className="text-lg md:text-xl font-serif font-semibold text-background/80">
                    escucha profunda
                  </span>
                  .
                </p>
                <p className="text-base md:text-lg font-sans leading-relaxed">
                  Aquí el cuerpo se convierte en un{" "}
                  <span className="text-xl md:text-2xl font-serif font-bold text-background">
                    lugar seguro
                  </span>
                  .
                </p>
                <Link
                  href="#clases"
                  className="inline-block text-sm md:text-base font-sans text-white/90 hover:text-white transition-colors underline underline-offset-4"
                >
                  Conoce nuestras clases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
