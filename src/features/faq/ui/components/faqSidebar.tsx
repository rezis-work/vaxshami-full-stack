"use client";
import ErrorComponent from "@/components/shared/errorComponent";

import FollowUs from "@/features/followUs/ui/views/followUs-view";
import { useGetPostsList } from "@/features/gallery/api";
import FaqSkeleton from "@/features/gallery/ui/components/faqSkeleton";
import SecondaryPosts from "@/features/gallery/ui/components/secondaryPosts";

export default function FaqSidebar() {
  const { data, isLoading, isError } = useGetPostsList();

  if (isLoading) return <FaqSkeleton />;
  if (isError || !data) return <ErrorComponent />;
  return (
    <div className="mb-15 w-full px-[15px] lg:pr-[15px]  lg:col-span-1 ">
      <div className="xl:pl-[15px] space-y-8">
        <SecondaryPosts images={data as unknown as []} />
        <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
      </div>
    </div>
  );
}
