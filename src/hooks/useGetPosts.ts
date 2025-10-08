"use client";
import { useQuery } from "@tanstack/react-query";
import { PostFilters } from "@/types/postTypes";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";

export const useGetPosts = (filters?: PostFilters) => {
  const { category, status, author, tag, limit } = filters || {};
  const resolvedLimit = limit ?? 10;

  const query = useQuery({
    queryKey: [
      "posts",
      {
        category: category ?? null,
        status: status ?? null,
        author: author ?? null,
        tag: tag ?? null,
        limit: resolvedLimit,
      },
    ],
    queryFn: async () => {
      const response = await client.api.posts.$get({
        query: {
          ...(category ? { category } : {}),
          ...(status ? { status } : {}),
          ...(author ? { author } : {}),
          ...(tag ? { tag } : {}),
          limit: String(resolvedLimit),
        },
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
