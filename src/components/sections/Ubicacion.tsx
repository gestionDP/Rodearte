const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Rodearte%2C%20C%2F%20Piscina%20S%2FN%2C%20L%27Eliana%2C%20Valencia&z=14&output=embed";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-background pb-14 pt-10 md:pb-16 md:pt-14">
      <div className="rd-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        <div>
          <h2 className="text-h2 font-serif text-foreground">Te esperamos aquí</h2>
          <p className="text-body mt-2 font-sans text-foreground">
            <span className="block italic">C/ Piscina, S/N, L&apos;Eliana</span>
            <span className="block">Un lugar donde tu cuerpo se siente seguro</span>
          </p>
        </div>

        <div className="relative aspect-[348/155] w-full overflow-hidden bg-secondary/40 md:w-[54%]">
          <iframe
            src={MAP_EMBED_URL}
            title="Mapa de Rodearte en L'Eliana"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
