import { WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { wa, MSG_GERAL } from "@/lib/whatsapp";

export function FloatingWhatsapp() {
  return (
    <a
      href={wa(MSG_GERAL)}
      target="_blank"
      rel="noopener"
      aria-label="Pedir no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-emerald shadow-xl shadow-emerald/30 hover:scale-105 active:scale-95 transition"
    >
      <WhatsappLogo weight="fill" className="text-3xl text-white" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald/60 animate-ping -z-10" />
    </a>
  );
}
