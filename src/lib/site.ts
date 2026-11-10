/** Config central do site (SEO).
 * Ordem: NEXT_PUBLIC_SITE_URL (domínio real quando definido) ->
 * domínio de produção da Vercel (auto, enquanto não há domínio próprio) -> fallback.
 * Garante que og:image/canonical/sitemap apontem para um domínio que de fato responde. */
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProd ? `https://${vercelProd}` : "https://perfumesnocarro.com.br")
).replace(/\/+$/, "");

export const SITE_NAME = "Perfumes no Carro";
export const REGIAO = "Litoral Norte de São Paulo";
export const CIDADES = ["Caraguatatuba", "São Sebastião", "Ubatuba", "Ilhabela"] as const;
