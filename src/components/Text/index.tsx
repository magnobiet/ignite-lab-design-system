import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export type TextProperties = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  className?: string;
};

export function Text({ children, size, asChild, className }: TextProperties) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
