const stats = [
  { value: "25+", label: "Years of expertise" },
  { value: "1,200+", label: "Happy customers" },
  { value: "4.9 ★", label: "Customer rating" },
  { value: "7+", label: "Service areas" },
];

// Mobile: 2×2 grid — left col gets border-r, top row gets border-b
// Desktop (md+): 1×4 — first 3 items get border-r, no border-b
const mobileBorder = [
  "border-r border-b",   // row 0, col 0
  "border-b",            // row 0, col 1 — NO border-r (rightmost column)
  "border-r",            // row 1, col 0
  "",                    // row 1, col 1
];
const mdBorder = ["md:border-b-0 md:border-r", "md:border-b-0 md:border-r", "md:border-r", "md:border-r-0"];

export default function StatsBanner() {
  return (
    <div className="stats-banner border-b border-zinc-800">
      <div className="container grid grid-cols-2 md:grid-cols-4 py-0">
        {stats.map(({ value, label }, i) => (
          <div key={label}
            className={`flex flex-col items-center justify-center py-7 sm:py-8 px-4 text-center border-zinc-800 ${mobileBorder[i]} ${mdBorder[i]}`}>
            <strong className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">{value}</strong>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
