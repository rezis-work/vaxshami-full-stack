import { DATABASE_ID, POSTSTABLE_ID } from "@/lib/config";
import { appwriteMiddleware } from "@/lib/session-midlweare";
import { Hono } from "hono";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/topcards", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const restaurantQueries = [
      Query.equal("category", "restaurant"),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ];

    const restaurant = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      restaurantQueries
    );

    const dishQueries = [
      Query.equal("category", "dish"),
      Query.orderDesc("$createdAt"),
      Query.limit(1),
    ];

    const dish = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      dishQueries
    );

    const newestRestaurant = restaurant.documents[0] || null;
    const newestDish = dish.documents[0] || null;

    return c.json([newestRestaurant, newestDish]);
  })
  .get("/bottomcards", appwriteMiddleware, async (c) => {
    const databases = c.get("databases");

    const queries = [
      Query.equal("category", "dish"),
      Query.orderDesc("$createdAt"),
      Query.limit(4),
    ];

    const newestDishes = await databases.listDocuments(
      DATABASE_ID,
      POSTSTABLE_ID,
      queries
    );

    return c.json(newestDishes.documents);
  });

export default app;
