import type { Meta, StoryObj } from "@storybook/react";
import { WeatherWidgetTitle } from "./WeatherWidgetTitle";

const meta = {
  title: "Atoms/WeatherWidgetTitle",
  component: WeatherWidgetTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WeatherWidgetTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
