import { homeText } from "@/constants/texts";

const menuImages = [
  "photo-1509042239860-f550ce710b93",
  "photo-1510707577719-ae7c14805e3a",
  "photo-1579992357154-faf4bde95b3d",
  "photo-1555507036-ab1f4038808a",
];

export default function MenuSection() {
  return (
    <section id="thuc-don" className="bg-[#fbf8f2] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a46f38]">{homeText.menuEyebrow}</p>
            <h2 className="mt-2 font-serif text-4xl text-[#2e211b]">{homeText.menuTitle}</h2>
          </div>
          <a href="#thuc-don" className="text-xs font-semibold text-[#765335]">{homeText.viewMenu}</a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeText.menuItems.map((item, index) => (
            <article key={item.name} className="overflow-hidden rounded-md border border-[#2e211b]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/${menuImages[index]}?auto=format&fit=crop&w=600&q=80')` }} />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#2e211b]">{item.name}</h3>
                  <span className="text-xs font-bold text-[#a46f38]">{item.price}</span>
                </div>
                <p className="mt-2 text-[11px] leading-5 text-[#2e211b]/55">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
