import Image from "next/image";
import { MapPinIcon as MapPin, WhatsappLogoIcon as WhatsappLogo, InstagramLogoIcon as InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { wa, MSG_GERAL } from "@/lib/whatsapp";
import { INSTAGRAM } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-gold/20">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 relative">
                <Image src="/assets/mark.png" alt="Perfumes no Carro" fill sizes="32px" className="object-contain" />
              </span>
              <p className="font-display tracking-[.14em] uppercase gold-text font-semibold text-sm">Perfumes no Carro</p>
            </div>
            <p className="text-muted text-sm mt-3">Alta Perfumaria &amp; Praticidade.</p>
            <p className="text-muted text-sm mt-1 flex items-center gap-2"><MapPin className="text-gold" /> Caraguatatuba / Litoral Norte - SP</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={wa(MSG_GERAL)} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition">
              <WhatsappLogo weight="fill" className="text-lg" /> (12) 98103-9652
            </a>
            {INSTAGRAM && (
              <a href={INSTAGRAM} target="_blank" rel="noopener"
                 className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold hover:border-gold hover:text-gold transition">
                <InstagramLogo weight="fill" className="text-lg" /> Instagram
              </a>
            )}
          </div>
        </div>
        <div className="mt-8 h-px gold-rule opacity-30" />
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted">
          <p>© 2026 Perfumes no Carro. Todos os direitos reservados.</p>
          <p>Contratipos inspirados na linha Moments Paris.</p>
        </div>
        <p className="mt-5 text-center text-[11px] text-muted">
          Desenvolvido por{" "}
          <a
            href="https://maxdigitalstudio.com.br/"
            target="_blank"
            rel="noopener"
            className="text-gold underline-offset-2 hover:underline hover:brightness-110 transition"
          >
            Max Digital Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
