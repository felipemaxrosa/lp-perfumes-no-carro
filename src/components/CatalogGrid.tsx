"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { CATALOGO, FILTROS } from "@/lib/products";

export function CatalogGrid() {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todos");
  const lista = CATALOGO.filter((p) => filtro === "Todos" || p.grupo === filtro);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-9">
        {FILTROS.map((f) => {
          const ativo = f === filtro;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                ativo ? "bg-gold text-obsidian" : "bg-white/5 text-muted hover:text-white"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {lista.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {lista.map((p) => <ProductCard key={p.nome} p={p} />)}
        </div>
      ) : (
        <p className="text-center text-muted text-sm py-10">Nenhuma fragrância nesse filtro.</p>
      )}

      <p className="mt-8 text-center text-muted text-xs">
        {lista.length} {lista.length === 1 ? "fragrância" : "fragrâncias"}
        {filtro !== "Todos" ? ` em ${filtro}` : " na coleção"}
      </p>
    </>
  );
}
