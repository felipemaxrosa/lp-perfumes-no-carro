import Image from "next/image";
import { ProductIcon } from "@/components/icons";
import { BLUR } from "@/lib/blur.generated";
import type { IconName } from "@/lib/products";

/** Foto do produto com scrim escuro + moldura + fallback (ícone dourado atrás). */
export function PhotoFrame({
  src,
  alt,
  pos,
  icon,
  aspect,
  sizes,
}: {
  src: string;
  alt: string;
  pos: string;
  icon: IconName;
  aspect: string; // ex.: "aspect-square" | "aspect-[4/3]"
  sizes: string;
}) {
  const blur = BLUR[src];
  return (
    <div className={`relative ${aspect} overflow-hidden bg-gradient-to-br from-gold/20 via-surface to-obsidian`}>
      <div className="absolute inset-0 grid place-items-center text-gold/30 text-6xl">
        <ProductIcon name={icon} />
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={65}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        className="object-cover"
        style={{ objectPosition: pos }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
    </div>
  );
}
