import { WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { wa, msgCombo } from "@/lib/whatsapp";

export function Combos() {
  return (
    <section id="combos" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="text-center mb-11">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[.25em] uppercase text-gold/80">🏷️ Tabela Exclusiva no Carro</span>
        <h2 className="fade-up font-display text-2xl sm:text-4xl font-semibold mt-3">Leve mais, pague menos por unidade</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3 md:items-center">
        {/* 1 unidade */}
        <div className="fade-up glass hairline rounded-2xl p-7 flex flex-col">
          <p className="font-display uppercase tracking-[.18em] text-sm text-gold">Experiência Individual</p>
          <div className="mt-5 flex items-end gap-1"><span className="text-muted text-lg mb-1">R$</span><span className="font-display text-5xl font-semibold">50</span></div>
          <p className="text-muted text-sm mt-1">1 perfume · R$50 por frasco</p>
          <p className="text-muted text-xs mt-4 flex-1">Perfeito para experimentar: escolha a fragrância que é a sua cara e saia perfumado.</p>
          <a href={wa(msgCombo("Experiência Individual", 1, 50))} target="_blank" rel="noopener"
             className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:border-emerald hover:text-emerald transition">
            Quero 1 Unidade <WhatsappLogo weight="fill" />
          </a>
        </div>

        {/* Trio — destaque */}
        <div className="fade-up relative glass rounded-3xl p-8 md:-my-4 md:scale-[1.04] glow-gold order-first md:order-none">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-obsidian whitespace-nowrap">🔥 Mais Escolhido</span>
          <p className="font-display uppercase tracking-[.18em] text-base gold-text font-semibold mt-2">Trio Colecionador</p>
          <div className="mt-5 flex items-end gap-1"><span className="text-gold text-lg mb-1">R$</span><span className="font-display text-6xl font-bold gold-text">120</span></div>
          <p className="text-sm mt-1 text-white">3 perfumes · R$40 por frasco</p>
          <span className="mt-3 inline-block rounded-full bg-emerald/15 text-emerald text-xs font-semibold px-3 py-1">Economia total de R$30</span>
          <p className="text-muted text-xs mt-4">O queridinho: monte sua coleção ou presenteie quem você ama — saindo a só R$40 cada.</p>
          <a href={wa(msgCombo("Trio Colecionador", 3, 120))} target="_blank" rel="noopener"
             className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-bold text-obsidian hover:brightness-110 transition">
            Aproveitar o Trio por R$120 <WhatsappLogo weight="fill" />
          </a>
        </div>

        {/* 2 unidades */}
        <div className="fade-up glass hairline rounded-2xl p-7 flex flex-col">
          <p className="font-display uppercase tracking-[.18em] text-sm text-gold">Duo Elegância</p>
          <div className="mt-5 flex items-end gap-1"><span className="text-muted text-lg mb-1">R$</span><span className="font-display text-5xl font-semibold">90</span></div>
          <p className="text-muted text-sm mt-1">2 perfumes · R$45 por frasco</p>
          <span className="mt-3 inline-block rounded-full bg-emerald/15 text-emerald text-xs font-semibold px-3 py-1">Economia de R$10</span>
          <p className="text-muted text-xs mt-4 flex-1">Um para o dia, outro para a noite — ou divida com quem você ama.</p>
          <a href={wa(msgCombo("Duo Elegância", 2, 90))} target="_blank" rel="noopener"
             className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:border-emerald hover:text-emerald transition">
            Garantir 2 Unidades <WhatsappLogo weight="fill" />
          </a>
        </div>
      </div>
    </section>
  );
}
