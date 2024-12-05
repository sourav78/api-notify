import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Define the schema for the notification table
export const notification = sqliteTable('notification', {
  // id is set on insert, incrementing
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  // Title with a maximum length of 50 characters
  title: text('title', { length: 50 }).notNull(),

  // Description as a text field
  description: text('description', { length: 500 }).notNull(),

  // Datetime field
  datetime: text('datetime').notNull(),

  // Boolean field to indicate if the post is sent
  isSent: integer('isSent').notNull().default(0),

  // Email field as text
  email: text('email').notNull(),

  // Created at timestamp, defaults to the current timestamp
  createdAt: text('createdAt')
    .default(sql`CURRENT_TIMESTAMP`) // Use SQL default for current timestamp
    .notNull(),

  // Updated at timestamp, defaults to the current timestamp
  updatedAt: text('updatedAt')
    .default(sql`CURRENT_TIMESTAMP`) // Default value
    .notNull()
});