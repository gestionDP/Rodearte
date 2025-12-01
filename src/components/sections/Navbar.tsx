"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ContactBottomSheet } from "@/components/contact/ContactBottomSheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#clases", label: "Clases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#mono", label: "MONO" },
];

export function Navbar() {
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-sm border-border"
          : "bg-background/20 backdrop-blur-md border-white/30"
      )}
    >
      <div className="flex items-center h-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full flex-1">
          <div className="flex items-center h-full border-r border-white/30 pr-6 md:pr-8">
            <Link href="/" className="flex items-center" aria-label="Rodearte">
              <Image
                src={isScrolled ? "/logos/8.svg" : "/logos/1.svg"}
                alt="Rodearte"
                width={180}
                height={225}
                priority
                className={cn(
                  "transition-opacity duration-300",
                  isScrolled ? "h-20 lg:h-24" : ""
                )}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10 px-6 lg:px-10 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm lg:text-base font-sans transition-colors",
                  isScrolled
                    ? "text-foreground hover:text-primary-foreground"
                    : "text-white hover:text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <button className="text-foreground p-2" aria-label="Abrir menú">
                <Menu className="h-6 w-6" />
              </button>
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
                <div className="mt-4 pt-4 border-t border-border">
                  <button
                    onClick={handleContactClick}
                    className="flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-sans text-primary-foreground w-full"
                  >
                    <Phone className="h-4 w-4" />
                    Contacto
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center h-full border-l border-white/30 bg-primary w-auto">
          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-6 lg:px-8 text-primary-foreground hover:opacity-80 transition-opacity font-sans text-sm lg:text-base"
          >
            <Phone className="h-4 w-4" />
            Contacto
          </button>
        </div>
      </div>

      <ContactBottomSheet
        open={isContactOpen}
        onOpenChange={setIsContactOpen}
      />
    </nav>
  );
}
