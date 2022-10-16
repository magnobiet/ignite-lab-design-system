import { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Checkbox } from ".";
import { Text } from "../Text";

export default {
  title: "Components / Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <label className="flex items-center gap-2">
        {Story()}

        <Text size="sm">Checkbox</Text>
      </label>
    ),
    withDesign,
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/UNIb1sf1sqxhVQrU0bbZv1/Ignite-Lab-Design-System?node-id=2%3A330",
    },
  },
} as Meta;

export const Default: StoryObj = {};
