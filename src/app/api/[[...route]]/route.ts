import { Hono } from "hono";
import { handle } from "hono/vercel";
import posts from "./posts";
import travelNews from "./travelnews";
import { AdditionalContext } from "@/lib/session-midlweare";

const app = new Hono<AdditionalContext>().basePath("/api");

const routes = app.route("/", posts).route("/", travelNews);
export type AppType = typeof routes;
export const GET = handle(routes);
export const POST = handle(routes);

//export default app;
