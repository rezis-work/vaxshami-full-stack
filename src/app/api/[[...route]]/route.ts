import { Hono } from "hono";
import { handle } from "hono/vercel";

import editorsPick from "@/features/editorsPick/server/route";
import heroSection from "@/features/heroSection/server/route";
import homeBlogs from "@/features/homePageBlogs/server/route";
import breakingNews from "@/features/breakingNews/server/route";
import topDrinks from "@/features/dontMiss/server/route";
import restaurants from "@/features/gallery/server/route";

const app = new Hono().basePath("/api");

const routes = app
  .route("/breakingnews", breakingNews)
  .route("/editorspick", editorsPick)
  .route("/herosection", heroSection)
  .route("/homeblogs", homeBlogs)
  .route("/topdrinks", topDrinks)
  .route("/restaurants", restaurants);

export const GET = handle(routes);
export const POST = handle(routes);

export type AppType = typeof routes;
