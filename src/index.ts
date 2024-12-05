import { Context, Hono } from 'hono'
import { errorHandler } from './middlewares/errorHanlder.middleware'
import { routeNotFoundHandler } from './middlewares/RouteNotFound.middleware'
import { getStarterMessage } from './utils/StarterMessage.utils'
import { loggerHander } from './middlewares/Logger.middleware'
import notifyRoute from './routes/notify.route'
import { cors } from 'hono/cors'
import { bindDrizzle } from './middlewares/BindDrizzle.middleware'

// Specify env variable types
export type Env = {
  MY_VAR: string,
  DB: D1Database
}

const app = new Hono<{Bindings: Env}>()

// Initialize Drizzle with the D1 database from the environment bindings
app.use('*', bindDrizzle)

// Define logger middleware
app.use(loggerHander)

// I want to use cors and aloow from every origin
app.use("*", cors())

// Route to check api status
app.get('/', getStarterMessage)

// Define all routes
app.route("/api", notifyRoute)

// Define 404 route
app.notFound(routeNotFoundHandler)

// Define error handler
app.onError(errorHandler)

// Start server
export default app
