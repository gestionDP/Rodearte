"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#clases", label: "Clases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#mono", label: "MONO" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-10"
            aria-label="Rodearte"
          >
            <Image
              src="/logos/1.svg"
              alt="Rodearte"
              width={120}
              height={150}
              className="h-12 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-sans text-foreground hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-background text-foreground hover:bg-secondary hover:text-secondary-foreground"
            >
              <Link href="#reservar">Reservar clase</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-base font-sans text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="#reservar" onClick={handleLinkClick}>
                      Reservar clase
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

