import type { ComponentType } from "react";
import {
  FlowerIcon as Flower, FlowerLotusIcon as FlowerLotus, TreeIcon as Tree,
  SunIcon as Sun, CrownIcon as Crown, CrownSimpleIcon as CrownSimple,
  FireIcon as Fire, SparkleIcon as Sparkle, DropIcon as Drop,
  WindIcon as Wind, CoffeeBeanIcon as CoffeeBean,
} from "@phosphor-icons/react/dist/ssr";
import type { IconName } from "@/lib/products";

export type IconComp = ComponentType<{
  className?: string;
  weight?: "regular" | "fill" | "bold";
  size?: number | string;
}>;

const MAP: Record<IconName, IconComp> = {
  flower: Flower,
  flowerLotus: FlowerLotus,
  tree: Tree,
  sun: Sun,
  crown: Crown,
  crownSimple: CrownSimple,
  fire: Fire,
  sparkle: Sparkle,
  drop: Drop,
  wind: Wind,
  coffee: CoffeeBean,
};

export function ProductIcon({
  name,
  className,
  weight = "regular",
}: {
  name: IconName;
  className?: string;
  weight?: "regular" | "fill" | "bold";
}) {
  const C = MAP[name] ?? Sparkle;
  return <C className={className} weight={weight} aria-hidden />;
}
