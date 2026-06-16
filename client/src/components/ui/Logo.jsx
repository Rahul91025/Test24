import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ inverse = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105"
        style={{ background: "linear-gradient(135deg, #4F46E5, #3730A3)", boxShadow: "0 4px 16px rgba(79,70,229,0.28)" }}
      >
        <Zap size={18} fill="currentColor" className="text-white" />
      </span>
      <span className="leading-tight text-left">
        <strong className={`block font-display text-[15px] font-bold tracking-tight ${inverse ? "text-white" : "text-zinc-900"}`}>
          Gupta Electronics
        </strong>
        <span className={`text-[9px] font-bold uppercase tracking-[0.2em] block ${inverse ? "text-indigo-300/80" : "text-zinc-400"}`}>
          & Electricals
        </span>
      </span>
    </Link>
  );
}
