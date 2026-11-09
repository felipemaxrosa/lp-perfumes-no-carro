import { SprayBottleIcon as SprayBottle, HandPointingIcon as HandPointing, TagIcon as Tag, MapPinIcon as MapPin } from "@phosphor-icons/react/dist/ssr";
import type { IconComp } from "@/components/icons";

const ITENS: { icon: IconComp; titulo: string; texto: string }[] = [
  { icon: SprayBottle, titulo: "Tamanho Pocket (15ml)", texto: "Cabe na bolsa, mochila ou porta-luvas." },
  { icon: HandPointing, titulo: "Experimente no Banco", texto: "Peça a fita olfativa antes de desembarcar." },
  { icon: Tag, titulo: "Economia Real", texto: "Alta concentração com valor acessível." },
  { icon: MapPin, titulo: "Caraguá e Região", texto: "Retirada na corrida ou entrega na cidade." },
];

export function Diferenciais() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {ITENS.map(({ icon: Ico, titulo, texto }) => (
          <div key={titulo} className="fade-up flex items-start gap-3">
            <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl hairline bg-gold/5 text-gold text-xl">
              <Ico />
            </span>
            <div>
              <p className="font-semibold text-sm">{titulo}</p>
              <p className="text-muted text-xs mt-0.5">{texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
