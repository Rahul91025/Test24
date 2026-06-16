import { processSteps } from "../../constants/hero.js";
import Reveal from "../ui/Reveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function ProcessSection() {
  return (
    <section className="section bg-zinc-50/30 border-y border-zinc-200/50">
      <div className="container">
        <SectionTitle center eyebrow="How It Works" title="Service in 4 simple steps"
          text="From booking to completion — fast, clear and hassle-free for you." />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ num, title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="process-step">
                <span className="process-num">{num}</span>
                <span className="icon-box mt-5 mb-5"><Icon size={20} /></span>
                <h3 className="font-display text-base font-bold text-zinc-900">{title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-zinc-500 font-medium">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
