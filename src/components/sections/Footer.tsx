import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  navegacion: [
    { href: "#clases", label: "Clases" },
    { href: "#sobre", label: "Sobre" },
    { href: "#mono", label: "MONO" },
    { href: "#contacto", label: "Contacto" },
  ],
  contacto: [
    { type: "phone", label: "Llámanos", value: "+34 XXX XXX XXX" },
    { type: "email", label: "Escríbenos", value: "hola@rodearte.com" },
    { type: "address", label: "Visítanos", value: "Dirección del estudio" },
  ],
  redes: [
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Facebook", href: "#", icon: "👥" },
    { name: "LinkedIn", href: "#", icon: "💼" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Rodearte">
              <Image
                src="/logos/1.svg"
                alt="Rodearte"
                width={100}
                height={125}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground font-sans">
              Un espacio de movimiento consciente para escucharte y habitarte.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-foreground font-sans mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-foreground font-sans mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              {footerLinks.contacto.map((item, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground font-sans">
                    {item.label}:{" "}
                    <span className="text-foreground">{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm font-semibold text-foreground font-sans mb-4">
              Síguenos
            </h3>
            <ul className="space-y-3">
              {footerLinks.redes.map((red) => (
                <li key={red.name}>
                  <Link
                    href={red.href}
                    className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{red.icon}</span>
                    {red.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} Rodearte. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
