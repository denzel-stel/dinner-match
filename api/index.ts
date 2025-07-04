/**
 * Main entry point for the REST API Application
 * This file imports all the other files in the api directory.
 */

console.log("Hello world!");

// Run database seeders
import { seedManager } from "#database/seeders/index.js";
seedManager.runAllFresh().then(() => {
    console.log('Database reset and seeded successfully!');
}).catch((error) => {
    console.error('Error resetting and seeding database:', error);
});

// Bootrstrap Express 
import "./api.ts";

// // Register all the middleware;
import "./middleware";

// Bootstrap routes
import "./routes/index.ts";