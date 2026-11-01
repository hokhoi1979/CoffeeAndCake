import { homeText } from "@/constants/texts";

export default function CoffeeClubSection() {
  return (
    <section id="dat-ban" className="relative overflow-hidden bg-[#2e211b] px-6 py-16 text-white lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80')" }} />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#e1bb83]">{homeText.clubEyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl">{homeText.clubTitle}</h2>
        <p className="mt-3 text-sm text-white/60">{homeText.clubDescription}</p>
        <form className="mt-7 flex w-full max-w-md overflow-hidden rounded-full bg-white p-1" action="#">
          <input type="email" placeholder={homeText.emailPlaceholder} aria-label={homeText.emailPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-xs text-[#2e211b] outline-none" />
          <button type="submit" className="rounded-full bg-[#b9824e] px-5 py-3 text-xs font-bold text-white">{homeText.subscribe}</button>
        </form>
      </div>
    </section>
  );
}
