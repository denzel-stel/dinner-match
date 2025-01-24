import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: text('password').notNull(),
    createdAt: integer('created_at').default('now()').notNull(),
    updatedAt: integer('updated_at').default('now()').notNull(),
});