import { date, integer, PgDate, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 255 }).notNull(),
    first_name: varchar('first_name', { length: 255 }),
    last_name: varchar('last_name', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
});