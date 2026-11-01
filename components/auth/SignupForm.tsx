"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import FormButton from "@/components/ui/FormButton";
import FormInput from "@/components/ui/FormInput";
import { authService } from "@/lib/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function SignupForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await authService.register({
        name,
        email,
        password,
        confirmPassword,
      });

      console.log("Registration successful:", result);
      await authService.register({
        name,
        email,
        password,
        confirmPassword,
      });

      // Hiển thị thông báo thành công
      toast.success("Register successful!");

      // Chuyển sang trang Login
      router.push("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <form
        className="auth-form mt-8 flex flex-col gap-5"
        onSubmit={handleSubmit}
        onInvalid={(event) => event.preventDefault()}
        noValidate
      >
        <div className="auth-form-item">
          <FormInput
            type="name"
            className="h-10"
            name="name"
            label="Full name"
            placeholder="John Doe"
            autoComplete="name"
            error={errors.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="auth-form-item">
          <FormInput
            type="email"
            className="h-10"
            name="email"
            label="Email address"
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-form-item">
          <FormInput
            className="h-10"
            type="password"
            name="password"
            label="Password"
            placeholder="Create a password"
            autoComplete="new-password"
            error={errors.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPasswordToggle
          />
        </div>
        <div className="auth-form-item ">
          <FormInput
            className="h-10"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            error={errors["confirmPassword"]}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            showPasswordToggle
          />
        </div>

        <FormButton
          type="submit"
          style={{ cursor: "pointer" }}
          className="w-full h-10 px-10 text-sm flex items-center justify-center"
        >
          <p className="text-[16px] text-center  text-white">Sign up</p>
        </FormButton>
        <p className="text-center text-xs text-[#2e211b]/55">
          New here?{" "}
          <Link
            href="/login"
            className="font-bold text-[#a46f38] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
      <div className="my-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[#2e211b]/35">
        <span className="h-px flex-1 bg-[#2e211b]/10" />
        Or sign up with
        <span className="h-px flex-1 bg-[#2e211b]/10" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FormButton
          type="button"
          variant="outline"
          className="rounded-md px-4 py-3 text-xs"
        >
          Sign up with Google
        </FormButton>
        <FormButton
          type="button"
          variant="outline"
          className="rounded-md px-4 py-3 text-xs"
        >
          Sign up with Facebook
        </FormButton>
      </div>
    </>
  );
}
