import "server-only";

import {
  Client,
  Databases,
  type Databases as DatabasesType,
} from "node-appwrite";
import { createMiddleware } from "hono/factory";

type AdditionalContext = {
  Variables: {
    databases: DatabasesType;
  };
};

export const appwriteMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
      .setKey(process.env.NEXT_APPWRITE_KEY!);

    const databases = new Databases(client);

    c.set("databases", databases);

    await next();
  }
);
