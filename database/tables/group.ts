import { date, integer, PgDate, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { usersTable } from "./users";

export const groupsTable = pgTable('groups', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
});

export const groupMemberTable = pgTable('group_member', {
    id: serial('id').primaryKey(),
    user_id: serial('user_id').notNull().references(() => usersTable.id).notNull(),
    group_id: serial('group_id').notNull().references(() => groupsTable.id).notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at').notNull().defaultNow(),
});