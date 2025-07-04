// Class that imports all seeders from database module
// and runs them

import {reset} from "drizzle-seed";
import database from "#database/database";
import RecipesSeeder from "#database/seeders/RecipesSeeder.js";
import schema from "../tables/schema";
import {GenericSeeder} from "./interfaces/GenericSeeder";

export class SeedManager {
    private seeders: GenericSeeder[] = [
        new RecipesSeeder(),
    ];
    async runAllFresh() {
        await reset(database, schema);
        for(const seeder of this.seeders) {
            await seeder.run();
        }
    }
}

export const seedManager = new SeedManager();
