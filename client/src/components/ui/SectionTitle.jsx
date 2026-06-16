export default function SectionTitle({ eyebrow, title, text, center = false, light = false, dark = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {dark ? <span className="eyebrow-dark">{eyebrow}</span>
        : light ? <span className="eyebrow-light">{eyebrow}</span>
        : <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 sm:mt-5 font-display text-2xl sm:text-3xl font-extrabold leading-tight md:text-[40px] md:leading-[1.12] tracking-tighter ${dark ? "text-white" : "text-zinc-900"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{text}</p>}
    </div>
  );
}
