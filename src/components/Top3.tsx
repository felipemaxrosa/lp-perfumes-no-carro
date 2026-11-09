import { WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Pyramid, FamiliaBadge } from "@/components/ProductCard";
import { TOP3 } from "@/lib/products";
import { wa, msgProduto } from "@/lib/whatsapp";

export function Top3() {
  return (
    <section id="top3" className="relative">
      <div className="h-px gold-rule opacity-40" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[.25em] uppercase text-gold/80">🏆 Campeões de Preferência</span>
          <h2 className="fade-up font-display text-2xl sm:text-4xl font-semibold mt-3">As 3 fragrâncias que mais esgotam nas corridas</h2>
          <p className="fade-up text-muted mt-3 text-sm">Se estiver no veículo, peça o provador agora mesmo.</p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {TOP3.map((p) => (
            <article key={p.nome} className="snap-center shrink-0 w-[82%] sm:w-auto glass hairline rounded-3xl overflow-hidden flex flex-col">
              <PhotoFrame src={p.img} alt={`Perfume ${p.nome} 15ml`} pos={p.pos} icon={p.icon} aspect="aspect-square" sizes="(max-width: 640px) 82vw, 33vw" />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[11px] tracking-wider uppercase text-gold flex items-center gap-1.5">{p.emoji} {p.rank}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{p.nome}</h3>
                <p className="text-muted text-sm">{p.perfil}</p>
                <div className="mt-2"><FamiliaBadge familia={p.familia} /></div>
                <Pyramid p={p} />
                {p.inspiracao && (
                  <p className="mt-2.5 text-[11px] text-muted leading-snug">
                    <span className="text-gold/70">Inspiração:</span> <span className="italic">{p.inspiracao}</span>
                  </p>
                )}
                <div className="mt-auto pt-5">
                  <a href={wa(msgProduto(p.nome))} target="_blank" rel="noopener"
                     className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald/25 hover:brightness-110 active:scale-[.98] transition">
                    Experimentar Este <WhatsappLogo weight="fill" className="text-base" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
