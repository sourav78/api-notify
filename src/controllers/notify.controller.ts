import { Context } from "hono";
import { CustomError } from "../middlewares/errorHanlder.middleware";
import { DrizzleD1Database } from "drizzle-orm/d1";
import { notification } from "../db/schema";
import { sendEmail } from "../utils/MailService.util";

export const notifyController = (c:Context) => {
  return c.text("Hello from notify controller")
}

// Register notification controller
export const notificationRegisterController = async (c:Context) => {
  
  try{

    // Get the DrizzleD1Database instance from the context
    const db:DrizzleD1Database = c.get('db')

    // Get the request body
    const { title, description, email, datetime} = await c.req.json();

    // Check if all fields are present
    if(!title || !description || !email || !datetime){
      throw new CustomError(400, "All Fields are required")
    }

    // Insert the notification into the database
    await db.insert(notification).values({
      title,
      description,
      email,
      datetime
    })

    // Return a success message
    return c.json({
      success: true,
      message: "Notification registered successfully",
    })

  }catch(err){
    // Throw the error
    throw err
  }

}
export const notificationMail = async (c:Context) => {
  
  try{

    await sendEmail("souravranjan855@gmail.com", "Test", "This is a test email")

    return c.json({
      success: true,
      message: "Notification registered successfully",
    })

  }catch(err){
    // Throw the error
    throw err
  }

}