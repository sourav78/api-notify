import { Context } from "hono"

// Route not found middleware
export const routeNotFoundHandler = (c: Context) => {
  
  return c.json({
    success: false,
    message: "Route not found",
    description: "The requested URL does not exist on this server. Please check the endpoint and try again."
  }, 404)

}