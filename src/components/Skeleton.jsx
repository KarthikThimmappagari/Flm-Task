import { cn } from "../lib/utils";

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200 dark:bg-slate-800", className)}
      {...props}
    />
  );
}

export function CompanyCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="space-y-2 mt-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="mt-auto pt-4">
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}
