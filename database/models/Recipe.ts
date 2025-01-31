import {Ingredient} from "./Ingredient";
import {recipesTable} from "../tables/recipes";

export type Recipe = typeof recipesTable.$inferInsert;