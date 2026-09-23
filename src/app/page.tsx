import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Clases } from "@/components/sections/Clases";
import { QueEsRodearte } from "@/components/sections/QueEsRodearte";
import { Ropa } from "@/components/sections/Ropa";
import { Ubicacion } from "@/components/sections/Ubicacion";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Clases />
        <QueEsRodearte />
        <Ropa />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
