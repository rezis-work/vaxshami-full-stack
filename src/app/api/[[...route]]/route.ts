import { Hono } from "hono";
import { handle } from "hono/vercel";
import posts from "./posts";
import travelNews from "../../../features/homePageBlogs/server/travelnews";
import recentposts from "../../../features/homePageBlogs/server/recentposts";
import sportNews from "../../../features/homePageBlogs/server/sportNews";
import { AdditionalContext } from "@/lib/session-midlweare";

const app = new Hono<AdditionalContext>().basePath("/api");

const routes = app
  .route("/", posts)
  .route("/", travelNews)
  .route("/", recentposts)
  .route("/", sportNews);
export type AppType = typeof routes;
export const GET = handle(routes);
export const POST = handle(routes);
