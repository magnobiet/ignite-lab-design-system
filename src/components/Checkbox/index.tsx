import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check as CheckIcon } from "phosphor-react";

type CheckboxProperties = {} & CheckboxPrimitive.CheckboxProps;

export function Checkbox(properties: CheckboxProperties) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded focus:ring-2 ring-white"
      {...properties}
    >
      <CheckboxPrimitive.Indicator asChild>
        <CheckIcon weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
