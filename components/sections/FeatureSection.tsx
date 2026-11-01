import { homeText } from "@/constants/texts";

export default function FeatureSection() {
  return (
    <section className="border-b border-[#2e211b]/10 bg-[#fbf8f2]">
      <div className="mx-auto grid max-w-6xl divide-y divide-[#2e211b]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {homeText.features.map(([icon, title, description]) => (
          <div key={title} className="flex items-center gap-4 px-6 py-6 lg:block lg:text-center">
            <span className="text-2xl text-[#765335]">{icon}</span>
            <div className="lg:mt-3">
              <h3 className="text-xs font-bold text-[#2e211b]">{title}</h3>
              <p className="mt-1 text-[11px] text-[#2e211b]/55">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
