import { getFilterKeys } from "@/constants/filterData";
import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { FilterCategory, FilterOption } from "@/types/filterTypes";
import { Hono } from "hono";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const database = c.get("databases");
  const categoryParam = c.req
    .query("category")
    ?.toLowerCase() as FilterCategory;

  const category: FilterCategory = categoryParam || "dish";

  const res = await database.getCollection(DATABASE_ID, POSTSTABLE_ID);

  const validFilterKeys = getFilterKeys(category);
  const optionsFilteres: FilterOption[] = res.attributes.filter((item) =>
    validFilterKeys.includes(item.key)
  );

  return c.json(optionsFilteres);
});

export default app;
