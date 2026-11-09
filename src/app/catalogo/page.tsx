import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon as ArrowLeft, WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogGrid } from "@/components/CatalogGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { wa, msgCombo } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Catálogo Completo — Perfumes no Carro · Caraguatatuba",
  description:
    "Catálogo completo das fragrâncias Perfumes no Carro — pocket 15ml com alta fixação. Filtre por perfil e peça pelo WhatsApp em Caraguatatuba.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header page="catalogo" />
      <main>
        <section className="relative overflow-hidden vignette">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule opacity-60" />
          <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:pt-16 sm:pb-10 text-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-gold transition mb-5">
              <ArrowLeft /> Voltar para a home
            </Link>
            <span className="block text-[11px] tracking-[.3em] uppercase text-gold/80">Coleção completa</span>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold mt-3">Catálogo Completo</h1>
            <p className="text-muted mt-4 max-w-lg mx-auto text-sm">
              Todas as fragrâncias em 15ml, com alta fixação. Filtre por perfil e toque para pedir pelo WhatsApp.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <CatalogGrid />

          <div className="mt-14 glass hairline rounded-3xl p-8 text-center">
            <h2 className="font-display text-xl sm:text-2xl font-semibold">Leve mais, pague menos por unidade</h2>
            <p className="text-muted text-sm mt-2">1un R$50 · 2un R$90 · <span className="text-gold">3un R$120</span> (R$40 cada).</p>
            <a
              href={wa(msgCombo("Trio Colecionador", 3, 120))}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-obsidian hover:brightness-110 transition"
            >
              Montar meu combo <WhatsappLogo weight="fill" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
