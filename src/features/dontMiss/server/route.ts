import { DATABASE_ID, DRINKSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const queries = [
    Query.limit(4),
    Query.orderDesc("$createdAt")
  ];

  const res = await databases.listDocuments(
    DATABASE_ID,
    DRINKSTABLE_ID,
    queries);

    console.log(res.documents);
    

  return c.json(res.documents);

});

export default app;
