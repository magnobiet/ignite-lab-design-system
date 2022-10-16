import { clsx } from "clsx";
import { ReactNode } from "react";

export type AlertProperties = {
  children: ReactNode;
  className?: string;
  variation?: "success" | "error" | "warning" | "info";
};

export function Alert({
  children,
  className,
  variation = "info",
  ...properties
}: AlertProperties) {
  return (
    <div
      className={clsx(
        "text-black px-4 py-3 rounded",
        {
          "bg-blue": variation === "info",
          "bg-green": variation === "success",
          "bg-red": variation === "error",
          "bg-yellow": variation === "warning",
        },
        className
      )}
      {...properties}
    >
      {children}
    </div>
  );
}
