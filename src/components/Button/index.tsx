import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProperties = {
  children: ReactNode;
  asChild?: boolean;
  fullWidth?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  asChild,
  fullWidth,
  className,
  ...properties
}: ButtonProperties) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "inline-block text-center py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
        {
          "w-full": fullWidth,
        },
        className
      )}
      {...properties}
    >
      {children}
    </Component>
  );
}
