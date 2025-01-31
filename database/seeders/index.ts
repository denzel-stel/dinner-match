import {reset, seed} from "drizzle-seed";
import database from "../../api/database";
import {usersTable} from "../tables/users";
import RecipesSeeder from "./RecipesSeeder";

// First reset the database
await reset(database, { usersTable });

const seeders: GenericSeeder[] = [
     new RecipesSeeder(),
]

for(const seeder of seeders) {
    await seeder.run();
}