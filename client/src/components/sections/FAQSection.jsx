import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "../../constants/faqs.js";
import { whatsappLink } from "../../config/site.js";
import Reveal from "../ui/Reveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section bg-white border-t border-zinc-200/50">
      <div className="container grid gap-10 lg:gap-16 lg:grid-cols-[0.6fr_1fr] items-start">
        <Reveal>
          <div className="sticky top-32 text-left">
            <SectionTitle eyebrow="FAQ" title="Common questions answered"
              text="Everything you need to know before booking a service with us." />
            <div className="mt-10">
              <a href={whatsappLink("Hello, I have a question about your electrical services.")} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <MessageCircle size={15} /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {faqs.map(([question, answer], i) => (
              <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{question}</span>
                  <ChevronDown size={18} className={`text-zinc-400 shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180 text-indigo-500" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                      className="overflow-hidden">
                      <p className="faq-answer">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
