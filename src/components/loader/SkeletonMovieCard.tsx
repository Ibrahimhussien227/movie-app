import { Skeleton } from "@/components/ui/skeleton";

const SkeletonMovieCard = () => {
  return (
    <div className="flex flex-col rounded-lg">
      <Skeleton className="w-70 h-105 rounded-lg bg-[#1f1f1f]" />

      <div className="px-3 pt-3 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-5 w-38 bg-[#1f1f1f]" />
          <Skeleton className="h-3 w-[80px] bg-[#1f1f1f]" />
        </div>

        <Skeleton className="h-6 w-6 rounded-full bg-[#1f1f1f]" />
      </div>
    </div>
  );
};

export default SkeletonMovieCard;
