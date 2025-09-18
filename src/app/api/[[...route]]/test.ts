import { Hono } from "hono";

const app = new Hono().get("/", (c) => c.json("Hello from test route"));

export default app;
