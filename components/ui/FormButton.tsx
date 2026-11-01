import type { ButtonHTMLAttributes } from "react";

type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function FormButton({ variant = "primary", className = "", ...props }: FormButtonProps) {
  const styles =
    variant === "outline"
      ? "border border-[#2e211b]/15 bg-white text-[#2e211b] hover:border-[#a46f38]"
      : "bg-[#a46f38] text-white hover:bg-[#8d5e31]";

  return (
    <button
      {...props}
      className={`rounded-full px-6 py-4 text-base font-bold transition ${styles} ${className}`}
    />
  );
}
