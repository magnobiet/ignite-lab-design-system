import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Text, TextProperties } from ".";

export default {
  title: "Components / Text",
  component: Text,
  args: {
    children: "Text",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UNIb1sf1sqxhVQrU0bbZv1/Ignite-Lab-Design-System?node-id=2%3A314",
    },
  },
} as Meta<TextProperties>;

export const Default: StoryObj<TextProperties> = {};

export const Small: StoryObj<TextProperties> = {
  args: { size: "sm" },
};

export const Large: StoryObj<TextProperties> = {
  args: { size: "lg" },
};

export const CustomTag: StoryObj<TextProperties> = {
  args: { asChild: true, children: <p>Paragraph</p> },
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
