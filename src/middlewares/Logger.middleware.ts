import { Context, Next } from "hono";

// Logger middleware
export const loggerHander = async (c: Context, next: Next) => {

  // Log incoming request
  console.log(`Incoming : METHOD : [${c.req.method}] - URL : [${c.req.url}] - TIMESTAMP : [${new Date()}]`);

  // Proceed to the next middleware or route handler
  await next(); // Proceed to the next middleware or route handler

  // Log outgoing response
  console.log(`Result : METHOD : [${c.req.method}] - URL : [${c.req.url}] - STATUS : [${c.res.status}] - TIMESTAMP : [${new Date()}]`);
}