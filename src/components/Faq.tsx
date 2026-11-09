import { PlusIcon as Plus } from "@phosphor-icons/react/dist/ssr";
import { FAQ } from "@/lib/products";

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <div className="text-center mb-10">
        <h2 className="fade-up font-display text-2xl sm:text-4xl font-semibold">Perguntas frequentes</h2>
      </div>
      <div className="space-y-3">
        {FAQ.map((f) => (
          <details key={f.q} className="glass hairline rounded-2xl px-5 py-4 group">
            <summary className="flex items-center justify-between gap-4 font-semibold">
              <span>{f.q}</span>
              <Plus weight="bold" className="faq-ico text-gold transition-transform shrink-0" />
            </summary>
            <p className="text-muted text-sm mt-3 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
