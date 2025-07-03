import {recipesTable} from "../tables/recipes";

export type Recipe = typeof recipesTable.$inferSelect;

export type NewRecipe = typeof recipesTable.$inferInsert;