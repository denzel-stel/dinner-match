import { date, integer, PgDate, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { usersTable } from './users';
import { title } from 'process';
import { relations } from 'drizzle-orm';
import { recipesTable } from './recipes';

// Generate this schema in the format of edamam

export const ingredientsTable = pgTable('ingredients', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    quantity: integer('quantity').notNull(),
    unit: varchar('unit', { length: 255 }).notNull(),
});

export const recipesIngredientsPivotTable = pgTable('recipes_ingredients', {
    id: serial('id').primaryKey(),
    recipe_id: integer('recipe_id').notNull().references(() => recipesTable.id),
    ingredient_id: integer('ingredient_id').notNull().references(() => ingredientsTable.id),
    quantity: integer('quantity').notNull(),
});
export const ingredientsRecipeRelation = relations(recipesIngredientsPivotTable, ({ one }) => ({
    ingredients: one(ingredientsTable, {
      fields: [recipesIngredientsPivotTable.ingredient_id],
      references: [ingredientsTable.id],
    }),
    recipes: one(recipesTable, {
      fields: [recipesIngredientsPivotTable.recipe_id],
      references: [recipesTable.id],
    }),
  }));