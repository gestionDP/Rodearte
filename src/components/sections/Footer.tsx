import Link from "next/link";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/34687575521";

const footerLinks = {
  navegacion: [
    { href: "#clases", label: "Clases", external: false },
    { href: "#sobre", label: "Sobre", external: false },
    { href: "#mono", label: "Ropa", external: false },
    { href: WHATSAPP_URL, label: "Contacto", external: true },
  ],
  contacto: [
    { label: "WhatsApp", value: "+34 687 575 521", href: WHATSAPP_URL },
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
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Rodearte">
              {/* Logo para mobile */}
              <Image
                src="/logos/6.svg"
                alt="Rodearte"
                height={180}
                width={144}
                className="h-32 w-auto sm:h-40 md:hidden"
              />
              {/* Logo para desktop */}
              <Image
                src="/logos/1.svg"
                alt="Rodearte"
                height={180}
                width={144}
                className="hidden md:block md:h-[180px] md:w-[144px]"
              />
            </Link>
            <p className="text-sm text-muted-foreground font-sans">
              Un espacio de movimiento consciente para escucharte y habitarte.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground font-sans mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground font-sans mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              {footerLinks.contacto.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors"
                  >
                    {item.label}:{" "}
                    <span className="text-foreground">{item.value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
