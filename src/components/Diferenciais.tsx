import { SprayBottleIcon as SprayBottle, HandPointingIcon as HandPointing, TagIcon as Tag, MapPinIcon as MapPin } from "@phosphor-icons/react/dist/ssr";
import type { IconComp } from "@/components/icons";

const ITENS: { icon: IconComp; titulo: string; texto: string }[] = [
  { icon: SprayBottle, titulo: "Tamanho Pocket (15ml)", texto: "Seu perfume favorito sempre com você — na bolsa, mochila ou porta-luvas." },
  { icon: HandPointing, titulo: "Prove Antes de Levar", texto: "Sinta na pele com a fita olfativa. Só leva quem se apaixona." },
  { icon: Tag, titulo: "Fixação de Grife", texto: "Alta concentração que dura o dia todo — sem o preço de grife." },
  { icon: MapPin, titulo: "Caraguá e Região", texto: "Leve na hora na corrida ou receba em casa, em qualquer bairro." },
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
