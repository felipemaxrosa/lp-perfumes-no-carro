import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Perfumes no Carro — Alta Perfumaria & Praticidade · Caraguatatuba",
  description:
    "Perfumes importados de bolso (15ml) com alta fixação, inspirados nos clássicos mais desejados do mundo. Experimente na corrida ou receba em qualquer bairro de Caraguatatuba.",
  openGraph: {
    title: "Perfumes no Carro — Alta Perfumaria & Praticidade",
    description:
      "Fragrâncias de bolso de 15ml com fixação intensa. Caraguatatuba / Litoral Norte - SP.",
    images: ["/assets/logo.png"],
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D11",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="bg-obsidian text-white font-body antialiased selection:bg-gold/30">
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
