"use client";

import type { InputHTMLAttributes } from "react";
import { useState } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  showPasswordToggle?: boolean;
};

export default function FormInput({
  label,
  error,
  showPasswordToggle = false,
  className = "",
  type = "text",
  ...props
}: FormInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const canTogglePassword = showPasswordToggle && type === "password";

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#2e211b]">{label}</span>
      <span className="relative block">
        <input
          {...props}
          type={canTogglePassword && isPasswordVisible ? "text" : type}
          aria-invalid={Boolean(error)}
          className={`w-full rounded-lg border bg-white px-5 py-4 text-base outline-none transition placeholder:text-[#2e211b]/30 focus:ring-2 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
              : "border-[#2e211b]/15 focus:border-[#a46f38] focus:ring-[#a46f38]/15"
          } ${canTogglePassword ? "pr-12" : ""} ${className}`}
        />
        {canTogglePassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#2e211b]/45 transition hover:text-[#a46f38] focus:outline-none focus:ring-2 focus:ring-[#a46f38]/20"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M3 3l18 18" />
                <path d="M10.6 10.7a2 2 0 0 0 2.7 2.7" />
                <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5.2 0 8.7 5 9.5 7-.3.8-1.1 2.1-2.4 3.4M6.2 6.2C3.9 7.8 2.8 10.1 2.5 12c.8 2 4.3 7 9.5 7a10.5 10.5 0 0 0 4.1-.8" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            )}
          </button>
        )}
      </span>
      {error && (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
