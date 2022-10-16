import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { rest } from "msw";
import { AuthPage } from ".";

export default {
  title: "Pages / Auth Page",
  component: AuthPage,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  parameters: {
    msw: {
      handlers: [
        rest.post("/auth", (_request, response, { json }) => {
          return response(json({ success: true }));
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const { getByTestId, getByRole, getByText } = within(canvasElement);

    userEvent.type(getByTestId("input-email"), "magno.biet@gmail.com");

    userEvent.type(getByTestId("input-password"), "12345678");

    userEvent.click(getByRole("button"));

    await waitFor(() => {
      expect(getByText("Login realizado!")).toBeInTheDocument();
    });
  },
};

export const Invalid: StoryObj = {
  parameters: {
    msw: {
      handlers: [
        rest.post("/auth", (_request, response, { status }) => {
          return response(status(401));
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const { getByTestId, getByRole, getByText } = within(canvasElement);

    userEvent.type(getByTestId("input-email"), "magno.biet@gmail.com");

    userEvent.type(getByTestId("input-password"), "12345678");

    userEvent.click(getByRole("button"));

    await waitFor(() => {
      expect(getByText("Credenciais inválidas.")).toBeInTheDocument();
    });
  },
};
