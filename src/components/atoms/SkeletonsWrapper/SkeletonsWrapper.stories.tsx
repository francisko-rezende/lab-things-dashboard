import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonsWrapper } from "./SkeletonsWrapper";

const meta = {
  title: "Atoms/SkeletonsWrapper",
  component: SkeletonsWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonsWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
