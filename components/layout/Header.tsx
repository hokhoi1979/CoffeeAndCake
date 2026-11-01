"use client";

import Link from "next/link";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";

const links = [
  { label: "Home", href: "#trang-chu" },
  { label: "Menu", href: "#thuc-don" },
  { label: "About us", href: "#ve-chung-toi" },
  { label: "Contact", href: "#lien-he" },
];

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isHydrated = useAuthStore((state) => state.isHydrated);
  const logoutUser = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="#trang-chu"
          className="flex items-center gap-2 text-white"
          onClick={close}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-200/70 text-sm">
            ☕
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide">
            The Bean Haven
          </span>
        </Link>
        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={toggle}
        >
          <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
        </button>
        <nav
          className={`${isOpen ? "block" : "hidden"} absolute left-6 right-6 top-20 rounded-xl bg-[#2e211b] p-5 md:static md:block md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="text-sm font-medium text-white/85 transition hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {!isHydrated || !isAuthenticated ? (
                <Link
                  href="/login"
                  onClick={close}
                  className="inline-block rounded-full bg-[#f2dfbd] px-5 py-2 text-xs font-bold text-[#2e211b] transition hover:bg-white"
                >
                  Sign in
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="max-w-32 truncate text-sm font-medium text-white">
                    {user?.name || user?.email}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      handleLogout();
                      close();
                    }}
                    className="rounded-full bg-[#f2dfbd] px-5 py-2 text-xs font-bold text-[#2e211b] transition hover:bg-white"
                  >
                    Log out
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
