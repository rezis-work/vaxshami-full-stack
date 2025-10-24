import { Query } from "node-appwrite";
import { Hono } from "hono";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { DATABASE_ID, TEAMMEMBERS_ID } from "@/lib/config";

const app = new Hono().get("/team", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");

  const limitParam = c.req.query("limit");
  const limit = limitParam ? Math.min(Number(limitParam), 1000) : undefined;

  const queries: string[] = [];
  if (limit) queries.push(Query.limit(limit));
  const sortBy = c.req.query("sortBy");
  const sortOrder = c.req.query("sortOrder");

  const params = c.req.query();
  for (const [key, value] of Object.entries(params)) {
    if (
      ["limit", "sortBy", "sortOrder"].includes(key) ||
      value == null ||
      value === ""
    )
      continue;

    queries.push(Query.equal(key, value));
  }

  if (sortBy && sortOrder) {
    if (sortOrder.toLowerCase() === "asc") {
      queries.push(Query.orderAsc(sortBy));
    } else {
      queries.push(Query.orderDesc(sortBy));
    }
  } else {
    queries.push(Query.orderDesc("$createdAt"));
  }

  if (!DATABASE_ID || !TEAMMEMBERS_ID) {
    return c.json(
      {
        error:
          "Missing Appwrite configuration. Please check DATABASE_ID and TEAMMEMBERS_ID.",
      },
      500
    );
  }

  try {
    const members = await databases.listDocuments(
      DATABASE_ID,
      TEAMMEMBERS_ID,
      queries
    );
    return c.json(members.documents);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return c.json({ error: "Failed to fetch posts from database." }, 500);
  }
});

export default app;
