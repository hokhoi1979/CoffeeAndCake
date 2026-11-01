import { homeText } from "@/constants/texts";

export default function AboutSection() {
  return (
    <section id="ve-chung-toi" className="bg-[#eee6da] px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
        <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85')" }}>
          <p className="absolute bottom-7 left-7 max-w-[190px] whitespace-pre-line font-serif text-3xl italic leading-7 text-white">{homeText.storyNote.replaceAll("|", "\n")}</p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a46f38]">{homeText.aboutEyebrow}</p>
          <h2 className="mt-2 font-serif text-4xl leading-tight text-[#2e211b]">{homeText.aboutTitle}</h2>
          <p className="mt-5 text-sm leading-6 text-[#2e211b]/65">{homeText.aboutDescription}</p>
          <a href="#lien-he" className="mt-7 inline-block rounded-full bg-[#b9824e] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#9d693d]">{homeText.aboutButton}</a>
        </div>
      </div>
    </section>
  );
}
