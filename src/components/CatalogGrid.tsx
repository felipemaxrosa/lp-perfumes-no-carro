"use client";

import { useMemo, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { ProductCard } from "@/components/ProductCard";
import { CATALOGO, FILTROS } from "@/lib/products";

const PER_PAGE = 9;
const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function CatalogGrid() {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todos");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const resultado = useMemo(() => {
    const q = norm(query.trim());
    return CATALOGO.filter((p) => {
      if (filtro !== "Todos" && p.grupo !== filtro) return false;
      if (!q) return true;
      const hay = norm(
        [p.nome, p.familia, p.grupo, p.saida, p.corpo, p.fundo, p.inspiracao ?? ""].join(" "),
      );
      return hay.includes(q);
    });
  }, [filtro, query]);

  const totalPages = Math.max(1, Math.ceil(resultado.length / PER_PAGE));
  const pageSafe = Math.min(page, totalPages);
  const slice = resultado.slice((pageSafe - 1) * PER_PAGE, pageSafe * PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div ref={topRef} className="scroll-mt-24">
        {/* Busca */}
        <div className="relative max-w-md mx-auto mb-6">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/70 text-lg" />
          <input
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            placeholder="Buscar por nome, família, nota ou inspiração…"
            aria-label="Buscar fragrância"
            className="w-full rounded-full glass hairline pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted/80 focus:outline-none focus:border-gold/60 transition"
          />
        </div>

        {/* Filtros por família */}
        <div className="flex flex-wrap justify-center gap-2 mb-9">
          {FILTROS.map((f) => {
            const ativo = f === filtro;
            return (
              <button
                key={f}
                type="button"
                onClick={() => { setFiltro(f); setPage(1); }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  ativo ? "bg-gold text-obsidian" : "bg-white/5 text-muted hover:text-white"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {slice.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {slice.map((p) => <ProductCard key={p.nome} p={p} />)}
        </div>
      ) : (
        <p className="text-center text-muted text-sm py-12">
          Nenhuma fragrância encontrada. Tente outro termo ou família.
        </p>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => goTo(Math.max(1, pageSafe - 1))}
            disabled={pageSafe === 1}
            className="rounded-full px-3 py-2 text-sm bg-white/5 text-muted hover:text-white disabled:opacity-40 transition"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goTo(n)}
              aria-current={n === pageSafe ? "page" : undefined}
              className={`w-9 h-9 rounded-full text-sm font-semibold transition ${
                n === pageSafe ? "bg-gold text-obsidian" : "bg-white/5 text-muted hover:text-white"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo(Math.min(totalPages, pageSafe + 1))}
            disabled={pageSafe === totalPages}
            className="rounded-full px-3 py-2 text-sm bg-white/5 text-muted hover:text-white disabled:opacity-40 transition"
          >
            Próxima
          </button>
        </div>
      )}

      <p className="mt-6 text-center text-muted text-xs">
        {resultado.length} {resultado.length === 1 ? "fragrância" : "fragrâncias"}
        {query.trim()
          ? ` para “${query.trim()}”`
          : filtro !== "Todos"
            ? ` em ${filtro}`
            : " na coleção"}
      </p>
    </>
  );
}
