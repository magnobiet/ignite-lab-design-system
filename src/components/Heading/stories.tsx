import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Heading, HeadingProperties } from ".";

export default {
  title: "Components / Heading",
  component: Heading,
  args: {
    children: "Heading",
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
      url: "https://www.figma.com/file/UNIb1sf1sqxhVQrU0bbZv1/Ignite-Lab-Design-System?node-id=2%3A298",
    },
  },
} as Meta<HeadingProperties>;

export const Default: StoryObj<HeadingProperties> = {};

export const Small: StoryObj<HeadingProperties> = {
  args: { size: "sm" },
};

export const Large: StoryObj<HeadingProperties> = {
  args: { size: "lg" },
};

export const CustomTag: StoryObj<HeadingProperties> = {
  args: { asChild: true, children: <h1>Heading</h1> },
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
