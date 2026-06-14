import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BatteryCharging,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Fan,
  Gauge,
  House,
  IndianRupee,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlugZap,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
  Zap
} from "lucide-react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import api from "./api";

const phone = import.meta.env.VITE_PHONE || "919999999999";
const displayPhone = import.meta.env.VITE_DISPLAY_PHONE || "+91 99999 99999";
const mapsUrl = import.meta.env.VITE_MAPS_URL || "https://maps.google.com/?q=Chaibasa%2C%20Jharkhand";
const mapEmbed =
  import.meta.env.VITE_MAP_EMBED_URL ||
  "https://www.google.com/maps?q=Chaibasa%2C%20Jharkhand&output=embed";

const services = [
  {
    title: "Stabilizer Manufacturing",
    description: "Custom-built stabilizers for homes, shops and sensitive appliances.",
    items: ["Custom Stabilizer", "Home Stabilizer", "Shop Stabilizer"],
    icon: Gauge,
    accent: "blue"
  },
  {
    title: "Appliance Repair",
    description: "Careful diagnosis and dependable repair for everyday appliances.",
    items: ["Fan & Cooler", "Mixer & Iron", "Inverter & Stabilizer"],
    icon: Wrench,
    accent: "amber"
  },
  {
    title: "Electrical Work",
    description: "Safe wiring, installation and fault detection for homes and shops.",
    items: ["House & Shop Wiring", "MCB Installation", "Switch Board & Faults"],
    icon: PlugZap,
    accent: "cyan"
  }
];

const detailedServices = [
  ["Custom Stabilizers", "Voltage protection designed for your exact load and location.", Gauge],
  ["Stabilizer Repair", "Testing, component replacement and performance restoration.", BatteryCharging],
  ["Fan Repair", "Capacitor, bearing, winding and speed-control repair.", Fan],
  ["Cooler Repair", "Motor, pump, wiring and switch diagnosis for all common coolers.", Sparkles],
  ["Mixer & Iron Repair", "Practical repairs for daily-use kitchen and home appliances.", Wrench],
  ["Inverter Repair", "Battery, charging and output fault inspection and repair.", Zap],
  ["Home Wiring", "New wiring, rewiring, earthing and load distribution.", House],
  ["Shop Electrical Work", "Commercial wiring, lighting, MCBs and fault detection.", PlugZap]
];

const reviews = [
  ["Best stabilizer repair service in Chaibasa. The problem was explained clearly and fixed properly.", "Rakesh Kumar"],
  ["Quick and affordable electrical work. They arrived on time and left everything neat.", "Pooja Sinha"],
  ["Experienced electrician with honest pricing. Our shop wiring was completed safely.", "Amit Agarwal"]
];

const areas = ["Chaibasa", "Chakradharpur", "Jhinkpani", "Hatgamharia", "Noamundi", "Jagannathpur", "Manoharpur"];

const whatsappLink = (message = "Hello Gupta Electronics & Electricals, I need an electrical service.") =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

function Logo({ inverse = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white shadow-glow">
        <Zap size={23} fill="currentColor" />
      </span>
      <span className="leading-tight">
        <strong className={`block font-display text-[15px] font-extrabold ${inverse ? "text-white" : "text-ink"}`}>
          Gupta Electronics
        </strong>
        <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${inverse ? "text-blue-200" : "text-slate-500"}`}>
          & Electricals
        </span>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Gallery", "/gallery"],
    ["Reviews", "/reviews"],
    ["Contact", "/contact"]
  ];

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <div className="hidden bg-ink py-2 text-sm text-blue-100 md:block">
        <div className="container flex items-center justify-between">
          <span className="flex items-center gap-2"><MapPin size={14} /> Chaibasa, Jharkhand</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Clock3 size={14} /> Mon-Sat: 9:00 AM-8:00 PM</span>
            <a href={`tel:+${phone}`} className="flex items-center gap-2 font-semibold text-white"><Phone size={14} /> {displayPhone}</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="container flex h-[76px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([label, to]) => (
              <Link key={to} to={to} className={`nav-link ${location.pathname === to ? "active" : ""}`}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-3">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <Link to="/contact#booking" className="btn-primary px-5 py-3">Book a Service</Link>
          </div>
          <button className="rounded-lg p-2 text-ink lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t bg-white lg:hidden">
              <div className="container flex flex-col gap-1 py-4">
                {links.map(([label, to]) => <Link key={to} to={to} className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-brand-50">{label}</Link>)}
                <Link to="/contact#booking" className="btn-primary mt-2 justify-center">Book a Service</Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function SectionTitle({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl font-extrabold leading-tight md:text-[42px] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-7 ${light ? "text-blue-100" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(20,120,232,.25),transparent_35%)]" />
      <div className="container relative grid min-h-[680px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
            <BadgeCheck size={17} className="text-amber" /> 25+ Years of Trusted Local Service
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
            Reliable electrical care, <span className="text-gradient">right at your doorstep.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Trusted electrical repair, custom stabilizers and safe wiring services for homes and shops across Chaibasa.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            {["Stabilizer Manufacturing", "Home Appliance Repair", "Electrical Installation", "Fast Doorstep Support"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500"><Check size={13} strokeWidth={3} /></span>{item}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`tel:+${phone}`} className="btn-primary"><Phone size={19} /> Call Now</a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-light"><MessageCircle size={19} /> WhatsApp Now</a>
            <Link to="/contact#booking" className="btn-ghost">Get a Quote <ArrowRight size={18} /></Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-7 text-sm text-blue-100">
            <span><strong className="block text-xl text-white">25+</strong> Years experience</span>
            <span><strong className="block text-xl text-white">7+</strong> Service areas</span>
            <span><strong className="flex items-center gap-1 text-xl text-white">4.9 <Star size={16} fill="#ffb21c" className="text-amber" /></strong> Customer rating</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative">
          <div className="absolute -inset-8 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">
            <img src="/assets/electrician-hero.png" alt="Experienced electrician repairing a stabilizer in Chaibasa" className="h-[430px] w-full object-cover lg:h-[540px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl border border-white/15 bg-ink/80 p-4 backdrop-blur">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber text-ink"><ShieldCheck /></span>
              <div><strong className="block text-white">Safe. Skilled. Dependable.</strong><span className="text-sm text-blue-100">Workmanship you can trust.</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection({ full = false }) {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionTitle center eyebrow="What We Do" title="Complete electrical solutions under one roof" text="From a faulty fan to complete shop wiring, every job gets experienced attention and straightforward advice." />
        <div className={`mt-12 grid gap-6 ${full ? "md:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {(full ? detailedServices : services).map((service, index) => {
            const [title, description, DetailIcon] = full ? service : [];
            const Icon = full ? DetailIcon : service.icon;
            return (
              <Reveal key={full ? title : service.title} delay={index * 0.05}>
                <article className="service-card h-full">
                  <span className="icon-box"><Icon size={26} /></span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{full ? title : service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{full ? description : service.description}</p>
                  {!full && (
                    <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      {service.items.map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Check size={16} className="text-brand-600" />{item}</li>)}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
        {!full && <div className="mt-10 text-center"><Link to="/services" className="btn-secondary">Explore All Services <ArrowRight size={18} /></Link></div>}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-brand-600 p-7 text-white">
                <strong className="font-display text-5xl font-extrabold">25+</strong>
                <span className="mt-2 block font-semibold text-blue-100">Years serving Chaibasa</span>
              </div>
              <div className="rounded-3xl bg-amber p-7 text-ink">
                <ShieldCheck size={38} />
                <strong className="mt-8 block font-display text-xl">Honest Work</strong>
                <span className="mt-1 block text-sm font-medium">Clear advice and fair pricing</span>
              </div>
              <div className="col-span-2 rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-amber"><Zap size={28} /></span>
                  <div><strong className="font-display text-xl text-ink">Local expertise that lasts</strong><p className="mt-1 text-sm text-slate-600">Repair-first thinking, quality parts and responsible electrical work.</p></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle eyebrow="About Us" title="Built on skill, honesty and local trust" text="Gupta Electronics & Electricals has served Chaibasa and nearby areas with reliable electrical repair, stabilizer manufacturing, wiring and appliance maintenance for more than two decades." />
          <p className="mt-4 leading-7 text-slate-600">Founded and operated by experienced electrician Mr. Gupta, our focus is simple: diagnose carefully, explain clearly and complete every job with workmanship we can stand behind.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {["Experienced electrician", "Honest, clear pricing", "Doorstep assistance", "Quality-focused repairs"].map((item) => (
              <span key={item} className="flex items-center gap-3 font-semibold text-slate-700"><BadgeCheck className="text-brand-600" size={20} />{item}</span>
            ))}
          </div>
          <Link to="/about" className="btn-primary mt-8">Know Our Story <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="section bg-ink">
      <div className="container">
        <SectionTitle center light eyebrow="Customer Reviews" title="Trusted by homes and businesses" text="Our reputation has grown one repair, one installation and one honest recommendation at a time." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map(([text, name], index) => (
            <Reveal key={name} delay={index * 0.08}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="flex gap-1 text-amber">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
                <p className="mt-6 text-lg leading-8 text-white">“{text}”</p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 font-bold text-white">{name[0]}</span>
                  <div><strong className="block text-white">{name}</strong><span className="text-sm text-blue-200">Verified local customer</span></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="container flex flex-col items-center gap-5 lg:flex-row">
        <div className="flex shrink-0 items-center gap-3 font-display text-lg font-bold text-ink"><MapPin className="text-brand-600" />Areas We Serve</div>
        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {areas.map((area) => <span key={area} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{area}</span>)}
        </div>
      </div>
    </section>
  );
}

function BookingForm({ compact = false }) {
  const initial = { name: "", phone: "", address: "", service: "", description: "" };
  const [form, setForm] = useState(initial);
  const [state, setState] = useState({ loading: false, message: "", error: false });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState({ loading: true, message: "", error: false });
    try {
      const { data } = await api.post("/bookings", form);
      setState({ loading: false, message: `Booking received. Reference: ${data.booking.bookingId}`, error: false });
      setForm(initial);
    } catch (error) {
      setState({ loading: false, message: error.response?.data?.message || "Could not submit. Please call or WhatsApp us.", error: true });
    }
  }

  return (
    <form onSubmit={submit} className={`rounded-3xl bg-white ${compact ? "p-6" : "p-7 md:p-9"} shadow-soft`}>
      <div className="mb-6">
        <span className="eyebrow">Quick Booking</span>
        <h3 className="mt-2 font-display text-2xl font-extrabold text-ink">Tell us what needs fixing</h3>
        <p className="mt-2 text-sm text-slate-600">We’ll contact you to confirm the visit and estimated timing.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field"><span>Name</span><input name="name" value={form.name} onChange={update} required placeholder="Your full name" /></label>
        <label className="field"><span>Phone</span><input name="phone" value={form.phone} onChange={update} required pattern="[0-9+ -]{10,15}" placeholder="Mobile number" /></label>
        <label className="field sm:col-span-2"><span>Address</span><input name="address" value={form.address} onChange={update} required placeholder="Area, landmark, city" /></label>
        <label className="field sm:col-span-2">
          <span>Service Required</span>
          <select name="service" value={form.service} onChange={update} required>
            <option value="">Select a service</option>
            {["Stabilizer Manufacturing", "Stabilizer Repair", "Fan Repair", "Cooler Repair", "Mixer / Iron Repair", "Inverter Repair", "House Wiring", "Shop Wiring", "Electrical Installation", "Fault Detection", "Other"].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field sm:col-span-2"><span>Problem Description</span><textarea name="description" value={form.description} onChange={update} rows="4" required placeholder="Briefly describe the issue..." /></label>
      </div>
      {state.message && <div className={`mt-4 rounded-xl p-3 text-sm font-semibold ${state.error ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}>{state.message}</div>}
      <button disabled={state.loading} className="btn-primary mt-5 w-full justify-center disabled:opacity-60">{state.loading ? "Submitting..." : "Book Service"} <ArrowRight size={18} /></button>
      <a href={whatsappLink(`Hello, I want to book an electrical service. Service: ${form.service || "Not selected"}`)} target="_blank" rel="noreferrer" className="mt-3 flex justify-center gap-2 text-sm font-bold text-emerald-700"><MessageCircle size={17} />Or book directly on WhatsApp</a>
    </form>
  );
}

function BookingSection() {
  return (
    <section id="booking" className="section bg-brand-50">
      <div className="container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <SectionTitle eyebrow="Doorstep Support" title="Electrical trouble? Let’s get it sorted." text="Send your details in less than two minutes. We handle service requests across Chaibasa and nearby towns." />
          <div className="mt-8 space-y-5">
            {[["Submit your request", "Tell us the service and problem."], ["We confirm the visit", "Our team calls to discuss timing."], ["Skilled service at your location", "Clear diagnosis and honest pricing."]].map(([title, text], i) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 font-bold text-white">{i + 1}</span>
                <div><strong className="text-ink">{title}</strong><p className="mt-1 text-sm text-slate-600">{text}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}><BookingForm /></Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#041024] pt-16 text-blue-100">
      <div className="container grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div><Logo inverse /><p className="mt-5 max-w-xs text-sm leading-6 text-blue-200">Trusted electrical repair, stabilizer manufacturing and wiring services in Chaibasa since 2000.</p></div>
        <div><h3 className="footer-title">Quick Links</h3><div className="footer-links">{[["About Us", "/about"], ["Our Services", "/services"], ["Gallery", "/gallery"], ["Reviews", "/reviews"], ["Book Service", "/contact#booking"]].map(([x, to]) => <Link key={x} to={to}>{x}</Link>)}</div></div>
        <div><h3 className="footer-title">Popular Services</h3><div className="footer-links"><span>Stabilizer Repair</span><span>Home Wiring</span><span>Fan & Cooler Repair</span><span>Electrical Installation</span><span>Fault Detection</span></div></div>
        <div><h3 className="footer-title">Contact</h3><div className="space-y-4 text-sm"><a href={`tel:+${phone}`} className="flex gap-3"><Phone size={18} className="text-amber" />{displayPhone}</a><a href={mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3"><MapPin size={18} className="text-amber" />Chaibasa, West Singhbhum<br />Jharkhand, India</a><span className="flex gap-3"><Clock3 size={18} className="text-amber" />Mon-Sat, 9 AM-8 PM</span></div></div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col justify-between gap-2 text-xs text-blue-300 sm:flex-row"><span>© {new Date().getFullYear()} Gupta Electronics & Electricals. All rights reserved.</span><Link to="/admin/login" className="hover:text-white">Admin Login</Link></div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a href={`tel:+${phone}`} className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-glow md:hidden" aria-label="Call now"><Phone size={21} /></a>
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105" aria-label="WhatsApp"><MessageCircle size={26} fill="currentColor" /></a>
    </div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,120,232,.3),transparent_55%)]" />
      <div className="container relative">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">{text}</p>
      </div>
    </section>
  );
}

function PublicLayout({ children }) {
  return <><Header />{children}<Footer /><FloatingActions /></>;
}

function HomePage() {
  return <PublicLayout><Hero /><ServicesSection /><AboutSection /><ServiceAreas /><ReviewsSection /><BookingSection /></PublicLayout>;
}

function AboutPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Our Story" title="Experience you can count on" text="A local electrical business built through careful work, honest advice and long-standing customer relationships." />
      <AboutSection />
      <section className="section bg-slate-50"><div className="container grid gap-6 md:grid-cols-3">{[["Quality Workmanship", "We treat every repair and installation as work that must remain dependable after we leave.", ShieldCheck], ["Honest Pricing", "Clear recommendations, practical options and no unnecessary replacements.", IndianRupee], ["Local Responsibility", "We live and work here, so every customer relationship matters to us.", MapPin]].map(([t, d, Icon]) => <article key={t} className="service-card"><span className="icon-box"><Icon /></span><h3 className="mt-5 font-display text-xl font-bold text-ink">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></article>)}</div></section>
      <BookingSection />
    </PublicLayout>
  );
}

function ServicesPage() {
  return <PublicLayout><PageHero eyebrow="Our Services" title="Repair, protection and installation done right" text="Practical electrical solutions for homes, shops and everyday appliances across Chaibasa." /><ServicesSection full /><ServiceAreas /><BookingSection /></PublicLayout>;
}

function GalleryPage() {
  const gallery = [
    ["Custom Stabilizer Work", "Carefully assembled voltage protection systems.", "from-brand-700 to-blue-400", Gauge],
    ["Home Electrical Repair", "Fault finding and dependable on-site repairs.", "from-sky-700 to-cyan-400", Wrench],
    ["Safe House Wiring", "Organized wiring and distribution work.", "from-slate-800 to-brand-500", House],
    ["Appliance Maintenance", "Hands-on diagnosis for daily-use appliances.", "from-amber-500 to-orange-400", Fan],
    ["Shop Installation", "Lighting, switches and commercial electrical setup.", "from-indigo-800 to-blue-500", PlugZap],
    ["Testing & Diagnosis", "Methodical checks before every repair.", "from-emerald-700 to-teal-400", Search]
  ];
  return (
    <PublicLayout>
      <PageHero eyebrow="Our Work" title="Skilled work, carefully completed" text="A look at the kinds of electrical, stabilizer and repair projects we handle every day." />
      <section className="section bg-slate-50"><div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">{gallery.map(([title, text, color, Icon], i) => <Reveal key={title} delay={i * .05}><article className={`group relative h-72 overflow-hidden rounded-3xl bg-gradient-to-br ${color} p-7 text-white shadow-soft`}><div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[28px] border-white/10" /><Icon size={64} strokeWidth={1.3} className="text-white/80" /><div className="absolute bottom-7 left-7 right-7"><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-2 text-sm text-white/80">{text}</p></div></article></Reveal>)}</div></section>
      <BookingSection />
    </PublicLayout>
  );
}

function ReviewsPage() {
  return <PublicLayout><PageHero eyebrow="Reviews" title="What local customers say" text="Trust is earned through the quality of each visit and the clarity of every recommendation." /><ReviewsSection /><section className="section bg-white text-center"><div className="container"><SectionTitle center eyebrow="Your Experience" title="Worked with us recently?" text="Your feedback helps more families and businesses in Chaibasa find dependable electrical support." /><a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">Leave a Google Review <ArrowRight size={18} /></a></div></section></PublicLayout>;
}

function ContactPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Contact Us" title="Get reliable electrical help" text="Call, WhatsApp or send a booking request. We’ll help you choose the right next step." />
      <section className="section bg-slate-50">
        <div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-5">
            {[["Call Us", displayPhone, Phone, `tel:+${phone}`], ["WhatsApp", "Fast booking and enquiries", MessageCircle, whatsappLink()], ["Visit / Directions", "Chaibasa, Jharkhand", MapPin, mapsUrl], ["Opening Hours", "Mon-Sat: 9 AM-8 PM", Clock3, null]].map(([title, text, Icon, href]) => {
              const content = <><span className="icon-box"><Icon /></span><div><strong className="font-display text-lg text-ink">{title}</strong><p className="mt-1 text-sm text-slate-600">{text}</p></div><ChevronRight className="ml-auto text-slate-300" /></>;
              return href ? <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft transition hover:-translate-y-1">{content}</a> : <div key={title} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft">{content}</div>;
            })}
            <iframe title="Gupta Electronics location in Chaibasa" src={mapEmbed} className="h-72 w-full rounded-3xl border-0 shadow-soft" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div id="booking"><BookingForm /></div>
        </div>
      </section>
    </PublicLayout>
  );
}

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminName", data.admin.name);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally { setLoading(false); }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-ink p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(20,120,232,.28),transparent_40%)]" />
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <Logo />
        <h1 className="mt-9 font-display text-3xl font-extrabold text-ink">Admin login</h1>
        <p className="mt-2 text-sm text-slate-600">Manage bookings, customers and revenue.</p>
        <form onSubmit={submit} className="mt-7 space-y-4">
          <label className="field"><span>Email</span><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="admin@example.com" /></label>
          <label className="field"><span>Password</span><input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Your password" /></label>
          {error && <p className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
          <button className="btn-primary w-full justify-center" disabled={loading}>{loading ? "Signing in..." : "Sign In"} <ArrowRight size={18} /></button>
        </form>
        <Link to="/" className="mt-6 block text-center text-sm font-semibold text-brand-600">← Back to website</Link>
      </div>
    </main>
  );
}

function ProtectedRoute({ children }) {
  return localStorage.getItem("adminToken") ? children : <Navigate to="/admin/login" replace />;
}

function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0, revenue: 0, today: 0, customers: 0 });
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function load() {
    try {
      const [{ data: bookingsData }, { data: statsData }] = await Promise.all([api.get("/bookings"), api.get("/bookings/stats")]);
      setBookings(bookingsData.bookings);
      setStats(statsData);
    } catch (error) {
      if (error.response?.status === 401) logout();
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);
  const visible = useMemo(() => filter === "All" ? bookings : bookings.filter((b) => b.status === filter), [bookings, filter]);

  async function updateBooking(id, updates) {
    await api.patch(`/bookings/${id}`, updates);
    await load();
  }

  function logout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  }

  const cards = [
    ["Total Bookings", stats.total, CalendarCheck, "bg-blue-50 text-brand-600"],
    ["Pending", stats.pending, Clock3, "bg-amber-50 text-amber-600"],
    ["Completed", stats.completed, BadgeCheck, "bg-emerald-50 text-emerald-600"],
    ["Revenue", `₹${Number(stats.revenue).toLocaleString("en-IN")}`, IndianRupee, "bg-violet-50 text-violet-600"]
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b bg-white">
        <div className="container flex h-20 items-center justify-between"><Logo /><div className="flex items-center gap-4"><span className="hidden text-sm text-slate-600 sm:block">Hello, <strong>{localStorage.getItem("adminName") || "Admin"}</strong></span><button onClick={logout} className="btn-secondary px-4 py-2"><LogOut size={17} /> Logout</button></div></div>
      </header>
      <main className="container py-9">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><span className="eyebrow">Business Overview</span><h1 className="mt-2 font-display text-3xl font-extrabold text-ink">Admin Dashboard</h1><p className="mt-2 text-slate-600">Today: {stats.today} new booking{stats.today === 1 ? "" : "s"} · {stats.customers} customers</p></div>
          <a href="/" target="_blank" className="btn-secondary">View Website <ArrowRight size={17} /></a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(([label, value, Icon, color]) => <div key={label} className="rounded-2xl bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-500">{label}</span><span className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}><Icon size={20} /></span></div><strong className="mt-4 block font-display text-3xl text-ink">{value}</strong></div>)}
        </div>
        <section className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b p-6 sm:flex-row sm:items-center">
            <div><h2 className="font-display text-xl font-bold text-ink">Service Bookings</h2><p className="mt-1 text-sm text-slate-500">Update status and record completed-job revenue.</p></div>
            <div className="flex flex-wrap gap-2">{["All", "Pending", "Confirmed", "Completed", "Cancelled"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-3 py-2 text-xs font-bold ${filter === item ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}>{item}</button>)}</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr>{["Booking", "Customer", "Service", "Address", "Status", "Revenue", "Action"].map((h) => <th key={h} className="px-5 py-4">{h}</th>)}</tr></thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? <tr><td colSpan="7" className="p-10 text-center text-slate-500">Loading bookings...</td></tr> : visible.length === 0 ? <tr><td colSpan="7" className="p-10 text-center text-slate-500">No bookings found.</td></tr> : visible.map((b) => (
                  <tr key={b._id} className="align-top hover:bg-slate-50/70">
                    <td className="px-5 py-4"><strong className="text-ink">{b.bookingId}</strong><span className="mt-1 block text-xs text-slate-500">{new Date(b.createdAt).toLocaleDateString("en-IN")}</span></td>
                    <td className="px-5 py-4"><strong className="block text-ink">{b.name}</strong><a href={`tel:${b.phone}`} className="text-brand-600">{b.phone}</a></td>
                    <td className="px-5 py-4"><strong className="text-slate-700">{b.service}</strong><span className="mt-1 block max-w-52 text-xs text-slate-500">{b.description}</span></td>
                    <td className="max-w-48 px-5 py-4 text-slate-600">{b.address}</td>
                    <td className="px-5 py-4"><select value={b.status} onChange={(e) => updateBooking(b._id, { status: e.target.value })} className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold"><option>Pending</option><option>Confirmed</option><option>Completed</option><option>Cancelled</option></select></td>
                    <td className="px-5 py-4"><input type="number" min="0" defaultValue={b.revenue || 0} onBlur={(e) => Number(e.target.value) !== b.revenue && updateBooking(b._id, { revenue: Number(e.target.value) })} className="w-24 rounded-lg border border-slate-200 px-3 py-2" /></td>
                    <td className="px-5 py-4"><a href={whatsappLink(`Hello ${b.name}, regarding your ${b.service} booking (${b.bookingId})`)} target="_blank" rel="noreferrer" className="inline-flex rounded-lg bg-emerald-50 p-2 text-emerald-700"><MessageCircle size={18} /></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
