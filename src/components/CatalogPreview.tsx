import Link from "next/link";
import { ArrowRightIcon as ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ProductCard } from "@/components/ProductCard";
import { CATALOGO, HOME_CATALOGO } from "@/lib/products";

export function CatalogPreview() {
  const destaques = CATALOGO.slice(0, HOME_CATALOGO);
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[.25em] uppercase text-gold/80">✨ Seleção da casa</span>
        <h2 className="fade-up font-display text-2xl sm:text-4xl font-semibold mt-3">Destaques do catálogo</h2>
        <p className="fade-up text-muted mt-3 text-sm">Alguns dos nossos queridinhos. Toque para pedir — ou veja a coleção completa.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {destaques.map((p) => <ProductCard key={p.nome} p={p} />)}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/catalogo"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/5 px-7 py-3.5 font-display text-sm uppercase tracking-[.15em] text-gold hover:bg-gold hover:text-obsidian transition"
        >
          Ver Catálogo Completo <ArrowRight weight="bold" />
        </Link>
        <p className="text-muted text-xs mt-3">{CATALOGO.length} fragrâncias na coleção completa</p>
      </div>
    </section>
  );
}
