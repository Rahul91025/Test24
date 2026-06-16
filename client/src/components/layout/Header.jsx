import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../ui/Logo.jsx";
import { phone, whatsappLink } from "../../config/site.js";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Gallery", "/gallery"], ["Reviews", "/reviews"], ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header className={`floating-header ${scrolled ? "scrolled" : ""}`}>
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, to]) => (
              <Link key={to} to={to} className={`nav-link ${location.pathname === to ? "active" : ""}`}>{label}</Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
              <MessageCircle size={14} className="text-emerald-500" /> WhatsApp
            </a>
            <Link to="/contact#booking" className="btn-primary px-5 py-2.5 text-xs">Book Service</Link>
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Toggle navigation"
            className="rounded-xl p-2 text-zinc-600 hover:text-zinc-900 lg:hidden border border-zinc-200 bg-zinc-50/50">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-3 border border-zinc-100 p-2">
              <div className="flex flex-col gap-1">
                {links.map(([label, to]) => (
                  <Link key={to} to={to}
                    className="rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:bg-zinc-50 hover:text-indigo-600">
                    {label}
                  </Link>
                ))}
                <Link to="/contact#booking" className="btn-primary mt-3 justify-center py-3 text-center">Book Service</Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <div className="h-20 sm:h-24" />
    </>
  );
}
