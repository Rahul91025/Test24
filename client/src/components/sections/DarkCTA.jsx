import { ArrowRight, Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { displayPhone, phone, whatsappLink } from "../../config/site.js";

export default function DarkCTA() {
  return (
    <section className="cta-dark section text-center relative overflow-hidden">
      <div className="orb-dark animate-float pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full opacity-60" />
      <div className="orb-gold animate-float-slow pointer-events-none absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full opacity-20" />
      <div className="container relative z-10">
        <span className="eyebrow-dark">Act Now</span>
        <h2 className="mt-6 font-display text-3xl font-extrabold text-white tracking-tighter leading-tight md:text-5xl">
          Don't let electrical issues<br />become bigger problems.
        </h2>
        <p className="mt-5 text-zinc-400 text-sm max-w-lg mx-auto font-medium leading-relaxed">
          Get expert help fast. Call us now for immediate support, or book online for a scheduled doorstep visit at your convenience.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a href={`tel:+${phone}`} className="btn-gold w-full sm:w-auto justify-center"><Phone size={15} /> {displayPhone}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-whatsapp w-full sm:w-auto justify-center"><MessageCircle size={15} /> WhatsApp Us</a>
          <Link to="/contact#booking" className="btn-ghost-dark w-full sm:w-auto justify-center">Book Service Online <ArrowRight size={15} /></Link>
        </div>
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-5 sm:gap-8 pt-8 sm:pt-10 border-t border-white/8">
          {[{ icon: Clock3, label: "Mon–Sat, 9 AM–8 PM" }, { icon: MapPin, label: "7+ Areas in West Singhbhum" }, { icon: ShieldCheck, label: "1-Year Workmanship Warranty" }].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-xs font-bold text-zinc-400">
              <Icon size={15} className="text-zinc-500" /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
