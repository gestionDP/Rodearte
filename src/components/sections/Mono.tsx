import Image from "next/image";

const productosMono = [
  {
    id: 1,
    nombre: "Pieza esencial",
    descripcion: "Libertad y comodidad.",
    imagen: "/jpg/Rodearte_01-83.jpg", 
  },
  {
    id: 2,
    nombre: "Movimiento fluido",
    descripcion: "Presencia en cada gesto.",
    imagen: "/jpg/Rodearte_01-78.jpg", 
  },
  {
    id: 3,
    nombre: "Conexión",
    descripcion: "Cómoda y presente.",
    imagen: "/jpg/Rodearte_01-85.jpg", 
  },
];

export function Mono() {
  return (
    <section id="mono" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background mb-4">
            MONO — Movimiento que te viste
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {productosMono.map((producto, index) => {
            const animations = [
              "animate-float-left",
              "animate-float-center",
              "animate-float-right",
            ];
            return (
              <div
                key={producto.id}
                className={`rounded-lg overflow-hidden ${animations[index]}`}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md rounded-lg px-4 py-3 border border-background/30 shadow-lg">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-1">
                      {producto.nombre}
                    </h3>
                    <p className="text-sm md:text-base font-sans text-muted-foreground">
                      {producto.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg font-sans text-background/90 leading-relaxed">
            Una línea de ropa creada para acompañarte en tu práctica. Piezas
            para sentirse libre, cómoda y presente.
          </p>
        </div>
      </div>
    </section>
  );
}
