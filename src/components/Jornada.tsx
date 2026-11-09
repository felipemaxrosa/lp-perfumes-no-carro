const BLOCOS = [
  {
    emoji: "🍋",
    titulo: "Notas de Saída",
    sub: "Saída · A primeira impressão",
    texto: "Sentidas logo após borrifar — leves, frescas e voláteis. Cítricos, ervas aromáticas e frutas leves.",
    carro: "o aroma refrescante que você sente quando o Fábio apresenta a fita olfativa.",
  },
  {
    emoji: "🌸",
    titulo: "Notas de Corpo",
    sub: "Corpo · A personalidade",
    texto: "Revelam-se após alguns minutos — suaves e harmoniosas, ditam o caráter. Florais, especiarias suaves e frutas maduras.",
    carro: "o aroma elegante que te acompanha durante a viagem.",
  },
  {
    emoji: "🪵",
    titulo: "Notas de Fundo",
    sub: "Fundo · Fixação e rastro",
    texto: "A base: fixa na pele e dura por horas, trazendo profundidade. Madeiras, âmbar, baunilha e almíscar.",
    carro: "a prova da qualidade — o aroma intenso que vai com você para o destino, o dia todo.",
  },
];

export function Jornada() {
  return (
    <section className="relative">
      <div className="h-px gold-rule opacity-40" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center mb-11">
          <h2 className="fade-up font-display text-2xl sm:text-4xl font-semibold">A jornada da fragrância na sua pele</h2>
          <p className="fade-up text-muted mt-3 max-w-xl mx-auto text-sm">
            Descubra como nossos perfumes evoluem com o tempo, garantindo uma experiência única do início ao fim.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {BLOCOS.map((b) => (
            <div key={b.titulo} className="fade-up glass hairline rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gold/8 text-gold text-2xl">{b.emoji}</span>
                <div>
                  <p className="font-display text-lg">{b.titulo}</p>
                  <p className="text-gold/80 text-[11px] uppercase tracking-wide">{b.sub}</p>
                </div>
              </div>
              <p className="text-muted text-sm mt-4">{b.texto}</p>
              <p className="mt-4 text-sm border-l-2 border-gold/40 pl-3 text-white/80">
                <span className="text-gold font-semibold">No carro:</span> {b.carro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
