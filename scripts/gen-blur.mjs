// Gera placeholders "blur" (LQIP) para cada foto de produto em public/assets/*.jpg.
// Usa `sips` (macOS) para criar um JPEG minúsculo (~10px) e grava um mapa
// src/lib/blur.generated.ts consumido por PhotoFrame (next/image placeholder="blur").
// Rode novamente sempre que adicionar/trocar fotos: `node scripts/gen-blur.mjs`.
import { readdirSync, readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ASSETS = "public/assets";
const OUT = "src/lib/blur.generated.ts";
const SIZE = 10; // largura máx. do LQIP em px

const files = readdirSync(ASSETS)
  .filter((f) => f.toLowerCase().endsWith(".jpg"))
  .sort();

const tmp = mkdtempSync(join(tmpdir(), "blur-"));
const map = {};
for (const f of files) {
  const out = join(tmp, f);
  execFileSync("sips", ["-Z", String(SIZE), "-s", "format", "jpeg", "-s", "formatOptions", "50", join(ASSETS, f), "--out", out], { stdio: "ignore" });
  map[`/assets/${f}`] = `data:image/jpeg;base64,${readFileSync(out).toString("base64")}`;
}
rmSync(tmp, { recursive: true, force: true });

const body =
  `// GERADO por scripts/gen-blur.mjs — não editar à mão.\n` +
  `// Placeholders blur (${SIZE}px) para next/image placeholder="blur".\n` +
  `export const BLUR: Record<string, string> = ${JSON.stringify(map, null, 2)};\n`;
writeFileSync(OUT, body);
console.log(`gerado ${OUT} com ${Object.keys(map).length} placeholders`);
