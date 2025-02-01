import {Ingredient} from "./Ingredient";
import {recipesIngredientsPivotTable} from "../tables/recipes";

export type IngredientsRecipes = typeof recipesIngredientsPivotTable.$inferInsert;