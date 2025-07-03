import {date, integer, PgDate, pgTable, serial, text, timestamp, varchar} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
// Generate this schema in the format of edamam

export const recipesTable = pgTable("recipes", {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    calories: integer('calories').notNull(),
    description: text('description').notNull(),
    // created_at: timestamp('created_at').notNull().defaultNow(),
});

export const ingredientsTable = pgTable('ingredients', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    unit: varchar('unit', { length: 255 }).notNull(),
    // created_at: timestamp('created_at').notNull().defaultNow(),
});

export const recipesIngredientsPivotTable = pgTable('recipes_ingredients', {
    id: serial('id').primaryKey(),
    recipe_id: integer('recipe_id').notNull().references(() => recipesTable.id).notNull(),
    ingredient_id: integer('ingredient_id').notNull().references(() => ingredientsTable.id).notNull(),
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