import { BatteryCharging, Fan, Gauge, House, PlugZap, Sparkles, Wrench, Zap } from "lucide-react";
import { INDIAN, IMG } from "../assets/images.js";

export const services = [
  {
    title: "Stabilizer Manufacturing",
    description: "Custom-built voltage stabilizers for homes, shops and sensitive appliances — wound with high-grade copper.",
    items: ["Custom Stabilizer", "Home Stabilizer", "Shop Stabilizer"],
    icon: Gauge,
    image: INDIAN.stabilizer3,
    badge: "Custom Made",
  },
  {
    title: "Appliance Repair",
    description: "Careful diagnosis and dependable repair for everyday home appliances. Same-day doorstep service available.",
    items: ["Fan & Cooler", "Mixer & Iron", "Inverter & Stabilizer"],
    icon: Wrench,
    image: INDIAN.fanRepair2,
    badge: "Same Day",
  },
  {
    title: "Electrical Work",
    description: "Safe wiring, MCB installation and fault detection for homes and commercial shops across Chaibasa.",
    items: ["House & Shop Wiring", "MCB Installation", "Switch Board & Faults"],
    icon: PlugZap,
    image: IMG.wiring,
    badge: "Certified",
  },
];

export const detailedServices = [
  ["Custom Stabilizers",  "Copper-wound voltage stabilizers built to your exact load — 1kVA to 5kVA for homes, shops and sensitive equipment.", Gauge,          "stabilizers", INDIAN.stabilizer3],
  ["Stabilizer Repair",   "All-brand stabilizer diagnosis: relay clicking, no output, burnt transformer — repaired with 3-month warranty.",   BatteryCharging, "stabilizers", INDIAN.stabilizer4],
  ["Fan Repair",          "Capacitor, bearing, winding and speed-controller repair for ceiling fans, table fans and exhaust fans.",           Fan,             "repairs",     INDIAN.fanRepair2],
  ["Cooler Repair",       "Air cooler motor rewinding, water pump replacement, switch and wiring repair — same day, at your home.",          Sparkles,        "repairs",     INDIAN.fanRepair3],
  ["Mixer & Iron Repair", "Carbon brush, coupler, heating element and power cord replacement for kitchen and home appliances.",              Wrench,          "repairs",     INDIAN.fanRepair5],
  ["Inverter Repair",     "Charging circuit, battery terminal, relay and output fault diagnosis for all inverter makes and models.",         Zap,             "repairs",     INDIAN.voltageStabilizer],
  ["Home Wiring",         "New wiring, rewiring, earthing, load balancing and MCB distribution board fitting for residential properties.",  House,           "wiring",      INDIAN.wiringWork],
  ["Shop Electrical Work","Commercial wiring, three-phase connections, lighting circuits, MCBs and fault detection for shops and offices.", PlugZap,          "wiring",      INDIAN.electrician],
];

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "stabilizers", label: "Stabilizers" },
  { id: "repairs", label: "Appliance Repairs" },
  { id: "wiring", label: "Electrical Wiring" },
];

export const bookingServiceOptions = [
  "Stabilizer Manufacturing", "Stabilizer Repair", "Fan Repair", "Cooler Repair",
  "Mixer / Iron Repair", "Inverter Repair", "House Wiring", "Shop Wiring",
  "Electrical Installation", "Fault Detection", "Other",
];
