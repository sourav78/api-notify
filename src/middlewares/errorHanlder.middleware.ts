import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";

// Custom error class for handling custom errors
export class CustomError extends Error{

  statusCode: StatusCode;

  constructor(statusCode: StatusCode, errMessage: string){
    super(errMessage)
    this.statusCode = statusCode
  }
}

// Error handler middleware
export const errorHandler = (err: Error | CustomError, c: Context) => {

  // If the error is a custom error, return the error message with the status code
  if(err instanceof CustomError){
    return c.json({
      success: false,
      message: err.message
    }, err.statusCode)
  }

  console.log(err);
  
  // If the error is not a custom error, return the error message with the status code 500
  return c.json({
    success: false,
    message: "Internal server error. Please try again",
    description: err?.message || ""
  }, 500)

}