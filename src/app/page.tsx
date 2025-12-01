import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pilares } from "@/components/sections/Pilares";
import { QueEsRodearte } from "@/components/sections/QueEsRodearte";
import { Clases } from "@/components/sections/Clases";
import { Mono } from "@/components/sections/Mono";
import { Pasaporte } from "@/components/sections/Pasaporte";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        {/* Sección 2: Pilares Rodearte */}
        <Pilares />

        {/* Sección 3: Qué es Rodearte */}
        <QueEsRodearte />

        {/* Sección 4: Clases */}
        <Clases />

        {/* Sección 6: MONO */}
        <Mono />

        {/* Sección 8: Pasaporte de Asistencia */}
        <Pasaporte />
      </main>
      <Footer />
    </>
  );
}
