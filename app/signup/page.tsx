import Link from "next/link";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#f3ede4] px-4 py-4 text-[#2e211b] sm:px-8 sm:py-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-[#fbf8f2] shadow-[0_20px_70px_rgba(46,33,27,0.12)] lg:min-h-[min(820px,calc(100vh-4rem))] lg:grid-cols-[1.05fr_.95fr]">
        <section
          className="relative hidden min-h-[720px] overflow-hidden bg-cover bg-center lg:block"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(38, 23, 15, .12), rgba(38, 23, 15, .78)), url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85')",
          }}
        >
          <Link
            href="/"
            className="absolute left-10 top-9 flex items-center gap-2 text-sm font-bold text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f2dfbd]/70 text-sm">
              ☕
            </span>
            <span className="text-lg tracking-wide">
              The Bean Haven
            </span>
          </Link>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#e1bb83]">
              Welcome to The Bean Haven
            </p>
            <h1 className="max-w-md text-5xl leading-[.98]">
              Start your day
              <br />
              on a wonderful note.
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Create an account for exclusive offers and a better coffee experience.
            </p>
          </div>
        </section>

        <section className="flex min-h-[calc(100vh-2.5rem)] flex-col px-6 py-8 sm:px-12 sm:py-10 lg:min-h-[720px] lg:px-16">
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-bold text-[#2e211b] lg:hidden"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#a46f38] text-xs">
                ☕
              </span>
              <span className="text-base">              The Bean Haven</span>
            </Link>
          </div>
          <div className="mx-auto flex w-full max-w-[410px] flex-1 flex-col justify-center py-8 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a46f38]">
              Member registration
            </p>
            <h2 className="mt-3 text-4xl text-[#2e211b]">
              Create your account.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#2e211b]/55">
              Join our coffee club and save your favorite choices.
            </p>
            <SignupForm />
          </div>
          <p className="text-center text-[11px] text-[#2e211b]/40">
            By creating an account, you agree to our Terms and Privacy Policy.
          </p>
        </section>
      </div>
    </main>
  );
}
