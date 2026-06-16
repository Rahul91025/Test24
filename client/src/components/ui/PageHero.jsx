import SectionTitle from "./SectionTitle.jsx";

export default function PageHero({ eyebrow, title, text, bgImage }) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 text-center border-b border-zinc-200/50">
      {bgImage ? (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(9,9,11,0.78) 0%, rgba(9,9,11,0.88) 100%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container relative">
            <span className="eyebrow-dark">{eyebrow}</span>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl tracking-tighter">{title}</h1>
            {text && <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 font-medium">{text}</p>}
          </div>
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 100%, rgba(79,70,229,0.03) 0%, transparent 70%), #FAF9F6" }} />
          <div className="pointer-events-none absolute inset-0 grid-pattern" />
          <div className="orb-blue pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full opacity-25 animate-float" />
          <div className="container relative">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold text-zinc-900 md:text-4xl lg:text-5xl tracking-tighter">{title}</h1>
            {text && <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 font-medium">{text}</p>}
          </div>
        </>
      )}
    </section>
  );
}
