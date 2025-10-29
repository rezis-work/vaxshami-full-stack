import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import type { DatabasePost } from "@/types/blogCardTypes";

export const useGetPostsList = () => {
  const query = useQuery({
    queryKey: ["topdrinks"],
    queryFn: async () => {
      const res = await client.api.topdrinks.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      const data = await res.json();
      return data as DatabasePost[];
    },
  });

  return query;
};
