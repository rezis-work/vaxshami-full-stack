"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PostFilters } from "@/types/postTypes";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";

export const useGetPosts = (filters: PostFilters = {}) => {
  const { queryKeyName = "posts", limit = 1000, ...restFilters } = filters;

  const cleanedFilters = Object.fromEntries(
    Object.entries(restFilters).filter(
      ([, value]) => value !== undefined && value !== null && value !== ""
    )
  );

  const query = { ...cleanedFilters, limit: String(limit) };

  const queryResult = useQuery({
    queryKey: [queryKeyName, query],
    queryFn: async () => {
      const response = await client.api.posts.$get({ query });
      if (!response.ok) throw new Error("Failed to fetch posts from API");
      return (await response.json()) as DatabasePost[];
    },
    placeholderData: keepPreviousData,
    staleTime: queryKeyName === "posts" ? 0 : undefined,
    gcTime: queryKeyName === "posts" ? 0 : undefined,
    refetchOnMount: queryKeyName === "posts" ? "always" : false,
  });

  return queryResult;
};
