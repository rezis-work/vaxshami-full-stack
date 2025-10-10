import { Query } from "node-appwrite";
import { Hono } from "hono";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";

const app = new Hono().get("/defaultpost", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const title = c.req.query("title");
  const limitParam = c.req.query("limit");
  const limit = limitParam ? Math.min(Number(limitParam), 100) : 1;

  if (!title) {
    return c.json(
      {
        error: "Missing article title.",
      },
      500
    );
  }

  const queries: string[] = [Query.limit(limit), Query.equal("title", title)];

  if (!DATABASE_ID || !POSTSTABLE_ID) {
    return c.json(
      {
        error:
          "Missing Appwrite configuration. Please check DATABASE_ID and COLLECTION_ID.",
      },
      500
    );
  }

  try {
    const posts = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      queries
    );
    return c.json(posts.documents);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return c.json({ error: "Failed to fetch posts from database." }, 500);
  }
});

export default app;
