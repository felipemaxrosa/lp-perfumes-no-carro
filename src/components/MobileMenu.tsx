"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ListIcon, XIcon, WhatsappLogoIcon, InstagramLogoIcon, MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import { wa, MSG_GERAL } from "@/lib/whatsapp";
import { INSTAGRAM } from "@/lib/products";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/#top3", label: "Top 3" },
  { href: "/#combos", label: "Combos" },
  { href: "/catalogo", label: "Catálogo" },
];

export function MobileMenu() {
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
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="grid place-items-center w-10 h-10 rounded-full border border-white/15 text-gold hover:border-gold/50 active:scale-95 transition"
      >
        <ListIcon weight="bold" className="text-xl" />
      </button>

      <div className={`fixed inset-0 z-[60] ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
        {/* backdrop */}
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-obsidian/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        {/* painel */}
        <nav
          className={`absolute right-0 top-0 h-full w-[82%] max-w-xs header-glass border-l border-gold/25 p-6 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display tracking-[.14em] uppercase gold-text font-semibold text-sm">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-muted hover:text-white hover:border-white/30 active:scale-95 transition"
            >
              <XIcon weight="bold" />
            </button>
          </div>

          <div className="mt-6 flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3.5 border-b border-white/5 font-display text-lg hover:text-gold transition"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <a
            href={wa(MSG_GERAL)}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald/25 active:scale-[.98] transition"
          >
            <WhatsappLogoIcon weight="fill" className="text-lg" /> Falar com Fábio
          </a>

          {INSTAGRAM && (
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold transition"
            >
              <InstagramLogoIcon weight="fill" className="text-lg" /> Instagram
            </a>
          )}

          <p className="mt-auto pt-6 text-[11px] text-muted flex items-center gap-2">
            <MapPinIcon className="text-gold" /> Caraguatatuba · Pronta-entrega
          </p>
        </nav>
      </div>
    </div>
  );
}
