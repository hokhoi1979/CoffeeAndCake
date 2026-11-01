import Link from "next/link";
import { commonText, homeText } from "@/constants/texts";

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-[#2e211b] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            href="#trang-chu"
            className="text-sm font-bold uppercase tracking-[0.12em]"
          >
            {commonText.brand}
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
            {homeText.footerDescription}
          </p>
        </div>
        <div className="text-sm text-white/60 sm:text-right">
          <p>{homeText.address}</p>
          <p className="mt-1">{homeText.hours}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-5 text-xs text-white/40">
        {homeText.copyright}
      </p>
    </footer>
  );
}
