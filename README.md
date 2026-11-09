# Perfumes no Carro — Next.js 16

Site de conversão para WhatsApp do **Fábio** (perfumes de bolso 15ml da linha Moments Paris em
Caraguatatuba/SP). Visual "Dark Mode / Luxo Acessível" — Noturno Dourado (Cinzel + Ouro Imperial +
glassmorphism). Reconstruído a partir do protótipo HTML validado.

## Stack
- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (tokens em `src/app/globals.css`)
- Fontes via **`next/font`** (Cinzel + Plus Jakarta Sans) · ícones **`@phosphor-icons/react`**
- Imagens com **`next/image`** · **pnpm**

## Rodar
```bash
pnpm install     # se necessário
pnpm dev         # desenvolvimento (http://localhost:3000)
pnpm build       # build de produção
pnpm start       # servir o build (http://localhost:3000)
```

## Rotas
- `/` — home: Hero → Diferenciais → **Top 3** → Combos → **A Jornada da Fragrância** →
  **Destaques do catálogo (6) + "Ver Catálogo Completo"** → "Está no carro?" → Prova Social → FAQ.
- `/catalogo` — catálogo completo com **filtros** (Todos / Femininos / Masculinos / Frescos·Praia /
  Marcantes·Noite).

## Onde editar o conteúdo — `src/lib/products.ts` (fonte única)
- `WHATS` (número do WhatsApp) · `INSTAGRAM` (link do footer) · `HOME_CATALOGO` (quantos destaques na home, padrão 6).
- `TOP3` — pódio da home (nome, rank, emoji, perfil, `saida`/`corpo`/`fundo`, `img`, `pos`, `icon`).
- `CATALOGO` — fragrâncias (nome, nota, `tags`, `img`, `pos`, `icon`). `tags` controla os filtros;
  unissex recebe `Femininos` **e** `Masculinos`.
- `DEPOIMENTOS` e `FAQ`.
- Mensagens do WhatsApp em `src/lib/whatsapp.ts`. `pos` = CSS `object-position` para enquadrar a foto.
- Ícones: `icon` usa chaves mapeadas em `src/components/icons.tsx` (ex.: `flower`, `tree`, `crown`).

## Estrutura
```
public/assets/            logo.png, mark.png, favicon.png + 12 fotos .jpg
src/
  app/
    layout.tsx            fontes, metadata/OG, FloatingWhatsapp
    page.tsx              home (/)
    catalogo/page.tsx     catálogo (/catalogo)
    globals.css           Tailwind v4 + tokens + utilitários da marca
    icon.png, apple-icon.png   favicons (file convention)
  components/             Header, Hero, Diferenciais, Top3, Combos, Jornada,
                          CatalogPreview, CatalogGrid(client), ProductCard, PhotoFrame,
                          NoCarro, ProvaSocial, Faq, Footer, FloatingWhatsapp, ScrollReveal(client), icons
  lib/                    products.ts (dados), whatsapp.ts (links)
```

## Convenção
Notas olfativas sempre **Saída · Corpo · Fundo** (nunca Topo/Coração/Base).

## Antes de publicar
- Ajustar `metadataBase` em `src/app/layout.tsx` para o domínio real (hoje `http://localhost:3000`) — afeta a prévia OG.
- **Top 3** = 412 VIP Rosé · Milionere · Coco (do briefing). Catálogo completo com os outros 9
  (decidir se os 3 do pódio também entram no catálogo).
- **Depoimentos** são exemplos do briefing — confirmar se são reais.
- A arte do **412 VIP Rosé** traz "Carolina Herrera" escrito; trocar se quiser evitar citar a marca original.

## Deploy
Pronto para **Vercel** (`vercel` ou conectar o repositório). `pnpm build` já valida tipos e gera as
páginas estáticas.
