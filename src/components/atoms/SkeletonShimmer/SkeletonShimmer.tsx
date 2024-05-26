type SkeletonShimmerProps = React.ComponentProps<"div">;
export function SkeletonShimmer(props: SkeletonShimmerProps) {
  return (
    <div
      className="relative isolate overflow-hidden bg-zinc-100 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-zinc-100/10 before:bg-gradient-to-r before:from-transparent before:via-zinc-50/50 before:to-transparent"
      {...props}
    />
  );
}
