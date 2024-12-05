import { drizzle } from "drizzle-orm/d1";
import { Context, Next } from "hono";

// Bind Drizzle ORM to the context object
export const bindDrizzle = async (c: Context, next: Next) => {
  // Get the D1Database instance from the environment bindings
  const d1Database = c.env.DB;

  // Initialize Drizzle ORM with D1 database
  c.set('db', drizzle(d1Database));

  await next();
}