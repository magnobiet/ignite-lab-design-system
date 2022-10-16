import { Meta, StoryObj } from "@storybook/react";
import { Envelope as EnvelopeIcon } from "phosphor-react";
import { withDesign } from "storybook-addon-designs";
import { InputText, InputTextRootProperties } from ".";

export default {
  title: "Components / InputText",
  component: InputText.Root,
  args: {
    children: <InputText.Input placeholder="Placeholder" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UNIb1sf1sqxhVQrU0bbZv1/Ignite-Lab-Design-System?node-id=2%3A352",
    },
  },
} as Meta<InputTextRootProperties>;

export const Default: StoryObj<InputTextRootProperties> = {};

export const WithIcon: StoryObj<InputTextRootProperties> = {
  args: {
    children: [
      <InputText.Icon>
        <EnvelopeIcon />
      </InputText.Icon>,

      <InputText.Input type="email" placeholder="Placeholder" />,
    ],
  },
};
