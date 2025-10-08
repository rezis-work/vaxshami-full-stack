"use client";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";
import { useQuery } from "@tanstack/react-query";
export const useGetSportNews = (postLimit?: number) => {
  return useQuery({
    queryKey: ["sportNews", postLimit],
    queryFn: async () => {
      const response = await client.api.sportnews.$get({ limit: postLimit });

      const data = await response.json();
      return data as DatabasePost[];
    },
  });
};
