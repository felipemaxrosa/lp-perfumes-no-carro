/** Config central do site (SEO). Trocar o domínio aqui ou via NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://perfumesnocarro.com.br"
).replace(/\/+$/, "");

export const SITE_NAME = "Perfumes no Carro";
export const REGIAO = "Litoral Norte de São Paulo";
export const CIDADES = ["Caraguatatuba", "São Sebastião", "Ubatuba", "Ilhabela"] as const;
