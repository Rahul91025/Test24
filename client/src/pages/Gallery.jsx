import { BatteryCharging, Fan, Gauge, House, PlugZap, Sparkles, Wrench, Zap } from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import BookingSection from "../components/sections/BookingSection.jsx";
import { INDIAN } from "../assets/images.js";

const gallery = [
  { title: "On-Site Electrician Service", text: "Experienced Indian electrician handling repairs and installations at your location.", image: INDIAN.electrician, icon: Zap },
  { title: "Wire Connection & Repair", text: "Expert wire fixing, MCB connections and panel repair work done safely.", image: INDIAN.engineer, icon: Wrench },
  { title: "Stabilizer Repair Service", text: "Custom stabilizer diagnosis, transformer rewinding and component replacement.", image: INDIAN.stabilizer, icon: Gauge },
  { title: "House & Shop Wiring", text: "Full house wiring, earthing and MCB distribution board installation.", image: INDIAN.wiringWork, icon: House },
  { title: "Fan & Cooler Repair", text: "Same-day ceiling fan, table fan and air cooler motor repair at your home.", image: INDIAN.fanRepair, icon: Fan },
  { title: "Motor & Appliance Repair", text: "Electric motor rewinding, servicing and performance restoration.", image: INDIAN.motorRepair, icon: PlugZap },
  { title: "Stabilizer Servicing & Testing", text: "All-brand stabilizer repair — relay, control board, fuse and output testing.", image: INDIAN.stabilizer2, icon: BatteryCharging },
  { title: "Fan Motor Rewinding", text: "Professional motor rewinding restores full speed and cooling performance.", image: INDIAN.fanRepair2, icon: Fan },
  { title: "Servo Stabilizer Repair", text: "Servo-controlled voltage stabilizer overhaul and transformer replacement.", image: INDIAN.stabilizer4, icon: Gauge },
  { title: "Ceiling Fan Installation & Repair", text: "Quick and safe ceiling fan fitting, balancing and speed-control repair.", image: INDIAN.fanRepair3, icon: Wrench },
  { title: "AC Voltage Stabilizer Service", text: "AC mainline and split-AC stabilizer diagnosis, calibration and repair.", image: INDIAN.voltageStabilizer, icon: Sparkles },
  { title: "Electric Fan Repair & Service", text: "Capacitor, bearing, winding and switch repair for all types of fans.", image: INDIAN.fanRepair4, icon: Zap },
];

export default function GalleryPage() {
  return (
    <PublicLayout>
      <PageHero bgImage={INDIAN.wiringWork} eyebrow="Our Work" title="Skilled work, carefully completed"
        text="A look at the electrical, stabilizer and repair projects we handle every day across Chaibasa." />
      <section className="section bg-zinc-50/30">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          {gallery.map(({ title, text, image, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="gallery-card h-52 sm:h-64">
                <img src={image} alt={title} />
                <div className="g-overlay">
                  <strong className="text-white font-display text-base font-bold block">{title}</strong>
                  <p className="text-white/75 text-xs mt-1 font-medium">{text}</p>
                </div>
                <span className="absolute top-4 left-4 icon-box bg-white/90 backdrop-blur-sm border-white shadow-sm"><Icon size={17} /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <BookingSection />
    </PublicLayout>
  );
}
