import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "@/components/contact/ContactButton";

const REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rodearte%20L%27Eliana";

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Privacidad" },
  { href: "/politica-cookies", label: "Cookies" },
  { href: "/condiciones-uso", label: "Condiciones de uso" },
  { href: "/politica-cookies", label: "Gestionar cookies" },
];

const linkClass =
  "font-sans text-[13px] text-[color:var(--cream-text)] transition-opacity hover:opacity-70";

export function Footer() {
  return (
    <footer className="bg-foreground pb-14 pt-11 text-[color:var(--cream-text)]">
      <div className="rd-container">
        <div className="flex items-start justify-between">
          <Link href="/" aria-label="Rodearte, inicio">
            <Image
              src="/logos/wordmark-cream.svg"
              alt="Rodearte"
              width={550}
              height={170}
              className="h-auto w-[130px] md:w-[160px]"
            />
          </Link>
          <nav aria-label="Enlaces del pie" className="flex items-center gap-5 pt-2">
            <ContactButton className={linkClass}>Contacto</ContactButton>
            <Link href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Reseñas
            </Link>
          </nav>
        </div>

        <nav
          aria-label="Enlaces legales"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 md:mt-6"
        >
          {legalLinks.map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-4 text-center font-sans text-[13px] text-[color:var(--cream-text)] opacity-40">
          © {new Date().getFullYear()} Rodearte. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
