import { QrCodeIcon as QrCode, MagnifyingGlassIcon as MagnifyingGlass, HandPointingIcon as HandPointing, SealCheckIcon as SealCheck, WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { IconComp } from "@/components/icons";
import { wa, MSG_GERAL } from "@/lib/whatsapp";

const PASSOS: { icon: IconComp; titulo: string; texto: string }[] = [
  { icon: MagnifyingGlass, titulo: "1 · Escolha sem pressa", texto: "Navegue pelo catálogo e veja as notas que mais combinam com o seu estilo." },
  { icon: HandPointing, titulo: "2 · Peça a fita olfativa", texto: "Avise: “Fábio, pode me mostrar o frasco de [Nome]?” Teste na pele ou na fita, sem compromisso." },
  { icon: SealCheck, titulo: "3 · Pague e leve", texto: "Gostou? Aceitamos Pix, cartão no veículo ou dinheiro. Saia da corrida perfumado." },
];

export function NoCarro() {
  return (
    <section className="relative overflow-hidden">
      <div className="vignette absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <div className="glass hairline rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full hairline px-4 py-1.5 text-[11px] tracking-[.22em] uppercase text-gold/90">
              <QrCode /> Está no carro do Fábio agora?
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold mt-5">Escaneou o QR Code? É rápido.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {PASSOS.map(({ icon: Ico, titulo, texto }) => (
              <div key={titulo} className="text-center">
                <div className="mx-auto mb-4 grid place-items-center w-14 h-14 rounded-2xl hairline bg-gold/5 text-gold text-2xl"><Ico /></div>
                <p className="font-display text-sm uppercase tracking-wider text-gold mb-1">{titulo}</p>
                <p className="text-muted text-sm">{texto}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={wa(MSG_GERAL)} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold hover:brightness-110 transition">
              <WhatsappLogo weight="fill" className="text-lg" /> Falar com o Fábio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
