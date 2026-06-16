import { trustFeatures } from "../../constants/hero.js";
import Reveal from "../ui/Reveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function TrustSection() {
  return (
    <section className="section bg-zinc-50/30 border-t border-zinc-200/50">
      <div className="container">
        <SectionTitle center eyebrow="Why Choose Us" title="The Gupta Electronics difference"
          text="We don't just fix problems — we build relationships. Here's what makes us the preferred choice across West Singhbhum." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map(({ title, desc, icon: Icon, col, bg, border }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="trust-card h-full">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: bg, color: col, border: `1px solid ${border}` }}>
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-zinc-900">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 font-medium">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
