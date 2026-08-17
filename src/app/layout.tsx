import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kelly Camargo | Nutricionista Funcional — Nutrição com Equilíbrio e Ciência",
  description:
    "Nutricionista funcional especializada em emagrecimento saudável, saúde intestinal, hormonal e performance. Consultas online e presenciais com atendimento humanizado e resultados duradouros.",
  keywords: [
    "nutricionista",
    "nutrição funcional",
    "emagrecimento saudável",
    "saúde intestinal",
    "nutrição esportiva",
    "Kelly Camargo",
    "nutricionista online",
    "plano alimentar personalizado",
  ],
  openGraph: {
    title: "Kelly Camargo | Nutricionista Funcional",
    description:
      "Nutrição sem radicalismo: conquiste sua melhor versão com equilíbrio, ciência e autonomia alimentar.",
    type: "website",
    locale: "pt_BR",
    siteName: "Kelly Camargo Nutrição",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
