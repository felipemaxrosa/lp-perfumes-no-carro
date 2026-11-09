"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { XIcon, WhatsappLogoIcon, MagnifyingGlassPlusIcon } from "@phosphor-icons/react/dist/ssr";
import { PhotoFrame } from "@/components/PhotoFrame";
import { wa, msgProduto } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";

/** Foto do card + lightbox em tela cheia ao clicar. */
export function ProductMedia({
  p,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 1024px) 50vw, 33vw",
}: {
  p: Product;
  aspect?: string;
  sizes?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver ${p.nome} em tela cheia`}
        className="group/ph relative block w-full cursor-zoom-in"
      >
        <PhotoFrame
          src={p.img}
          alt={`Perfume ${p.nome} 15ml`}
          pos={p.pos}
          icon={p.icon}
          aspect={aspect}
          sizes={sizes}
        />
        <span
          aria-hidden
          className="absolute top-2 right-2 z-30 grid place-items-center w-8 h-8 rounded-full bg-obsidian/55 backdrop-blur-sm text-gold opacity-0 group-hover/ph:opacity-100 transition"
        >
          <MagnifyingGlassPlusIcon weight="bold" />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={p.nome}
        >
          <div
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute -top-3 -right-3 z-20 grid place-items-center w-10 h-10 rounded-full bg-surface border border-gold/30 text-white hover:text-gold hover:border-gold/60 active:scale-95 transition"
            >
              <XIcon weight="bold" />
            </button>
            <Image
              src={p.img}
              alt={`Perfume ${p.nome} 15ml`}
              width={640}
              height={626}
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl ring-1 ring-gold/25 bg-surface"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-xl font-semibold">{p.nome}</h3>
              <p className="text-gold/80 text-[11px] uppercase tracking-wide mt-1">{p.familia}</p>
              <a
                href={wa(msgProduto(p.nome))}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald/25 active:scale-[.98] transition"
              >
                Quero este <WhatsappLogoIcon weight="fill" className="text-base" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
