import { Query } from "node-appwrite";
import { Hono } from "hono";
import { appwriteMiddleware } from "@/lib/session-midlweare";

const app = new Hono().get("/posts", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const limitParam = c.req.query("limit");
  const limit = limitParam ? Math.min(Number(limitParam), 100) : 10;

  // Build queries array
  const queries: string[] = [Query.limit(limit)];

  // Loop over all query params (except 'limit')
  const params = c.req.query();
  for (const [key, value] of Object.entries(params)) {
    if (key === "limit" || value == null || value === "") continue;

    // Use Query.equal for exact match; you can add Query.search for text columns
    queries.push(Query.equal(key, value));
  }

  const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

  console.log(DATABASE_ID, COLLECTION_ID);

  if (!DATABASE_ID || !COLLECTION_ID) {
    return c.json(
      {
        error:
          "Missing Appwrite configuration. Please check DATABASE_ID and COLLECTION_ID.",
      },
      500
    );
  }
  console.log(queries);
  try {
    const posts = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      queries
    );
    return c.json(posts.documents);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return c.json({ error: "Failed to fetch posts from database." }, 500);
  }
});

export default app;
