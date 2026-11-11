import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "optional",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "optional",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Perfumes no Carro — Perfumes Importados 15ml em Caraguatatuba e Litoral Norte SP",
    template: "%s | Perfumes no Carro",
  },
  description:
    "Perfumes importados de bolso (15ml) com alta fixação, inspirados nos clássicos mais desejados do mundo. Experimente na corrida ou receba em Caraguatatuba, São Sebastião, Ubatuba e Ilhabela — Litoral Norte de SP.",
  keywords: [
    "perfume importado",
    "perfume importado Caraguatatuba",
    "contratipo 15ml",
    "perfume de bolso",
    "perfume São Sebastião",
    "perfume Ubatuba",
    "perfume Ilhabela",
    "perfumaria Litoral Norte",
    "Moments Paris",
  ],
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Perfumes no Carro — Perfumes Importados 15ml · Litoral Norte SP",
    description:
      "Fragrâncias de bolso de 15ml com alta fixação. Entrega em Caraguatatuba, São Sebastião, Ubatuba e Ilhabela.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfumes no Carro — Perfumes Importados 15ml",
    description:
      "Fragrâncias de bolso de 15ml com alta fixação. Litoral Norte de São Paulo.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0D0D11",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="bg-obsidian text-white font-body antialiased selection:bg-gold/30">
        {children}
        <FloatingWhatsapp />
        <JsonLd />
      </body>
    </html>
  );
}
