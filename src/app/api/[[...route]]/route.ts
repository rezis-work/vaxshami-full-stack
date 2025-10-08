import { Hono } from "hono";
import { handle } from "hono/vercel";
import posts from "./posts";
import { AdditionalContext } from "@/lib/session-midlweare";

const app = new Hono<AdditionalContext>().basePath("/api");

const routes = app.route("/", posts);
export type AppType = typeof routes;
export const GET = handle(routes);
export const POST = handle(routes);

export default app;
