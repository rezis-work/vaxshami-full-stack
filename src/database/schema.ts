import { pgTable, varchar } from "drizzle-orm/pg-core";

export const testSchema = pgTable("test", {
  name: varchar(),
});
