// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {usersTable} from "../database/models/users";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from "drizzle-orm";

dotenv.config();

console.log(process.env.DATABASE_URL!)
const db = drizzle(process.env.DATABASE_URL!);

// // Main function test db connection
async function main() {
  console.log('Connecting to the database...')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
}

main();

// Run the express server
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript de");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});