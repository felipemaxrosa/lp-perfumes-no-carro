import { DEPOIMENTOS } from "@/lib/products";

export function ProvaSocial() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[.25em] uppercase text-gold/80">★★★★★ Quem provou, aprovou</span>
        <h2 className="fade-up font-display text-2xl sm:text-4xl font-semibold mt-3">Experiências reais de quem subiu no carro</h2>
        <p className="fade-up text-muted mt-3 text-sm">Passageiros que entraram pra uma corrida e desceram perfumados.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {DEPOIMENTOS.map((d) => (
          <figure key={d.nome} className="glass hairline rounded-2xl p-6 flex flex-col">
            <div className="text-gold text-sm mb-3" aria-label="5 estrelas">★★★★★</div>
            <blockquote className="text-white/90 text-sm leading-relaxed flex-1">“{d.texto}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold">{d.nome}</span> <span className="text-muted">· {d.local}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
