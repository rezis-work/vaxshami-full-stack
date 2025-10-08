"use client";
import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = (postLimit?: number) => {
  const query = useQuery({
    queryKey: ["travelnews"],
    queryFn: async () => {
      const response = await client.api.travelnews.$get({
        limit: postLimit,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch posts from api");
      }

      const data = await response.json();
      return data;
    },
  });

  return query;
};
