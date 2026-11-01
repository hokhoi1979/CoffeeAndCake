"use client";

import Link from "next/link";
import { useState, type ChangeEvent } from "react";
import FormButton from "@/components/ui/FormButton";
import FormInput from "@/components/ui/FormInput";
import { authService } from "@/lib/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";

export default function LoginForm() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearError = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation cơ bản trước khi gọi API
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // 1. Gọi API login
      const res = await authService.login({ email, password });

      // 2. Lưu thông tin user & tokens vào Zustand Store + LocalStorage
      setAuth(res.user, res.tokens);

      toast.success("Login successful!");

      // 3. Chuyển hướng sang trang chủ
      router.push("/");
    } catch (error) {
      console.error("Error during login:", error);

      // Trích xuất câu báo lỗi từ Supabase API nếu có
      const apiErrorMessage =
        error instanceof Error
          ? error.message
          : "Invalid email or password. Please try again.";

      toast.error(apiErrorMessage);
    } finally {
      setIsLoading(false);
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
            type="email"
            className="h-10"
            name="email"
            label="Email address"
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError(e);
            }}
          />
        </div>
        <div className="auth-form-item">
          <FormInput
            className="h-10"
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            autoComplete="current-password"
            error={errors.password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError(e);
            }}
            showPasswordToggle
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-[#2e211b]/60">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 accent-[#a46f38]"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="font-bold text-[#a46f38] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <FormButton
          type="submit"
          disabled={isLoading}
          style={{ cursor: "pointer" }}
          className="w-full h-10 px-10 text-sm flex items-center justify-center"
        >
          <p className="text-[16px] text-center text-white">
            {isLoading ? "Signing in..." : "Sign in"}
          </p>
        </FormButton>

        <p className="text-center text-xs text-[#2e211b]/55">
          New here?{" "}
          <Link
            href="/signup"
            className="font-bold text-[#a46f38] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>

      <div className="my-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[#2e211b]/35">
        <span className="h-px flex-1 bg-[#2e211b]/10" />
        Or continue with
        <span className="h-px flex-1 bg-[#2e211b]/10" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <FormButton
          type="button"
          variant="outline"
          className="rounded-md px-4 text-xs"
        >
          Continue with Google
        </FormButton>
        <FormButton
          type="button"
          variant="outline"
          className="rounded-md px-4 py-3 text-xs"
        >
          Continue with Facebook
        </FormButton>
      </div>
    </>
  );
}
