import { ArrowRight } from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ReviewsSection from "../components/sections/ReviewsSection.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import { mapsUrl } from "../config/site.js";

export default function ReviewsPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Reviews" title="What local customers say"
        text="Trust is earned through the quality of each visit and the clarity of every recommendation." />
      <ReviewsSection />
      <section className="section bg-zinc-50/30 border-t border-zinc-200/50 text-center">
        <div className="container">
          <SectionTitle center eyebrow="Your Experience" title="Worked with us recently?"
            text="Your feedback helps more families and businesses in Chaibasa find dependable electrical support." />
          <div className="mt-10">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">Leave a Google Review <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
