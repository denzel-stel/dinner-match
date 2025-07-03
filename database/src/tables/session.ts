import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { boolean } from "drizzle-orm/pg-core";
import { recipesTable } from "./recipes";

const sessionTable = pgTable('sessions', {
    id: serial('id').primaryKey(),
    admin_id: serial('admin_id').notNull().references(() => usersTable.id).notNull(),
    ends_at: timestamp('ends_at').notNull(),
    started_at: timestamp('created_at').notNull().defaultNow(),
})

const sessionDietaryRestrictions = pgTable('session_dietary_restrictions', {
    id: serial('id').primaryKey(),
    session_id: serial('session_id').notNull().references(() => sessionTable.id).notNull(),
    dietary_restriction: varchar('dietary_restriction', { length: 255 }).notNull(),
})

const sessionMembers = pgTable('session_members', {
    id: serial('id').primaryKey(),
    session_id: serial('session_id').notNull().references(() => sessionTable.id).notNull(),
    user_id: serial('user_id').notNull().references(() => usersTable.id).notNull(),
})


const sessionSwipes = pgTable('session_swipes', {
    id: serial('id').primaryKey(),
    session_id: serial('session_id').references(() => sessionTable.id).notNull(),
    user_id: serial('user_id').references(() => usersTable.id).notNull(),
    recipe_id: serial('recipe_id').references(() => recipesTable.id).notNull(),
    liked: boolean('liked').notNull(), // 1 for like, 0 for dislike
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
});

const sessionRecipesTable = pgTable('session_recipes', {
    id: serial('id').primaryKey(),
    session_id: serial('session_id').notNull().references(() => sessionTable.id).notNull(),
    recipe_id: serial('recipe_id').notNull().references(() => recipesTable.id).notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export {sessionDietaryRestrictions, sessionMembers, sessionTable, sessionSwipes, sessionRecipesTable};