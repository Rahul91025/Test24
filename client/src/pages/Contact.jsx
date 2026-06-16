import { ChevronRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import { BookingForm } from "../components/sections/BookingSection.jsx";
import { displayPhone, mapEmbed, mapsUrl, phone, whatsappLink } from "../config/site.js";

const contactItems = (p, dp, wa, maps) => [
  ["Call Us", dp, Phone, `tel:+${p}`],
  ["WhatsApp", "Fast booking and enquiries", MessageCircle, wa],
  ["Visit / Directions", "Chaibasa, Jharkhand", MapPin, maps],
  ["Opening Hours", "Mon–Sat: 9 AM–8 PM", Clock3, null],
];

export default function ContactPage() {
  const items = contactItems(phone, displayPhone, whatsappLink(), mapsUrl);
  return (
    <PublicLayout>
      <PageHero eyebrow="Contact Us" title="Get reliable electrical help"
        text="Call, WhatsApp or send a booking request. We'll help you choose the right next step." />
      <section className="section bg-zinc-50/30">
        <div className="container grid gap-8 lg:gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-4 text-left">
            {items.map(([title, text, Icon, href]) => {
              const content = (
                <>
                  <span className="icon-box"><Icon size={18} /></span>
                  <div>
                    <strong className="font-display text-sm font-bold text-zinc-900 block">{title}</strong>
                    <p className="mt-0.5 text-xs text-zinc-500 font-semibold">{text}</p>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-zinc-400" />
                </>
              );
              const cls = "flex items-center gap-4 rounded-2xl bg-white p-5 border border-zinc-200/60 shadow-sm hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300";
              return href
                ? <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>{content}</a>
                : <div key={title} className={cls}>{content}</div>;
            })}
            <iframe title="Gupta Electronics location in Chaibasa" src={mapEmbed}
              className="h-72 w-full rounded-3xl border border-zinc-200/50 shadow-sm" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div id="booking"><BookingForm /></div>
        </div>
      </section>
    </PublicLayout>
  );
}
