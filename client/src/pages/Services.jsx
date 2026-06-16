import { useState } from "react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import ProcessSection from "../components/sections/ProcessSection.jsx";
import InteractiveAdvisor from "../components/sections/InteractiveAdvisor.jsx";
import ServiceAreas from "../components/sections/ServiceAreas.jsx";
import BookingSection from "../components/sections/BookingSection.jsx";
import { INDIAN } from "../assets/images.js";

export default function ServicesPage() {
  const [bookingPrefill, setBookingPrefill] = useState({ service: "", description: "" });
  return (
    <PublicLayout>
      <PageHero bgImage={INDIAN.electrician} eyebrow="Our Services" title="Repair, protection and installation done right"
        text="Practical electrical solutions for homes, shops and everyday appliances across Chaibasa." />
      <ServicesSection full />
      <ProcessSection />
      <InteractiveAdvisor onSelectService={(s, d) => setBookingPrefill({ service: s, description: d })} />
      <ServiceAreas />
      <BookingSection prefill={bookingPrefill} />
    </PublicLayout>
  );
}
