import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const database = c.get("databases");

  const res = await database.getCollection(DATABASE_ID, POSTSTABLE_ID);

  const optionsFilteres = res.attributes.filter(
    (item) =>
      item.key === "coursetype" ||
      item.key === "mainingredient" ||
      item.key === "dairyfree" ||
      item.key === "glutenfree" ||
      item.key === "streetfood" ||
      item.key === "vegan" ||
      item.key === "temperature" ||
      item.key === "region"
  );
  return c.json(optionsFilteres);
});

export default app;
