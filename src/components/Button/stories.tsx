import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Button, ButtonProperties } from ".";

export default {
  title: "Components / Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UNIb1sf1sqxhVQrU0bbZv1/Ignite-Lab-Design-System?node-id=2%3A324",
    },
  },
} as Meta<ButtonProperties>;

export const Default: StoryObj<ButtonProperties> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const AsAnchor: StoryObj<ButtonProperties> = {
  args: { asChild: true, children: <a href="#link">Link</a> },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const FullWidth: StoryObj<ButtonProperties> = {
  args: { fullWidth: true },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
