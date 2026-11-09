import { SITE_URL, SITE_NAME, CIDADES, REGIAO } from "@/lib/site";
import { WHATS, INSTAGRAM } from "@/lib/products";

/** Dados estruturados LocalBusiness (SEO local — área de atendimento: Litoral Norte). */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/assets/logo.png`,
    logo: `${SITE_URL}/assets/logo.png`,
    description: `Perfumes importados de bolso (15ml) com alta fixação, inspirados nos clássicos mais desejados do mundo. Atende ${CIDADES.join(", ")} — ${REGIAO}.`,
    slogan: "O luxo dos perfumes importados no ritmo da sua rota.",
    telephone: `+${WHATS}`,
    priceRange: "R$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Pix, Cartão, Dinheiro",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caraguatatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: CIDADES.map((c) => ({ "@type": "City", name: c })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    ...(INSTAGRAM ? { sameAs: [INSTAGRAM] } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
