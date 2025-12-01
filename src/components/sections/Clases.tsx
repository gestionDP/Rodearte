import Image from "next/image";
import Link from "next/link";
import { Zap, Heart, Wind, Sparkles } from "lucide-react";

const clases = [
  {
    id: "01",
    nombre: "Full Body",
    descripcion: "Fuerza suave, movilidad y energía.",
    descripcionLarga: "Un trabajo completo para activar cuerpo y presencia.",
    beneficios: [
      { label: "Fuerza", icon: Zap },
      { label: "Movilidad", icon: Heart },
      { label: "Energía", icon: Sparkles },
    ],
    imagen: "/jpg/fullBody.jpg", // Placeholder - reemplazar con imagen de clase con pesas
  },
  {
    id: "02",
    nombre: "Deep Stretch",
    descripcion: "Apertura, calma y respiración profunda.",
    descripcionLarga: "Moverse despacio también transforma.",
    beneficios: [
      { label: "Apertura", icon: Heart },
      { label: "Calma", icon: Wind },
      { label: "Respiración", icon: Wind },
    ],
    imagen: "/jpg/Rodearte_01-47.jpg", // Placeholder - reemplazar con imagen de clase estirando
  },
  {
    id: "03",
    nombre: "Somática Creativa",
    descripcion: "Movimiento para soltar, sentir y expresar.",
    descripcionLarga: "Un diálogo íntimo entre cuerpo y emoción.",
    beneficios: [
      { label: "Liberación", icon: Sparkles },
      { label: "Expresión", icon: Heart },
      { label: "Conexión", icon: Heart },
    ],
    imagen: "/jpg/Rodearte_01-50.jpg", // Placeholder - reemplazar con imagen de palma + cielo
  },
  {
    id: "04",
    nombre: "Relajación & Breathwork",
    descripcion: "Regular tu sistema y bajar al cuerpo.",
    descripcionLarga: "Respirar para volver a ti.",
    beneficios: [
      { label: "Relajación", icon: Wind },
      { label: "Respiración", icon: Wind },
      { label: "Presencia", icon: Heart },
    ],
    imagen: "/jpg/Rodearte_01-8.jpg", // Placeholder - reemplazar con imagen de taza + incienso
  },
];

export function Clases() {
  return (
    <section id="clases" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Lo que hacemos
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-sans text-muted-foreground">
              Diferentes formas de movimiento y acompañamiento para encontrarte
              exactamente donde estás.
            </p>
          </div>
        </div>

        {/* Lista de clases */}
        <div className="space-y-0">
          {clases.map((clase, index) => {
            const IconComponent = clase.beneficios[0]?.icon || Zap;
            return (
              <div key={clase.id}>
                {index > 0 && (
                  <div className="border-t border-border/50 my-6 sm:my-8 md:my-12" />
                )}
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 md:gap-8 items-start lg:items-center">
                  {/* Número */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-muted-foreground/40">
                    {clase.id}
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">
                        {clase.nombre}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg font-sans text-muted-foreground mb-1">
                        {clase.descripcion}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-sans text-muted-foreground/80">
                        {clase.descripcionLarga}
                      </p>
                    </div>

                    {/* Beneficios */}
                    <div className="flex flex-wrap gap-2">
                      {clase.beneficios.map((beneficio, idx) => {
                        const Icon = beneficio.icon;
                        return (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-sans text-foreground"
                          >
                            <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{beneficio.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Imagen */}
                  <div className="relative w-full lg:w-64 h-40 sm:h-48 md:h-64 lg:h-80 overflow-hidden rounded-lg">
                    <Image
                      src={clase.imagen}
                      alt={clase.nombre}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 256px"
                    />
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
