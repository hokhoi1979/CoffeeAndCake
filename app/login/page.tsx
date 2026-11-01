import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#f3ede4] px-4 py-4 text-[#2e211b] sm:px-8 sm:py-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-[#fbf8f2] shadow-[0_20px_70px_rgba(46,33,27,0.12)] lg:min-h-[min(760px,calc(100vh-4rem))] lg:grid-cols-[1.05fr_.95fr]">
        <section
          className="relative hidden min-h-170 overflow-hidden bg-cover bg-center lg:block"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(38, 23, 15, .12), rgba(38, 23, 15, .78)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85')",
          }}
        >
          <Link
            href="/"
            className="absolute left-10 top-9 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f2dfbd]/70 text-sm">
              ☕
            </span>
            The Bean Haven
          </Link>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#e1bb83]">
              Welcome back
            </p>
            <h1 className="max-w-md text-5xl leading-[.98]">
              Good coffee.
              <br />
              Better days.
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
              Your favorite coffee moments are waiting for you.
            </p>
          </div>
        </section>

        <section className="flex min-h-[calc(100vh-2.5rem)] flex-col px-6 py-8 sm:px-12 sm:py-10 lg:min-h-[720px] lg:px-16">
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2e211b] lg:hidden"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#a46f38] text-xs">
                ☕
              </span>
              The Bean Haven
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-170 flex-1 flex-col justify-center py-8 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a46f38]">
              Member login
            </p>
            <h2 className="mt-3 text-4xl text-[#2e211b]">
              Welcome back.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#2e211b]/55">
              Sign in to manage your orders and coffee club membership.
            </p>

            <LoginForm />
          </div>

          <p className="text-center text-[11px] text-[#2e211b]/40">
            By signing in, you agree to our Terms and Privacy Policy.
          </p>
        </section>
      </div>
    </main>
  );
}
