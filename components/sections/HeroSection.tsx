import { homeText } from "@/constants/texts";

export default function HeroSection() {
  return (
    <section id="trang-chu" className="relative flex min-h-[620px] items-center overflow-hidden bg-[#2e211b] px-6 pt-24 text-white lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(33, 20, 13, .9) 0%, rgba(33, 20, 13, .58) 47%, rgba(33, 20, 13, .2) 100%), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=85')" }}
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e1bb83]">{homeText.heroEyebrow}</p>
          <h1 className="font-serif text-5xl leading-[.95] tracking-tight sm:text-7xl">{homeText.heroTitle}<br />{homeText.heroTitleLineTwo}</h1>
          <p className="mt-6 max-w-md text-sm leading-6 text-white/75">{homeText.heroDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#thuc-don" className="rounded-full bg-[#c8955d] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#b9834d]">{homeText.menuButton}</a>
            <a href="#dat-ban" className="rounded-full border border-white/60 px-6 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-[#2e211b]">{homeText.tableButton}</a>
          </div>
        </div>
      </div>
      <p className="absolute bottom-8 right-8 hidden max-w-24 whitespace-pre-line text-right font-serif text-2xl italic leading-6 text-[#f2dfbd] md:block">{homeText.heroNote.replaceAll("|", "\n")}</p>
    </section>
  );
}
