import {ingredientsTable} from "../tables/recipes";

export type Ingredient = typeof ingredientsTable.$inferSelect;

export type NewIngredient = typeof ingredientsTable.$inferInsert;