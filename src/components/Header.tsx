import Link from "next/link";
import Image from "next/image";
import { WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { wa, MSG_GERAL } from "@/lib/whatsapp";
import { NavLinks } from "@/components/NavLinks";
import { MobileMenu } from "@/components/MobileMenu";

export function Header({ page = "home" }: { page?: "home" | "catalogo" }) {
  return (
    <header className="sticky top-0 z-40 header-glass border-b border-gold/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 h-16 flex items-center justify-between gap-3">
        <Link href={page === "home" ? "/#inicio" : "/"} className="flex items-center gap-2.5 min-w-0">
          <span className="shrink-0 w-9 h-9 relative">
            <Image src="/assets/mark.png" alt="Perfumes no Carro" fill sizes="36px" className="object-contain" />
          </span>
          <span className="flex flex-col leading-none min-w-0">
            <span className="font-display text-[13px] sm:text-base tracking-[.14em] gold-text font-semibold uppercase truncate">
              Perfumes no Carro
            </span>
            <span className="hidden sm:block text-[9px] tracking-[.28em] text-muted uppercase mt-1">
              Caraguatatuba • Pronta-Entrega
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 shrink-0">
          <NavLinks />
          <a
            href={wa(MSG_GERAL)}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
          >
            <WhatsappLogo weight="fill" className="text-base" /> Falar com Fabio
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
