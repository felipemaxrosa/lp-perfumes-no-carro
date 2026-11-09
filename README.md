# Perfumes no Carro

Landing page de conversão para WhatsApp do **Fabio** — perfumes de bolso (15ml) da linha Moments
em Caraguatatuba/SP. Visual "Dark Mode / Luxo Acessível" (Noturno Dourado): Cinzel + Ouro Imperial +
glassmorphism, mobile-first.

🔗 Repositório: https://github.com/felipemaxrosa/lp-perfumes-no-carro

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (tokens em `src/app/globals.css`)
- Fontes via **`next/font`** (Cinzel + Plus Jakarta Sans) · ícones **`@phosphor-icons/react`**
- Imagens com **`next/image`** · **pnpm**

## Rodar

```bash
pnpm install
pnpm dev          # desenvolvimento — http://localhost:3000
pnpm build        # build de produção (valida tipos/lint)
pnpm start        # servir o build — http://localhost:3000
```

## Rotas

- **`/`** — home: Hero → Diferenciais → **Top 3 (O Pódio)** → Combos → **A Jornada da Fragrância** →
  **Destaques do Catálogo** (6, um card por linha no mobile) + "Ver Catálogo Completo" →
  "Está no carro?" → Prova Social → FAQ → Footer. Header com **menu hambúrguer** no mobile.
- **`/catalogo`** — catálogo completo com **filtros por família olfativa**
  (Todos · Florais · Âmbar · Orientais · Amadeirados · Aromáticos).

## Conteúdo — editar em `src/lib/products.ts` (fonte única)

- `WHATS` (número) · `INSTAGRAM` (link do footer) · `HOME_CATALOGO` (qtde de destaques na home).
- `TOP3` e `CATALOGO`: cada fragrância tem `nome`, `familia` (exibida no selo), `grupo` (filtro),
  **pirâmide** (`saida`/`corpo`/`fundo`), `inspiracao?` (ex.: "Paradoxe · Prada"), `img`, `pos`, `icon`.
- `DEPOIMENTOS` e `FAQ`.
- Mensagens do WhatsApp em `src/lib/whatsapp.ts`.

### Convenção

- Notas olfativas sempre **Saída · Corpo · Fundo** (nunca Topo/Coração/Base).
- Categorias = **família olfativa** (as ~20 famílias exatas são agrupadas em 5 famílias-mãe no filtro;
  o card mostra a família exata).

## Estrutura

```
public/assets/            logo.png, mark.png, favicon.png + fotos (recortes do PDF Mapa Olfativo)
src/
  app/
    layout.tsx            fontes, metadata/OG, FloatingWhatsapp
    page.tsx              home (/)
    catalogo/page.tsx     catálogo (/catalogo)
    globals.css           Tailwind v4 + tokens + utilitários da marca
    icon.png, apple-icon.png   favicons (file convention)
  components/             Header, MobileMenu, Hero, Diferenciais, Top3, Combos, Jornada,
                          CatalogPreview, CatalogGrid, ProductCard (+ Pyramid/FamiliaBadge),
                          PhotoFrame, NoCarro, ProvaSocial, Faq, Footer, FloatingWhatsapp,
                          ScrollReveal, icons
  lib/                    products.ts (dados) · whatsapp.ts (links)
```

## Imagens

As fotos dos produtos são recortes do PDF "Mapa Olfativo Detalhado" (frasco + caixa no mármore).
Para atualizar o favicon/logo, troque os arquivos em `public/assets` e regenere os ícones (`sips`).
Observação: a arte do **412 Rose** traz o nome da inspiração; a "Inspiração" é exibida em cada card
por decisão do cliente.

## Git

- `main` — produção. `dev` — desenvolvimento (trabalhamos aqui; PR/merge para `main` ao publicar).

## Deploy

Pronto para **Vercel** (conectar o repositório). Antes de publicar, ajustar `metadataBase` em
`src/app/layout.tsx` para o domínio real (hoje `http://localhost:3000`) e confirmar os depoimentos.

---

Desenvolvido por [Max Digital Studio](https://maxdigitalstudio.com.br/).
