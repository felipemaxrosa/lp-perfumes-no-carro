import { WHATS } from '@/lib/products';

export const wa = (text: string) =>
  `https://wa.me/${WHATS}?text=${encodeURIComponent(text)}`;

export const MSG_GERAL =
  'Olá Fabio, vi seu site e quero conhecer as fragrâncias disponíveis!';

export const msgProduto = (nome: string) =>
  `Olá Fabio! Tenho interesse no *${nome}* (15ml). Ainda tem disponível? Vi no site Perfumes no Carro.`;

export const msgCombo = (combo: string, qtd: number, preco: number) =>
  `Olá Fabio! Quero o *${combo}* — ${qtd} ${qtd > 1 ? 'perfumes' : 'perfume'} de 15ml por R$${preco}. Como faço o pedido?`;
