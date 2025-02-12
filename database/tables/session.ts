import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

const sessionTable = pgTable('sessions', {
    id: serial('id').primaryKey(),

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

export {sessionDietaryRestrictions, sessionMembers, sessionTable};