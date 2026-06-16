import { IndianRupee, MapPin, ShieldCheck } from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import TrustSection from "../components/sections/TrustSection.jsx";
import BookingSection from "../components/sections/BookingSection.jsx";
import { INDIAN } from "../assets/images.js";

export default function AboutPage() {
  return (
    <PublicLayout>
      <PageHero bgImage={INDIAN.engineer} eyebrow="Our Story" title="Experience you can count on"
        text="A local electrical business built through careful work, honest advice and long-standing customer relationships." />
      <AboutSection />
      <section className="section bg-white">
        <div className="container grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
          {[
            ["Quality Workmanship", "We treat every repair and installation as work that must remain dependable after we leave.", ShieldCheck, "#4F46E5"],
            ["Honest Pricing", "Clear recommendations, practical options and no unnecessary replacements.", IndianRupee, "#D97706"],
            ["Local Responsibility", "We live and work here, so every customer relationship matters to us.", MapPin, "#10B981"],
          ].map(([t, d, Icon, col]) => (
            <article key={t} className="service-card flex flex-col justify-between border-t-4" style={{ borderTopColor: col }}>
              <div>
                <span className="icon-box"><Icon size={20} /></span>
                <h3 className="mt-6 font-display text-lg font-bold text-zinc-900">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <TrustSection />
      <BookingSection />
    </PublicLayout>
  );
}
