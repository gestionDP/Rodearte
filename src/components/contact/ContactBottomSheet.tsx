"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactBottomSheet({
  open,
  onOpenChange,
}: ContactBottomSheetProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xdkqgwva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          onOpenChange(false);
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] max-h-[600px]">
        <SheetHeader className="text-left">
          <SheetTitle className="text-2xl font-serif text-foreground">
            Contacto
          </SheetTitle>
          <SheetDescription className="text-muted-foreground font-sans">
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Nombre */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground font-sans block"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-input bg-background rounded-md text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="Tu nombre"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground font-sans block"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-input bg-background rounded-md text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="tu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground font-sans block"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-input bg-background rounded-md text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="+34 XXX XXX XXX"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground font-sans block"
            >
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-input bg-background rounded-md text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
              placeholder="Cuéntanos en qué podemos ayudarte..."
            />
          </div>

          {submitStatus.type && (
            <div
              className={cn(
                "p-4 rounded-md font-sans text-sm",
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              )}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-sans"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
            <SheetClose asChild>
              <Button
                type="button"
                variant="outline"
                className="font-sans"
                onClick={() => {
                  setFormData({ name: "", email: "", phone: "", message: "" });
                  setSubmitStatus({ type: null, message: "" });
                }}
              >
                Cancelar
              </Button>
            </SheetClose>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

