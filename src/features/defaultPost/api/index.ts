"use client";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";

export const useGetPostByTitle = (title?: string) => {
  const query = useQuery({
    queryKey: ["post", title],
    queryFn: async () => {
      if (!title) throw new Error("Post title is required");

      const response = await client.api.defaultpost.$get({
        query: {
          title,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch post from API");
      }

      const data = (await response.json()) as DatabasePost[];
      return data;
    },
    enabled: !!title,
  });

  return query;
};
