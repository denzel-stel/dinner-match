import {Recipe} from "../models/Recipe";
import { faker } from '@faker-js/faker';
import {Ingredient} from "../models/Ingredient";
import database from "../../api/database";
import {ingredientsTable, recipesTable} from "../tables/recipes";

/**
 * Seeder for the recipes table
 */
class RecipesSeeder implements GenericSeeder {
    async run()  {
        for(let i = 0; i < 10; i++) {
            const recipe = this.buildRecipe();

            const insertedRow: Recipe = await database
                .insert(recipesTable)
                .values(recipe)
                .returning();

            for(let i = 0; i < faker.number.int({min: 1, max: 15}); i++) {
                const ingredient = this.buildIngredient(insertedRow);
                await database.insert(ingredientsTable)
                    .values(ingredient);
            }

        }
    }

    private buildRecipe(): Recipe {
        return {
            name: faker.food.adjective() + " " + faker.food.dish(),
            calories: faker.number.int({min: 100, max: 1000}),
            ingredients: [],
            createdAt: new Date(),
            updatedAt: new Date(),
            description: faker.food.description(),
            instructions: faker.lorem.paragraph(),
            userId: 1
        }
    }

    private buildIngredient(recipe: Recipe): Ingredient {
        return {
            name: faker.food.ingredient(),
            quantity: faker.number.int({min: 1, max: 10}),
            unit: faker.science.unit().name,
            createdAt: new Date(),
            updatedAt: new Date(),
            recipeId: recipe.id
        }
    }
}

export default RecipesSeeder;