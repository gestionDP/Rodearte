import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16 md:pt-20">
        {/* Sección Hero - Placeholder */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-serif text-foreground mb-4">
              Bienvenido a Rodearte
            </h1>
            <p className="text-center font-sans text-muted-foreground max-w-2xl mx-auto">
              Esta es tu landing page con la paleta de colores y fuentes
              personalizadas. Los títulos usan{" "}
              <span className="font-serif">Noto Serif Display</span> y el texto
              usa <span className="font-sans">Montserrat</span>.
            </p>
          </div>
        </section>

        {/* Placeholder para las demás secciones */}
        <section id="clases" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-serif text-foreground mb-8">
              Clases
            </h2>
          </div>
        </section>

        <section id="sobre" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-serif text-foreground mb-8">
              Sobre
            </h2>
          </div>
        </section>

        <section id="mono" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-serif text-foreground mb-8">
              MONO
            </h2>
          </div>
        </section>

        <section id="contacto" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-serif text-foreground mb-8">
              Contacto
            </h2>
          </div>
        </section>

        <section id="reservar" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-serif text-foreground mb-8">
              Reservar clase
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
