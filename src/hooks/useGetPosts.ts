"use client";
import { useQuery } from "@tanstack/react-query";
import { PostFilters } from "@/types/postTypes";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";

export const useGetPosts = (filters?: PostFilters) => {
  const { category, status, author, tag, limit, sortBy, sortOrder } =
    filters || {};
  const resolvedLimit = limit ?? 1000;

  const query = useQuery({
    queryKey: [
      "posts",
      {
        category: category ?? null,
        status: status ?? null,
        author: author ?? null,
        tag: tag ?? null,
        limit: resolvedLimit,
        sortBy: sortBy ?? null,
        sortOrder: sortOrder ?? null,
      },
    ],
    queryFn: async () => {
      const query = {
        ...(category ? { category } : {}),
        ...(status ? { status } : {}),
        ...(author ? { author } : {}),
        ...(tag ? { tag } : {}),
        ...(sortBy ? { sortBy } : {}),
        ...(sortOrder ? { sortOrder } : {}),
        limit: limit ? String(resolvedLimit) : undefined,
      };

      const response = await client.api.posts.$get({
        query,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch posts from api");
      }

      const data = (await response.json()) as DatabasePost[];
      return data;
    },
  });

  return query;
};
