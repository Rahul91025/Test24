import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { detailedServices, serviceCategories, services } from "../../constants/services.js";
import Reveal from "../ui/Reveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function ServicesSection({ full = false }) {
  const [filter, setFilter] = useState("all");

  const filteredServices = useMemo(() => {
    if (!full || filter === "all") return detailedServices;
    return detailedServices.filter(s => s[3] === filter);
  }, [filter, full]);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle center eyebrow="What We Do" title="Complete electrical solutions under one roof"
          text="From a faulty fan to complete shop wiring — every job gets experienced attention and honest advice." />
        {full && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button key={cat.id} onClick={() => setFilter(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold border transition-all duration-300 ${filter === cat.id ? "bg-indigo-600 text-white border-indigo-600 shadow-sm" : "bg-zinc-50 text-zinc-500 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-800"}`}>
                {cat.label}
              </button>
            ))}
          </div>
        )}
        <div className={`mt-14 grid gap-6 ${full ? "md:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {full ? (
            filteredServices.map((service, index) => {
              const [title, description, DetailIcon, , serviceImg] = service;
              return (
                <Reveal key={title} delay={index * 0.05}>
                  <article className="service-card h-full text-left flex flex-col justify-between">
                    <div>
                      <div className="overflow-hidden rounded-2xl h-48 relative mb-5 bg-zinc-100 border border-zinc-100">
                        <img src={serviceImg} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        <span className="absolute top-4 left-4 icon-box bg-white/95 backdrop-blur-sm border-white shadow-sm"><DetailIcon size={18} /></span>
                        <div className="absolute right-5 top-5 select-none font-display text-5xl font-extrabold text-white/30">{`0${index + 1}`}</div>
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-900">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-500">{description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })
          ) : (
            services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <article className="service-card h-full text-left flex flex-col justify-between group">
                    <div>
                      <div className="overflow-hidden rounded-2xl h-52 relative mb-5 bg-zinc-100 border border-zinc-100">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 icon-box bg-white/95 backdrop-blur-sm border-white shadow-sm"><Icon size={18} /></span>
                        <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-extrabold text-indigo-700 border border-indigo-100/50">{service.badge}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-900">{service.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-500">{service.description}</p>
                      <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                            <Check size={12} className="shrink-0 text-indigo-600" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })
          )}
        </div>
        {!full && (
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline">Explore All Services <ArrowRight size={16} /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
