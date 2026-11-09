"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NAV_ITEMS = [
  { href: "/#inicio", label: "Início", section: "inicio" },
  { href: "/#top3", label: "Top 3", section: "top3" },
  { href: "/#combos", label: "Combos", section: "combos" },
  { href: "/catalogo", label: "Catálogo", section: "catalogo" },
] as const;

const SECTIONS = ["inicio", "top3", "combos", "catalogo"] as const;

/** Item de navegação ativo: por rota em /catalogo, por scroll-spy na home. */
export function useActiveNav(): string {
  const pathname = usePathname();
  const [section, setSection] = useState<string>("inicio");

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = "inicio";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = id;
      }
      setSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return pathname === "/catalogo" ? "catalogo" : section;
}

/** Navegação do header (desktop). */
export function NavLinks() {
  const active = useActiveNav();
  return (
    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
      {NAV_ITEMS.map((it) => {
        const isActive = active === it.section;
        return (
          <Link
            key={it.href}
            href={it.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-3 py-2 text-sm transition ${isActive ? "text-gold" : "text-muted hover:text-gold"}`}
          >
            {it.label}
            <span
              aria-hidden
              className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gold transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
