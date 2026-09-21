"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ContactButton } from "@/components/contact/ContactButton";

const navLinks = [
  { href: "#clases", label: "Clases" },
  { href: "#sobre", label: "Sobre nosotros" },
  { href: "#ropa", label: "Ropa" },
];

const contactButtonClass =
  "inline-flex items-center justify-center border-[0.5px] border-[color:var(--nav-button-border)] px-4 py-1 font-sans text-[15px] text-foreground transition-colors hover:bg-foreground hover:text-background";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="rd-container flex h-16 items-center justify-between md:h-[88px]">
        <Link href="/" aria-label="Rodearte, inicio" className="flex items-center">
          <Image
            src="/logos/wordmark.svg"
            alt="Rodearte"
            width={550}
            height={170}
            priority
            className="h-auto w-[120px] md:w-[150px] lg:w-[165px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[15px] text-foreground transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <ContactButton className={contactButtonClass}>Contacto</ContactButton>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="p-2 text-foreground md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <SheetHeader>
              <SheetTitle className="text-left font-serif text-2xl font-normal">
                Menú
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-base text-foreground"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-2 border-t border-border pt-5">
                <ContactButton className={contactButtonClass}>Contacto</ContactButton>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
