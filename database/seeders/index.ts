import {reset, seed} from "drizzle-seed";
import database from "../../api/database";
import RecipesSeeder from "./RecipesSeeder";
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

