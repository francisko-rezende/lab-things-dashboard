import { combineClasses } from "@/utils/styling/combineClasses";
import { SkeletonShimmer } from "../SkeletonShimmer";

type SkeletonsWrapperProps = React.ComponentProps<"div"> & {
  loadingMessage?: string;
};
export function SkeletonsWrapper({
  className,
  loadingMessage = "Carregando...",
  ...props
}: SkeletonsWrapperProps) {
  const baseClasses = "rounded-2xl bg-zinc-950/5 p-4";
  const combinedClasses = combineClasses(baseClasses, className);

  return (
    <SkeletonShimmer role="status">
      <span className="sr-only">{loadingMessage}</span>
      <div {...props} className={combinedClasses} />
    </SkeletonShimmer>
  );
}
