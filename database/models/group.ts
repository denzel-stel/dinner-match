import { date, integer, PgDate, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { usersTable } from './user';

export const groupsTable = pgTable('groups', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
});