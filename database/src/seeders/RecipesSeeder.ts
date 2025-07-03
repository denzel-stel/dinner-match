import {NewRecipe, Recipe} from "../models/Recipe";
import { faker } from '@faker-js/faker';
import {Ingredient, NewIngredient} from "../models/Ingredient";
import database from "../database";
import {ingredientsTable, recipesIngredientsPivotTable, recipesTable} from "../tables/recipes";
import {GenericSeeder} from "./interfaces/GenericSeeder";
import { NewIngredientsRecipes } from "../models/IngredientsRecipes";
/**
 * Seeder for the recipes table
 */
class RecipesSeeder implements GenericSeeder {
    async run()  {
        for(let i = 0; i < 10; i++) {
            const recipe = this.buildRecipe();

            const insertedRow = await database
                .insert(recipesTable)
                .values([recipe])
                .returning();


            for(let i = 0; i < faker.number.int({min: 1, max: 15}); i++) {
                const ingredient = this.buildIngredient();
                const insertedIngredient = await database
                    .insert(ingredientsTable)
                    .values([ingredient])
                    .returning();

                const ingredientRecipeRelation = this.buildIngredientRecipeRelation(
                    insertedRow[0], 
                    insertedIngredient[0]
                );

                if (!ingredientRecipeRelation) continue;
                
                await database
                    .insert(recipesIngredientsPivotTable)
                    .values(ingredientRecipeRelation);
            }

        }
    }

    private buildRecipe(): NewRecipe {
        const recipeName: string = faker.food.adjective() + " " + faker.food.dish();
        recipeName.toLowerCase();
        recipeName.charAt(0).toUpperCase();
        return {
            name: recipeName,
            calories: faker.number.int({min: 100, max: 1000}),
            description: faker.food.description(),
        }
    }

    private buildIngredientRecipeRelation(recipe: Recipe, ingredient: Ingredient): NewIngredientsRecipes | null {
        if(!recipe.id || !ingredient.id) return null;

        return {
            recipe_id: recipe.id,
            ingredient_id: ingredient.id,
            quantity: faker.number.int({min: 1, max: 1000}),
        }
    }
    private buildIngredient(): NewIngredient {
        return {
            name: faker.food.ingredient(),
            unit: this.getRandomWeightOrVolume(),
        }
    }
    
    private getRandomWeightOrVolume() {
        const units = ["oz", "kg", "ml"];
        return faker.helpers.arrayElement(units); // Randomly pick a unit
    }
}

export default RecipesSeeder;