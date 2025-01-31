import {pgSchema} from "drizzle-orm/pg-core";
import {ingredientsTable, recipesTable} from "./recipes";
import {usersTable} from "./users";

export default {
    recipesTable,
    ingredientsTable,
    usersTable,
}