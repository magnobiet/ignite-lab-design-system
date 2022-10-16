import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export type HeadingProperties = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  className?: string;
};

export function Heading({
  children,
  size,
  asChild,
  className,
}: HeadingProperties) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
