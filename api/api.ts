import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import 'dotenv/config';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Create Express server
const expressApp: Express = express();
const expressPort = process.env.PORT || 3000;

// Express configuration
expressApp.listen(expressPort, () => {
    console.log(`[server]: Server is running at http://localhost:${expressPort}`);
});
export { expressApp, expressPort};