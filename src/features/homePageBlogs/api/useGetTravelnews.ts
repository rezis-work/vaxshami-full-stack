"use client";
import { client } from "@/lib/rpc";
import { DatabasePost } from "@/types/blogCardTypes";
import { useQuery } from "@tanstack/react-query";
export const useGetTravelNews = (postLimit?: number) => {
  return useQuery({
    queryKey: ["travelnews", postLimit],
    queryFn: async () => {
      const response = await client.api.travelnews.$get({ limit: postLimit });

      const data = await response.json();
      return data as DatabasePost[];
    },
  });
};
