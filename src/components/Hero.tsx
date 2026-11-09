import Link from 'next/link';
import Image from 'next/image';
import {
  SparkleIcon as Sparkle,
  ArrowDownIcon as ArrowDown,
  WhatsappLogoIcon as WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr';
import { wa, MSG_GERAL } from '@/lib/whatsapp';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden vignette">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule opacity-60" />
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="reveal-now inline-flex items-center gap-2 rounded-full hairline px-4 py-1.5 text-[11px] tracking-[.2em] uppercase text-gold/90">
            <Sparkle weight="fill" /> Alta Perfumaria de Bolso (15ml) a Bordo
          </span>
          <h1 className="reveal-now font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.12] mt-6">
            O luxo dos perfumes importados no{' '}
            <span className="gold-text">ritmo</span> da sua rota.
          </h1>
          <div className="reveal-now mx-auto lg:mx-0 my-6 h-px w-24 gold-rule" />
          <p className="reveal-now mx-auto lg:mx-0 max-w-xl text-muted text-base sm:text-lg leading-relaxed">
            O mesmo DNA dos perfumes mais desejados do mundo, em frascos de 15ml
            que cabem no bolso — com fixação de até 8 horas. Experimente agora na
            corrida ou receba em casa, em qualquer bairro de Caraguá.
          </p>
          <div className="reveal-now mt-8 flex flex-col sm:flex-row items-stretch lg:justify-start justify-center gap-3">
            <Link
              href="/#top3"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-[.18em] text-obsidian shadow-[0_12px_32px_-12px_rgba(229,184,105,.6)] hover:brightness-110 active:scale-[.98] transition"
            >
              Mais Vendidos <ArrowDown weight="bold" />
            </Link>
            <a
              href={wa(MSG_GERAL)}
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-emerald hover:text-emerald hover:bg-emerald/5 active:scale-[.98] transition"
            >
              <WhatsappLogo weight="fill" className="text-lg" /> Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal-now relative order-first lg:order-none mx-auto w-full max-w-[240px] sm:max-w-xs lg:max-w-sm">
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70"
            style={{
              background:
                'radial-gradient(circle at 50% 42%, rgba(229,184,105,.35), transparent 62%)',
            }}
          />
          <Image
            src="/assets/logo.png"
            alt="Perfumes no Carro — Alta Perfumaria & Praticidade · Caraguatatuba"
            width={790}
            height={510}
            priority
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 240px"
            className="relative w-full mx-auto h-auto"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px gold-rule opacity-30" />
    </section>
  );
}
