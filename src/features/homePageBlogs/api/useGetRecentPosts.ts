"use client";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";
import { useQuery } from "@tanstack/react-query";
export const useGetRecentPosts = (postLimit?: number) => {
  return useQuery({
    queryKey: ["recentPosts", postLimit],
    queryFn: async () => {
      const response = await client.api.recentposts.$get({ limit: postLimit });

      const data = await response.json();
      return data as DatabasePost[];
    },
  });
};
