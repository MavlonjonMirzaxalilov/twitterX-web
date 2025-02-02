import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode | string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  type?: "button" | "submit";
  onclick?: () => void;
}

export default function Button({
  label,
  secondary,
  fullWidth,
  large,
  onclick,
  disabled,
  outline,
  type,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={cn(
        "rounded-full border font-semibold transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70",
        fullWidth ? "w-full" : "w-fit",
        secondary ? "bg-white text-black" : "bg-sky-500 text-white",
        large ? "px-5 py-3 text-xl" : "text-md px-4 py-3",
        outline
          ? "border-slate-600 bg-transparent text-sky-500 hover:bg-slate-800/40"
          : "",
      )}
    >
      {label}
    </button>
  );
}
