import { Award, BadgeCheck, CalendarCheck, MapPin, Phone, ShieldCheck, Timer, Users, Wrench } from "lucide-react";
import { INDIAN } from "../assets/images.js";

export const heroSlides = [
  {
    image: INDIAN.electrician,
    eyebrow: "Available Today · Chaibasa, Jharkhand",
    title: "Trusted electrical care,",
    accent: "right at your doorstep.",
    sub: "Expert repair, custom stabilizers & safe wiring for homes and shops across Chaibasa. 25+ years of dependable local service.",
    cta: "Book Service Now",
  },
  {
    image: INDIAN.engineer,
    eyebrow: "Expert Wiring & Connection Work",
    title: "Precision wiring repairs",
    accent: "done safely every time.",
    sub: "Certified electricians handling house wiring, shop wiring, MCB installation and fault detection across West Singhbhum.",
    cta: "Book Wiring Service",
  },
  {
    image: INDIAN.stabilizer,
    eyebrow: "Custom Stabilizer Manufacturing",
    title: "Precision-built stabilizers",
    accent: "for Indian power conditions.",
    sub: "High-grade copper-wound voltage stabilizers — 1kVA to 5kVA — manufactured and tested right here in Chaibasa.",
    cta: "Get a Free Quote",
  },
  {
    image: INDIAN.fanRepair,
    eyebrow: "Same-Day Doorstep Appliance Repair",
    title: "Fast fan & appliance repairs,",
    accent: "at your home or shop.",
    sub: "Fan, cooler, mixer, inverter, iron — repaired the same day by experienced hands with genuine parts.",
    cta: "Book Repair",
  },
  {
    image: INDIAN.stabilizer2,
    eyebrow: "Voltage Stabilizer Servicing — All Brands",
    title: "Stabilizer not working?",
    accent: "We repair any brand, any size.",
    sub: "Relay clicking, no output, transformer burnt — our specialist diagnoses and restores your stabilizer fast, with a 3-month warranty on all parts.",
    cta: "Book Stabilizer Repair",
  },
];

export const processSteps = [
  { num: "01", title: "Book a Service", desc: "Fill our quick online form or call/WhatsApp us. Takes under 2 minutes.", icon: Phone },
  { num: "02", title: "We Confirm Visit", desc: "Our team calls back to confirm timing and understand the problem better.", icon: CalendarCheck },
  { num: "03", title: "Expert Arrives", desc: "A skilled, verified electrician arrives on time with the right tools.", icon: Wrench },
  { num: "04", title: "Job Done Right", desc: "Clean work, honest final pricing and a warranty on every job we complete.", icon: BadgeCheck },
];

export const trustFeatures = [
  { title: "25+ Years of Experience", desc: "Decades of hands-on electrical expertise built one satisfied customer at a time.", icon: Award, col: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE" },
  { title: "1-Year Work Warranty", desc: "All manufacturing and major installation work carries a 12-month workmanship guarantee.", icon: ShieldCheck, col: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { title: "Transparent Pricing", desc: "Clear quotes before we start. No surprise charges. No unnecessary replacements.", icon: BadgeCheck, col: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { title: "Same-Day Service", desc: "Most repairs and minor installations are completed on the same day you contact us.", icon: Timer, col: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  { title: "Doorstep Support", desc: "We come to your home or shop across 7+ service areas — no travel hassle for you.", icon: MapPin, col: "#DB2777", bg: "#FDF2F8", border: "#FBCFE8" },
  { title: "1,200+ Customers Served", desc: "Trusted by families, shops and businesses across Chaibasa for over two decades.", icon: Users, col: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
];
