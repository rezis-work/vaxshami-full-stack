import { tablesDB } from "@/lib/appwrite.server";
import env from "@/lib/config";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  const table = await tablesDB.listRows({
    databaseId: env.databases.testDB.databaseId,
    tableId: env.databases.testDB.tableId,
  });

  return c.json(table.rows[0]);
});

export default app;
