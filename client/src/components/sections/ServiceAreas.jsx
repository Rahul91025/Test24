import { MapPin } from "lucide-react";
import { areas } from "../../constants/areas.js";

export default function ServiceAreas() {
  return (
    <div className="border-y border-zinc-200/50 bg-white py-7">
      <div className="container flex flex-col items-center gap-5 lg:flex-row">
        <div className="flex shrink-0 items-center gap-2.5 font-display text-sm font-bold text-zinc-900 whitespace-nowrap">
          <MapPin size={16} className="text-indigo-600" /> Areas We Serve
        </div>
        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {areas.map((area) => (
            <span key={area}
              className="rounded-full px-3.5 py-1.5 text-xs font-bold text-zinc-600 border border-zinc-200 bg-zinc-50 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors cursor-default">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
