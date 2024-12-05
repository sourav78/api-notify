import { Hono } from "hono";
import { notificationMail, notificationRegisterController, notifyController } from "../controllers/notify.controller";

// Create a new router
const notifyRoute = new Hono().basePath("/notify");

notifyRoute.get("/", notifyController)
notifyRoute.post("/register", notificationRegisterController)
notifyRoute.post("/getnotification", notificationMail)

export default notifyRoute