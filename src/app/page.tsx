import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Top3 } from "@/components/Top3";
import { Combos } from "@/components/Combos";
import { Jornada } from "@/components/Jornada";
import { CatalogPreview } from "@/components/CatalogPreview";
import { NoCarro } from "@/components/NoCarro";
import { ProvaSocial } from "@/components/ProvaSocial";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <main id="top">
        <Hero />
        <Diferenciais />
        <Top3 />
        <Combos />
        <Jornada />
        <CatalogPreview />
        <NoCarro />
        <ProvaSocial />
        <Faq />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
