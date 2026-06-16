import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import api from "../../lib/api.js";
import { phone, whatsappLink } from "../../config/site.js";
import { bookingServiceOptions } from "../../constants/services.js";
import Reveal from "../ui/Reveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

const initial = { name: "", phone: "", address: "", service: "", description: "" };

export function BookingForm({ compact = false, prefill = null }) {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState({ loading: false, message: "", error: false });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    if (prefill) setForm(prev => ({ ...prev, service: prefill.service || prev.service, description: prefill.description || prev.description }));
  }, [prefill]);

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
    <form onSubmit={submit}
      className={`rounded-3xl bg-white text-left ${compact ? "p-6" : "p-8 md:p-10"}`}
      style={{ boxShadow: "0 20px 60px -15px rgba(24,24,27,0.05), 0 0 0 1px rgba(24,24,27,0.03)", border: "1px solid #E4E4E7" }}>
      <div className="mb-7">
        <span className="eyebrow">Quick Booking</span>
        <h3 className="mt-3 font-display text-2xl font-bold text-zinc-900">Tell us what needs fixing</h3>
        <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-semibold">We'll call to confirm the visit and timing within minutes.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field"><span>Full Name</span><input name="name" value={form.name} onChange={update} required placeholder="Your full name" /></label>
        <label className="field"><span>Phone Number</span><input name="phone" value={form.phone} onChange={update} required pattern="[0-9+ -]{10,15}" placeholder="Mobile number" /></label>
        <label className="field sm:col-span-2"><span>Address / Area</span><input name="address" value={form.address} onChange={update} required placeholder="Area, landmark, city" /></label>
        <label className="field sm:col-span-2">
          <span>Service Required</span>
          <select name="service" value={form.service} onChange={update} required>
            <option value="">Select a service</option>
            {bookingServiceOptions.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field sm:col-span-2"><span>Problem Description</span><textarea name="description" value={form.description} onChange={update} rows="4" required placeholder="Briefly describe the issue or what you need..." /></label>
      </div>
      {state.message && (
        <div className={`mt-5 rounded-xl p-3.5 text-xs font-semibold ${state.error ? "bg-red-50 text-red-700 border border-red-100" : "bg-emerald-50 text-emerald-700 border border-emerald-100"}`}>
          {state.message}
        </div>
      )}
      <button disabled={state.loading} className="btn-primary mt-6 w-full justify-center disabled:opacity-60 text-xs py-3.5">
        {state.loading ? "Submitting..." : "Book Service"} <ArrowRight size={16} />
      </button>
      <a href={whatsappLink(`Hello, I want to book: ${form.service || "electrical service"}`)} target="_blank" rel="noreferrer"
        className="mt-4 flex justify-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700">
        <MessageCircle size={15} /> Or book directly on WhatsApp
      </a>
    </form>
  );
}

export default function BookingSection({ prefill = null }) {
  return (
    <section id="booking" className="section bg-zinc-50/30" style={{ borderTop: "1px solid #E4E4E7" }}>
      <div className="container grid items-center gap-10 lg:gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <div className="text-left">
            <SectionTitle eyebrow="Doorstep Support" title="Electrical trouble? Let's get it sorted."
              text="Send your details in under two minutes. We handle service requests across Chaibasa and nearby towns." />
            <div className="mt-10 space-y-6">
              {[["Submit your request", "Tell us the service and describe the problem."], ["We confirm the visit", "Our team calls to discuss timing and details."], ["Skilled service at your location", "Clear diagnosis, fair pricing and clean work."]].map(([title, text], i) => (
                <div key={title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-extrabold text-white"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #3730A3)", boxShadow: "0 4px 12px rgba(79,70,229,0.2)" }}>{i + 1}</span>
                  <div>
                    <strong className="text-sm font-bold text-zinc-900 block">{title}</strong>
                    <p className="mt-0.5 text-xs text-zinc-500 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <a href={`tel:+${phone}`} className="btn-gold w-full justify-center"><span>Call Now</span></a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-whatsapp w-full justify-center"><MessageCircle size={15} /> WhatsApp Us</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><BookingForm prefill={prefill} /></Reveal>
      </div>
    </section>
  );
}
