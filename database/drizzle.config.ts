import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
// TODO: Make this path not relative :()
dotenv.config({ path: '../.env', debug: true });
export default defineConfig({
  out: './migrations/',
  schema: './tables/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
