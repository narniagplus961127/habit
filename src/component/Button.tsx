import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost-destructive";

type ButtonProps = {
  variant?: ButtonVariant;
} & ComponentProps<"button">;

function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        getVariantStyles(variant),
        "transition-colors px-2 py-4 rounded-md text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
    />
  );
}

function getVariantStyles(variant: ButtonVariant): string {
  switch (variant) {
    case "primary":
      return "bg-zinc-600 hover:bg-zinc-400";
    case "secondary":
      return "bg-zinc-400 hover:bg-zinc-400";
    case "ghost-destructive":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-zinc-600 hover:bg-zinc-400";
  }
}

export default Button;
