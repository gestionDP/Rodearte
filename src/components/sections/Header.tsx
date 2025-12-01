export function Header() {
  return (
    <header className="container mx-auto px-4 py-4 border-b border-border bg-background">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold font-serif text-foreground">Rodearte</div>
        <div className="flex gap-4 font-sans">
          <a href="#inicio" className="hover:underline text-foreground">Inicio</a>
          <a href="#sobre" className="hover:underline text-foreground">Sobre</a>
          <a href="#contacto" className="hover:underline text-foreground">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

