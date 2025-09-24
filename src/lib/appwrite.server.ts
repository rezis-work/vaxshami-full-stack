import { Client, TablesDB } from "appwrite";
import env from "./config";

const client = new Client()
  .setEndpoint(env.appwrite.appwriteEndpoint)
  .setProject(env.appwrite.appwriteProjectId);

export const tablesDB = new TablesDB(client);
