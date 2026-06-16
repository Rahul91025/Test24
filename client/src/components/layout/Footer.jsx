import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import { displayPhone, mapsUrl, phone, whatsappLink } from "../../config/site.js";

export default function Footer() {
  return (
    <footer className="pt-16 bg-zinc-50/50 border-t border-zinc-200/50">
      <div className="container grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4 text-left">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-zinc-500 font-semibold">
            Trusted electrical repair, stabilizer manufacturing and wiring services in Chaibasa since 2000.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={whatsappLink()} target="_blank" rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100 transition-all" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href={`tel:+${phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-100 transition-all" aria-label="Call">
              <Phone size={16} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            {[["About Us", "/about"], ["Our Services", "/services"], ["Gallery", "/gallery"], ["Reviews", "/reviews"], ["Book Service", "/contact#booking"]].map(([x, to]) => (
              <Link key={x} to={to}>{x}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Our Services</h3>
          <div className="footer-links text-xs font-semibold text-zinc-600 space-y-3">
            {["Stabilizer Repair", "Home Wiring", "Fan & Cooler Repair", "Electrical Installation", "Fault Detection"].map(s => <span key={s} className="block">{s}</span>)}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <div className="space-y-4 text-xs font-semibold text-zinc-600">
            <a href={`tel:+${phone}`} className="flex items-start gap-3 hover:text-indigo-600 transition-colors">
              <Phone size={15} className="mt-0.5 shrink-0 text-indigo-500" />{displayPhone}
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-indigo-600 transition-colors">
              <MapPin size={15} className="mt-0.5 shrink-0 text-indigo-500" /><span>Chaibasa, West Singhbhum<br />Jharkhand, India</span>
            </a>
            <span className="flex items-start gap-3">
              <Clock3 size={15} className="mt-0.5 shrink-0 text-indigo-500" /><span>Mon–Sat, 9 AM–8 PM</span>
            </span>
          </div>
        </div>
      </div>
      <div className="gold-line" />
      <div className="py-5 bg-zinc-100/40">
        <div className="container flex flex-col justify-between gap-2 sm:flex-row text-xs font-semibold text-zinc-400">
          <span>© {new Date().getFullYear()} Gupta Electronics & Electricals. All rights reserved.</span>
          <Link to="/admin/login" className="hover:text-zinc-600 transition-colors">Admin Login</Link>
        </div>
      </div>
    </footer>
  );
}
