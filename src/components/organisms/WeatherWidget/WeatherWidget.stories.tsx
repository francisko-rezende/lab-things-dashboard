import type { Meta, StoryObj } from "@storybook/react";
import { WeatherWidget } from "./WeatherWidget";

const meta = {
  title: "Organisms/WeatherWidget",
  component: WeatherWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WeatherWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
