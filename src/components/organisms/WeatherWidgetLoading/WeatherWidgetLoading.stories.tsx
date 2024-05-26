import type { Meta, StoryObj } from "@storybook/react";
import { WeatherWidgetLoading } from "./WeatherWidgetLoading";

const meta = {
  title: "Organisms/WeatherWidgetLoading",
  component: WeatherWidgetLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WeatherWidgetLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
