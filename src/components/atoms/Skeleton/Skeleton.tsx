import { combineClasses } from "@/utils/styling/combineClasses";

type SkeletonProps = React.ComponentProps<"div">;
export function Skeleton({ className, ...props }: SkeletonProps) {
  const baseClasses = "rounded-lg bg-zinc-300/80";
  const combinedClasses = combineClasses(baseClasses, className);

  return <div {...props} className={combinedClasses} />;
}
