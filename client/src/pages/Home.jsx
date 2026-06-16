import { useState } from "react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import HeroSlider from "../components/sections/HeroSlider.jsx";
import StatsBanner from "../components/sections/StatsBanner.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import ProcessSection from "../components/sections/ProcessSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import TrustSection from "../components/sections/TrustSection.jsx";
import ReviewsSection from "../components/sections/ReviewsSection.jsx";
import ServiceAreas from "../components/sections/ServiceAreas.jsx";
import InteractiveAdvisor from "../components/sections/InteractiveAdvisor.jsx";
import DarkCTA from "../components/sections/DarkCTA.jsx";
import FAQSection from "../components/sections/FAQSection.jsx";
import BookingSection from "../components/sections/BookingSection.jsx";

export default function HomePage() {
  const [bookingPrefill, setBookingPrefill] = useState({ service: "", description: "" });
  return (
    <PublicLayout>
      <HeroSlider />
      <StatsBanner />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TrustSection />
      <ReviewsSection />
      <ServiceAreas />
      <InteractiveAdvisor onSelectService={(s, d) => setBookingPrefill({ service: s, description: d })} />
      <DarkCTA />
      <FAQSection />
      <BookingSection prefill={bookingPrefill} />
    </PublicLayout>
  );
}
