import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Museo interactivo TIC y Arte",
  description: "Recorrido narrativo en seis salas sobre tecnologia, cultura y creacion artistica."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
