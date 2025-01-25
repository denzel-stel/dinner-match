// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {usersTable} from "../database/models/users";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { seed } from "drizzle-seed";
import {recipesTable} from "../database/models/recipes";
import { migrate } from 'drizzle-orm/node-postgres/migrator';
dotenv.config();

// Run the express server
const expressApp: Express = express();
const expressPort = process.env.PORT || 3000;


//
expressApp.listen(expressPort, () => {
  console.log(`[server]: Server is running at http://localhost:${expressPort}`);
});
export { expressApp, expressPort};