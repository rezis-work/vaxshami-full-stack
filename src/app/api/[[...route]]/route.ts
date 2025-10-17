import { Hono } from "hono";
import { handle } from "hono/vercel";

import editorsPick from "@/features/editorsPick/server/route";
import heroSection from "@/features/heroSection/server/route";
import homeBlogs from "@/features/homePageBlogs/server/route";
import breakingNews from "@/features/breakingNews/server/route";
import topDrinks from "@/features/dontMiss/server/route";
import restaurants from "@/features/gallery/server/route";
import defaultPost from "@/features/defaultPost/server/route";
import heroBanner from "@/features/heroBanner/server/route";
import heroArticle from "@/features/heroArticle/server/route";

import posts from "@/app/api/[[...route]]/posts";

const app = new Hono().basePath("/api");

const routes = app
  .route("/breakingnews", breakingNews)
  .route("/editorspick", editorsPick)
  .route("/herosection", heroSection)
  .route("/homeblogs", homeBlogs)
  .route("/topdrinks", topDrinks)
  .route("/restaurants", restaurants)
  .route("/herobanner", heroBanner)
  .route("/heroarticle", heroArticle)
  .route("/", defaultPost)
  .route("/", posts);

// const routes = app
//   .route("/", posts)
//   .route("/", travelNews)
//   .route("/", recentposts)
//   .route("/", sportNews)
//   .route("/", defaultArticle);
export type AppType = typeof routes;
export const GET = handle(routes);
export const POST = handle(routes);

// import { Hono } from "hono";
// import { handle } from "hono/vercel";
// import posts from "./posts";
// import travelNews from "../../../features/homePageBlogs/server/travelnews";
// import recentposts from "../../../features/homePageBlogs/server/recentposts";
// import sportNews from "../../../features/homePageBlogs/server/sportNews";
// import defaultArticle from "../../../features/defaultPost/server/defaultArticle";
// import { AdditionalContext } from "@/lib/session-midlweare";

// import editorsPick from "@/features/editorsPick/server/route";
// import heroSection from "@/features/heroSection/server/route";
// import homeBlogs from "@/features/homePageBlogs/server/route";
// import breakingNews from "@/features/breakingNews/server/route";

// const app = new Hono<AdditionalContext>().basePath("/api");

// const routes = app
//   .route("/", posts)
//   .route("/", travelNews)
//   .route("/", recentposts)
//   .route("/", sportNews)
//   .route("/", defaultArticle)
//   .route("/breakingnews", breakingNews)
//   .route("/editorspick", editorsPick)
//   .route("/herosection", heroSection)
//   .route("/homeblogs", homeBlogs);

// export type AppType = typeof routes;
// export const GET = handle(routes);
// export const POST = handle(routes);
