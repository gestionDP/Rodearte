"use client";

import { useState } from "react";
import { ContactBottomSheet } from "@/components/contact/ContactBottomSheet";

interface ContactButtonProps {
  className?: string;
  children: React.ReactNode;
}

/** Botón que abre el formulario de contacto (Formspree) en un panel inferior. */
export function ContactButton({ className, children }: ContactButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <ContactBottomSheet open={open} onOpenChange={setOpen} />
    </>
  );
}
