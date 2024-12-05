import { defineConfig } from 'drizzle-kit';

// Define the configuration for Drizzle Kit
export default defineConfig({
  dialect: 'sqlite', // Use SQLite dialect
  schema: './src/db/schema.ts', // Specify the schema file
  out: 'drizzle/migrations' // Specify the migration output directory
});