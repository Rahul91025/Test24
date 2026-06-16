import { BadgeCheck, Star } from "lucide-react";
import { reviews } from "../../constants/reviews.js";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function ReviewsSection() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <SectionTitle center eyebrow="Customer Reviews" title="Trusted by homes and businesses"
          text="Our reputation has grown one repair, one installation and one honest recommendation at a time." />
      </div>
      <div className="mt-16 relative w-full overflow-hidden select-none">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee gap-5 px-4">
          {doubled.map(({ text, name, location, avatar }, idx) => (
            <article key={`${name}-${idx}`}
              className="w-[260px] sm:w-[300px] md:w-[360px] shrink-0 rounded-3xl bg-white border border-zinc-200/60 p-5 md:p-7 flex flex-col justify-between text-left shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
                <p className="text-xs md:text-[13px] leading-relaxed text-zinc-600 font-medium">"{text}"</p>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4">
                <img src={avatar} alt={name} className="review-avatar" onError={e => { e.currentTarget.style.display = "none"; }} />
                <div>
                  <strong className="block text-xs font-bold text-zinc-900">{name}</strong>
                  <span className="text-[10px] text-zinc-400 font-semibold block">{location}</span>
                </div>
                <BadgeCheck size={16} className="ml-auto text-indigo-400 shrink-0" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
