import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/lifestyle", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [
      Query.equal("category", "product"),
      Query.orderDesc("likescount"),
      Query.limit(5),
    ];

    const res = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  })
  .get("/dailynews", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [Query.orderDesc("$createdAt"), Query.limit(3)];

    const res = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      queries
    );

    return c.json(res.documents);
  });

export default app;
