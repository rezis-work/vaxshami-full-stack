import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetFilterOptions = (category: string) => {
  const query = useQuery({
    queryKey: ["filteroptions", category],
    queryFn: async () => {
      const res = await client.api.filteroptions.$get({
        query: { category },
      });

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
