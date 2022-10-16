import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Text } from "../Text";

export type InputTextInputProperties =
  {} & InputHTMLAttributes<HTMLInputElement>;

export type InputTextRootProperties = {
  children: ReactNode;
  error?: boolean;
  className?: string;
};

export type InputTextIconProperties = {
  children: ReactNode;
};

export type InputTextHelperProperties = {
  children: string;
  error?: boolean;
};

function InputTextRoot({
  children,
  error,
  className,
}: InputTextRootProperties) {
  return (
    <div
      className={clsx(
        "h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2",
        {
          "ring-cyan-300": !error,
          "ring-red ring-2": error,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

InputTextRoot.displayName = "InputText.Root";

function InputTextInputIcon({ children }: InputTextIconProperties) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

InputTextInputIcon.displayName = "InputText.Icon";

function InputTextInput(properties: InputTextInputProperties) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 "
      {...properties}
    />
  );
}

InputTextInput.displayName = "InputText.Input";

function InputTextHelper({
  children,
  error,
  ...properties
}: InputTextHelperProperties) {
  return (
    <Text size="sm" className={clsx({ "text-red": error })} {...properties}>
      {children}
    </Text>
  );
}

InputTextHelper.displayName = "InputText.Helper";

export const InputText = {
  Root: InputTextRoot,
  Icon: InputTextInputIcon,
  Input: InputTextInput,
  Helper: InputTextHelper,
};
