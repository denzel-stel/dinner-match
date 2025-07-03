import {recipesIngredientsPivotTable} from "../tables/recipes";

export type IngredientsRecipes = typeof recipesIngredientsPivotTable.$inferSelect;

export type NewIngredientsRecipes = typeof recipesIngredientsPivotTable.$inferInsert;