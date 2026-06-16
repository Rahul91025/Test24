import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { heroSlides } from "../../constants/hero.js";
import { displayPhone, phone, whatsappLink } from "../../config/site.js";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(p => (p + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (idx) => {
    setCurrent(((idx % total) + total) % total);
    setPaused(true);
    setTimeout(() => setPaused(false), 12000);
  };

  const slide = heroSlides[current];

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "95vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="Gupta Electronics electrical service" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(4,4,14,0.93) 0%, rgba(4,4,14,0.72) 52%, rgba(4,4,14,0.3) 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </motion.div>
      </AnimatePresence>

      <div className="orb-dark animate-float pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] rounded-full opacity-40" />
      <div className="orb-gold animate-float-slow pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full opacity-20" />

      <div className="container relative z-10 py-14 sm:py-20 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-5 sm:mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {slide.eyebrow}
            </div>

            <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[68px] xl:text-[76px] tracking-tighter">
              {slide.title}<br />
              <span className="text-gradient-gold">{slide.accent}</span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-[15px] leading-relaxed text-zinc-300 font-medium">{slide.sub}</p>

            <div className="mt-5 sm:mt-7 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              {["Stabilizer Manufacturing", "Appliance Repair", "Home & Shop Wiring", "Same-Day Doorstep Service"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs font-bold text-white/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30">
                    <Check size={10} strokeWidth={3} className="text-emerald-400" />
                  </span>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 sm:mt-10 flex flex-wrap gap-3">
              <a href={`tel:+${phone}`} className="btn-gold"><Phone size={15} /> Call Now</a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-whatsapp"><MessageCircle size={15} /> WhatsApp Us</a>
              <Link to="/contact#booking" className="btn-ghost-dark">{slide.cta} <ArrowRight size={15} /></Link>
            </div>

            <div className="mt-8 sm:mt-14 flex flex-wrap gap-5 sm:gap-10 pt-5 sm:pt-8 border-t border-white/10">
              {[{ val: "25+", label: "Years Experience" }, { val: "1,200+", label: "Customers Served" }, { val: "4.9★", label: "Average Rating" }, { val: "7+", label: "Service Areas" }].map(({ val, label }) => (
                <div key={label}>
                  <strong className="font-display text-3xl font-extrabold text-white tracking-tight block">{val}</strong>
                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-widest text-zinc-400">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-28 right-8 hidden lg:block animate-float z-10">
        <div className="flex items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-100 p-4 shadow-luxury">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
            <ShieldCheck size={20} />
          </span>
          <div className="text-left">
            <strong className="block text-xs font-bold text-zinc-900">Safe. Skilled. Dependable.</strong>
            <span className="text-[10px] text-zinc-500 font-semibold">1-Year workmanship warranty.</span>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-20 hidden md:flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5">
        <span className="text-xs font-extrabold text-white">{current + 1}</span>
        <span className="text-white/40 text-xs">/</span>
        <span className="text-xs font-bold text-white/50">{total}</span>
      </div>

      <button onClick={() => go(current - 1)} aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 hidden md:grid place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 transition-all duration-300">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(current + 1)} aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 hidden md:grid place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 transition-all duration-300">
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/60"}`} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/8 z-20">
        <motion.div
          key={`progress-${current}-${String(paused)}`}
          className="h-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-amber-400"
          initial={{ width: "0%" }}
          animate={{ width: paused ? undefined : "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>
    </section>
  );
}
