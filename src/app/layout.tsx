import type { Metadata } from "next";
import { Noto_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodearte · Tu espacio de movimiento consciente",
  description:
    "Estudio de movimiento consciente en L'Eliana: clases de barre, ballet y stretch, ropa Rodearte y masaje ayurvédico. Un espacio íntimo para escucharte y habitarte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${notoSerifDisplay.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
