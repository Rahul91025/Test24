import { MessageCircle, Phone } from "lucide-react";
import { phone, whatsappLink } from "../../config/site.js";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col gap-2.5 sm:gap-3">
      <a href={`tel:+${phone}`}
        className="grid h-12 w-12 place-items-center rounded-full text-white transition hover:scale-110 md:hidden"
        style={{ background: "linear-gradient(135deg, #4F46E5, #3730A3)", boxShadow: "0 6px 20px rgba(79,70,229,0.35)" }}
        aria-label="Call now"><Phone size={18} />
      </a>
      <a href={whatsappLink()} target="_blank" rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full text-white transition hover:scale-110 animate-pulse-ring"
        style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)", boxShadow: "0 8px 24px rgba(34,197,94,0.35)" }}
        aria-label="WhatsApp"><MessageCircle size={24} fill="currentColor" />
      </a>
    </div>
  );
}
