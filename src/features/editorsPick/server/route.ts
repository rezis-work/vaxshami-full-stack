import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { PostType } from "@/types/postType";
import { Hono } from "hono";
import { Models, Query } from "node-appwrite";

const app = new Hono().get("/", appwriteMiddleware, async (c) => {
  const databases = c.get("databases");
  const restaurant = await databases.listDocuments({
    databaseId: DATABASE_ID,
    collectionId: POSTSTABLE_ID,
    queries: [
      Query.equal("category", "restaurant"),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ],
  });

  const food = await databases.listDocuments({
    databaseId: DATABASE_ID,
    collectionId: POSTSTABLE_ID,
    queries: [
      Query.equal("category", "dish"),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ],
  });

  const newestRestaurant = restaurant.documents[0] || null;
  const newestFood = food.documents[0] || null;

  return c.json([newestRestaurant, newestFood]);
});

export default app;
