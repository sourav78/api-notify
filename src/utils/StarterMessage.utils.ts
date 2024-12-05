import { Context } from "hono";

// This is a starter message for check api status
export const getStarterMessage = (c:Context) => {

  return c.text(`Hello Hono! ${c.env.MY_VAR}`)
}