import db from "@/database";
import { testSchema } from "@/database/schema";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  const table = await db.select().from(testSchema);

  return c.json(table[0]);
});

export default app;
