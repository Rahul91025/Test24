import { ArrowRight, Award, BadgeCheck, MapPin, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { INDIAN } from "../../assets/images.js";
import Reveal from "../ui/Reveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function AboutSection() {
  return (
    <section className="section bg-white" style={{ borderTop: "1px solid #E4E4E7" }}>
      <div className="container grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-luxury border-8 border-white">
              <img
                src={INDIAN.engineer}
                alt="Indian electrical engineer repairing wiring — Gupta Electronics Chaibasa"
                className="w-full h-[220px] sm:h-[340px] md:h-[420px] lg:h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 rounded-[28px]" style={{ background: "linear-gradient(to top, rgba(9,9,11,0.25) 0%, transparent 55%)" }} />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-luxury hidden md:block">
              <img src={INDIAN.voltageStabilizer} alt="Indian stabilizer repair work" className="w-full h-full object-cover object-center" />
            </div>

            <div className="absolute -top-5 -left-5 rounded-3xl bg-white border border-zinc-100 p-5 shadow-luxury text-left">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Award size={22} />
                </span>
                <div>
                  <strong className="font-display text-2xl font-extrabold text-zinc-900 block">25+</strong>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Years Experience</span>
                </div>
              </div>
            </div>

            {/* <div className="absolute bottom-16 -left-5 rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 shadow-md text-left">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div>
                <strong className="text-sm font-extrabold text-amber-900">4.9</strong>
              </div>
              <span className="text-[9px] font-bold text-amber-700 block mt-0.5">Avg. Customer Rating</span>
            </div> */}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="text-left">
            <SectionTitle eyebrow="About Us" title="Built on skill, honesty and local trust"
              text="Gupta Electronics & Electricals has served Chaibasa and nearby areas with reliable electrical repair, stabilizer manufacturing and wiring services for more than two decades." />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500 font-medium">
              Founded and operated by experienced electrician Mr. Gupta, our focus is simple: diagnose carefully, explain clearly and complete every job with workmanship we can stand behind. We believe in long-term relationships — not one-time repairs.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[["Experienced electrician", ShieldCheck], ["Honest, clear pricing", BadgeCheck], ["Doorstep assistance", MapPin], ["Quality-focused repairs", Award]].map(([item, Icon]) => (
                <span key={item} className="flex items-center gap-2.5 text-xs font-bold text-zinc-700">
                  <Icon size={16} className="shrink-0 text-indigo-600" />{item}
                </span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-zinc-100">
              {[["25+", "Years in Chaibasa"], ["7+", "Service areas"], ["1.2k+", "Customers served"]].map(([v, l]) => (
                <div key={l}>
                  <strong className="font-display text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight block">{v}</strong>
                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-wider text-zinc-400">{l}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/about" className="btn-primary">Know Our Story <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
