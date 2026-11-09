import { WhatsappLogoIcon as WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PhotoFrame } from "@/components/PhotoFrame";
import { wa, msgProduto } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";

/** Pirâmide olfativa como "jornada" vertical (Saída → Corpo → Fundo). */
export function Pyramid({ p }: { p: Pick<Product, "saida" | "corpo" | "fundo"> }) {
  const rows = [
    { k: "Saída", v: p.saida },
    { k: "Corpo", v: p.corpo },
    { k: "Fundo", v: p.fundo },
  ];
  return (
    <div className="mt-3.5 relative pl-4 space-y-2.5 before:content-[''] before:absolute before:left-[3px] before:top-1.5 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-gold/60 before:via-gold/30 before:to-gold/5">
      {rows.map((r) => (
        <div key={r.k} className="relative">
          <span className="absolute -left-4 top-[3px] h-[7px] w-[7px] rounded-full bg-gold ring-2 ring-surface" aria-hidden />
          <p className="text-gold text-[10px] font-semibold uppercase tracking-[.16em]">{r.k}</p>
          <p className="text-white/85 text-xs leading-snug mt-0.5">{r.v}</p>
        </div>
      ))}
    </div>
  );
}

/** Selo da família olfativa. */
export function FamiliaBadge({ familia }: { familia: string }) {
  return (
    <span className="inline-block w-max rounded-full bg-gold/10 border border-gold/25 text-gold text-[10px] uppercase tracking-wide px-2.5 py-0.5">
      {familia}
    </span>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="cat-card glass hairline rounded-2xl overflow-hidden flex flex-col group hover:border-gold/50 transition">
      <PhotoFrame
        src={p.img}
        alt={`Perfume ${p.nome} 15ml`}
        pos={p.pos}
        icon={p.icon}
        aspect="aspect-[4/3]"
        sizes="(max-width: 1024px) 50vw, 33vw"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-base sm:text-lg font-semibold leading-tight">{p.nome}</h3>
        <div className="mt-1.5"><FamiliaBadge familia={p.familia} /></div>
        <Pyramid p={p} />
        {p.inspiracao && (
          <p className="mt-3 pt-3 border-t border-white/5 text-[11px] text-muted leading-snug">
            <span className="text-gold/70 uppercase tracking-wide text-[9px]">Inspiração</span><br />
            <span className="italic text-white/70">{p.inspiracao}</span>
          </p>
        )}
        <div className="mt-auto pt-4">
          <a
            href={wa(msgProduto(p.nome))}
            target="_blank"
            rel="noopener"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald/25 hover:brightness-110 active:scale-[.98] transition"
          >
            Quero este <WhatsappLogo weight="fill" className="text-base" />
          </a>
        </div>
      </div>
    </article>
  );
}
