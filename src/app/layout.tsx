import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softver",
  description: `Softver es una empresa innovadora que ofrece soluciones tecnológicas integrales en desarrollo de software, hardware, IA e 
    impresión 3D. Contamos con un equipo altamente calificado y experimentado para ofrecerte la mejor solución a tus necesidades.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
