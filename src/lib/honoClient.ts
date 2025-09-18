import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

const client = hc<AppType>(process.env.API_CONNECTION_URL!);

export default client;
