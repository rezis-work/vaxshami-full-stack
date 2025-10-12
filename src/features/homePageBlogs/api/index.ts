"use client";
import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = () => {
  const query = useQuery({
    queryKey: ["homeblogs", "lifestyle"],
    queryFn: async () => {
      const res = await client.api.homeblogs.lifestyle.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};

export const useGetDailyNewsList = () => {
  const query = useQuery({
    queryKey: ["homeblogs", "dailynews"],
    queryFn: async () => {
      const res = await client.api.homeblogs.dailynews.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
