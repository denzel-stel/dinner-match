import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import 'dotenv/config';
import { SeedManager } from "../database/seeders";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Create Express server
const expressApp: Express = express();
const expressPort = process.env.PORT || 3000;

// Express configuration
expressApp.listen(expressPort, () => {
    console.log(`[server]: Server is running at http://localhost:${expressPort}`);
});

const manager = new SeedManager();
manager.runAllFresh().then(() => {
    console.log('Database reset and seeded successfully!');
});

export { expressApp, expressPort};