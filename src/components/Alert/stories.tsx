import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Alert, AlertProperties } from ".";

export default {
  title: "Components / Alert",
  component: Alert,
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
  argTypes: {
    variation: {
      options: ["info", "success", "error", "warning"],
      control: {
        type: "inline-radio",
      },
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UNIb1sf1sqxhVQrU0bbZv1/Ignite-Lab-Design-System?node-id=54%3A97",
    },
  },
} as Meta<AlertProperties>;

export const Default: StoryObj<AlertProperties> = {};

export const Success: StoryObj<AlertProperties> = {
  args: { variation: "success" },
};

export const Error: StoryObj<AlertProperties> = {
  args: { variation: "error" },
};

export const Warning: StoryObj<AlertProperties> = {
  args: { variation: "warning" },
};

export const Info: StoryObj<AlertProperties> = {
  args: { variation: "info" },
};

export const Custom: StoryObj<AlertProperties> = {
  args: { variation: "info", className: "rounded-lg text-center" },
};
