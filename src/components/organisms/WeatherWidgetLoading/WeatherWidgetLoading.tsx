import { Skeleton } from "@/components/atoms/Skeleton";
import { SkeletonShimmer } from "@/components/atoms/SkeletonShimmer";
import { SkeletonsWrapper } from "@/components/atoms/SkeletonsWrapper";

export function WeatherWidgetLoading() {
  return (
    <SkeletonShimmer>
      <SkeletonsWrapper
        className="flex flex-col items-center gap-5"
        loadingMessage="Carregando informações do tempo..."
      >
        <Skeleton className="h-14 w-40" />
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-28 w-28" />
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-5 w-44" />
      </SkeletonsWrapper>
    </SkeletonShimmer>
  );
}
