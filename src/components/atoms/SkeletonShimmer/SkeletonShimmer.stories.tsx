import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonShimmer } from "./SkeletonShimmer";
import { Skeleton } from "../Skeleton/Skeleton";

const meta = {
  title: "Atoms/SkeletonShimmer",
  component: SkeletonShimmer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SkeletonShimmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <Skeleton className="h-28 w-28" /> },
};
