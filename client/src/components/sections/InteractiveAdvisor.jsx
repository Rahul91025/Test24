import { useState } from "react";
import { ArrowRight, BatteryCharging, Check, Fan, Gauge, MessageCircle, PlugZap, Wrench } from "lucide-react";
import { INDIAN } from "../../assets/images.js";
import { whatsappLink } from "../../config/site.js";
import SectionTitle from "../ui/SectionTitle.jsx";

const categories = {
  stabilizers: {
    title: "Voltage Stabilizers", icon: Gauge,
    preview: INDIAN.stabilizer4,
    options: [
      { name: "Custom 1kVA Stabilizer (LED TV/Fridge)", price: "₹2,500–₹3,500", time: "1–2 Days", details: "High-grade copper winding. Perfect for protecting smart TVs, home theaters, and single refrigerators.", prefillService: "Stabilizer Manufacturing", prefillDesc: "Requesting custom 1kVA Stabilizer (copper wound, TV/Fridge load)." },
      { name: "Custom 3kVA Stabilizer (Mainline/AC)", price: "₹5,500–₹7,000", time: "2–3 Days", details: "Built with digital voltmeter displays and high-voltage cutoff for split ACs up to 1.5 Ton.", prefillService: "Stabilizer Manufacturing", prefillDesc: "Requesting custom 3kVA Stabilizer for AC/Mainline protection." },
      { name: "Custom 5kVA Stabilizer (Heavy Duty)", price: "₹8,500–₹11,000", time: "2–3 Days", details: "Commercial-grade protection for entire households, shops, and sensitive heavy equipment.", prefillService: "Stabilizer Manufacturing", prefillDesc: "Requesting custom 5kVA stabilizer for full house mainline load." },
      { name: "Stabilizer Repair (Minor Circuit/Fuse)", price: "₹300–₹600", time: "Same Day", details: "Replacing micro-controllers, relays, indicators, or minor board faults. Done on-site or in-shop.", prefillService: "Stabilizer Repair", prefillDesc: "Relay clicking/board failure. Need repair." },
      { name: "Stabilizer Repair (Transformer Winding)", price: "₹1,200–₹2,500", time: "1–2 Days", details: "Complete rewinding of damaged copper transformer cores. Restores stabilizer to original capacity.", prefillService: "Stabilizer Repair", prefillDesc: "Transformer overheated/burnt. Winding repair needed." },
    ],
  },
  repairs: {
    title: "Appliance Repairs", icon: Wrench,
    preview: INDIAN.fanRepair4,
    options: [
      { name: "Ceiling / Table Fan Repair", price: "₹150–₹450", time: "Same Day", details: "Capacitor replacement, bearing lubrication, shaft repair, or motor winding work.", prefillService: "Fan Repair", prefillDesc: "Fan not rotating / slow speed / making loud noise." },
      { name: "Air Cooler Motor & Pump Service", price: "₹400–₹950", time: "Same Day", details: "Cooler motor rewinding, water pump replacement, switch replacement, and clean-up.", prefillService: "Cooler Repair", prefillDesc: "Air cooler motor not working / pump failed." },
      { name: "Inverter & Battery Diagnosis", price: "₹500–₹1,500", time: "Same Day", details: "Testing charging circuits, checking battery acid level, cleaning terminals, and relay repairs.", prefillService: "Inverter Repair", prefillDesc: "Inverter not charging / backup not lasting / overload alarm." },
      { name: "Mixer Grinder / Electric Iron", price: "₹100–₹350", time: "Same Day", details: "Carbon brush replacement, coupler replacement, power cord change, or heating element repair.", prefillService: "Mixer / Iron Repair", prefillDesc: "Mixer motor spark / iron not heating up." },
    ],
  },
  wiring: {
    title: "Electrical Wiring", icon: PlugZap,
    preview: INDIAN.electrician,
    options: [
      { name: "MCB & Switchboard Installation", price: "₹200–₹500", time: "Same Day", details: "Upgrading to safe miniature circuit breakers, fault isolation, or fitting premium switch plates.", prefillService: "Electrical Installation", prefillDesc: "MCB tripping repeatedly / switchboard socket replacement." },
      { name: "Short Circuit & Fault Detection", price: "₹300–₹800", time: "Same Day", details: "Advanced testing to locate hidden wiring shorts, earth leaks, or burning smell in wiring.", prefillService: "Fault Detection", prefillDesc: "Power outage in one room / sparks behind wall / burning smell." },
      { name: "Single Room Rewiring", price: "₹1,500–₹3,000", time: "1 Day", details: "Structured wiring with safety pipes, conduits, earthing, and load balancing.", prefillService: "House Wiring", prefillDesc: "New wiring for bedroom/kitchen extension." },
      { name: "Full House / Shop Wiring", price: "Get Free Quote", time: "3–5 Days", details: "End-to-end electrical blueprint, conduit laying, safe cabling, earthing, and final fittings.", prefillService: "Shop Wiring", prefillDesc: "Complete electrical wiring for house/shop under construction." },
    ],
  },
};

export default function InteractiveAdvisor({ onSelectService }) {
  const [activeTab, setActiveTab] = useState("stabilizers");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const currentCategory = categories[activeTab];
  const selectedOption = currentCategory.options[selectedOptionIndex] || currentCategory.options[0];

  const handleTabChange = (k) => { setActiveTab(k); setSelectedOptionIndex(0); };
  const handleBook = () => {
    if (onSelectService) {
      onSelectService(selectedOption.prefillService, selectedOption.prefillDesc);
      document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section bg-zinc-50/20 border-y border-zinc-200/50">
      <div className="container">
        <SectionTitle center eyebrow="Interactive Pricing Guide" title="Estimate your service cost instantly"
          text="Select a category and choose your service to view estimated costs and turnaround times." />

        <div className="mt-10 max-w-xl mx-auto grid grid-cols-3 gap-4 text-center select-none">
          {["Select Type", "Choose Service", "Get Estimate"].map((label, i) => (
            <div key={label} className="flex flex-col items-center relative">
              {i > 0 && <div className="absolute top-3.5 -left-1/2 right-1/2 h-[2px] bg-zinc-200" />}
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold relative z-10 ${i === 0 ? "bg-indigo-600 text-white shadow-sm" : "bg-indigo-50 text-indigo-600 border border-indigo-100"}`}>{i + 1}</span>
              <span className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${i === 0 ? "text-zinc-900" : "text-zinc-500"}`}>{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200/50">
              {Object.entries(categories).map(([key, cat]) => {
                const Icon = cat.icon;
                const active = activeTab === key;
                return (
                  <button key={key} onClick={() => handleTabChange(key)}
                    className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-xl text-center transition-all duration-300 ${active ? "bg-white text-indigo-600 shadow-sm border border-zinc-200/30" : "text-zinc-500 hover:text-zinc-800"}`}>
                    <Icon size={18} className={active ? "text-indigo-600" : "text-zinc-400"} />
                    <span className="mt-1.5 text-[10px] font-bold uppercase tracking-wider">{cat.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 max-h-[260px] sm:max-h-[300px] overflow-y-auto pr-1 sm:pr-2 text-left">
              {currentCategory.options.map((opt, idx) => {
                const active = selectedOptionIndex === idx;
                return (
                  <button key={opt.name} onClick={() => setSelectedOptionIndex(idx)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-300 ${active ? "bg-indigo-50/40 border-indigo-200 shadow-sm" : "bg-white border-zinc-200/60 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300"}`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${active ? "bg-indigo-500" : "bg-zinc-300"}`} />
                      <span className="text-xs font-bold">{opt.name}</span>
                    </div>
                    <span className="text-xs font-extrabold text-zinc-500 shrink-0 ml-3">{opt.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col md:flex-row w-full rounded-3xl bg-white border border-zinc-200/70 shadow-md overflow-hidden text-left">
              <div className="w-full md:w-2/5 min-h-[220px] md:min-h-full relative bg-zinc-100 border-r border-zinc-100">
                <img src={currentCategory.preview} alt={currentCategory.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="w-full md:w-3/5 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-[9px] font-bold uppercase tracking-wider border border-indigo-100">Estimated Breakdown</span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-zinc-900 leading-tight">{selectedOption.name}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-500">{selectedOption.details}</p>
                  <div className="mt-6 pt-5 border-t border-zinc-100">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-2.5">What's Included</span>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {["Genuine copper windings", "Doorstep diagnosis", "Clean-up after service", "1-Year work warranty"].map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-[10px] font-bold text-zinc-600">
                          <Check size={11} className="text-emerald-500 shrink-0" strokeWidth={3} />{inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-zinc-100">
                    <div>
                      <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Approx. Cost</span>
                      <strong className="mt-1 block text-xl font-extrabold text-zinc-900 font-display">{selectedOption.price}</strong>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Timeframe</span>
                      <strong className="mt-1 block text-xl font-extrabold text-zinc-900 font-display">{selectedOption.time}</strong>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <button onClick={handleBook} className="btn-primary w-full justify-center text-xs py-3.5">
                    Pre-fill Form & Book Now <ArrowRight size={15} />
                  </button>
                  <a href={whatsappLink(`Hello, I'm interested in: ${selectedOption.name}. Estimate: ${selectedOption.price}`)}
                    target="_blank" rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50/50 hover:bg-emerald-50 py-3.5 rounded-2xl border border-emerald-100">
                    <MessageCircle size={15} /> Request on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
