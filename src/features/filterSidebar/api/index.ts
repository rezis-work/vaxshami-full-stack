import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetFilterOptions = () => {
  const query = useQuery({
    queryKey: ["filteroptions"],
    queryFn: async () => {
      const res = await client.api.filteroptions.$get();

      if (!res.ok) throw new Error("Failed to fetch the posts");

      return res.json();
    },
  });

  return query;
};
