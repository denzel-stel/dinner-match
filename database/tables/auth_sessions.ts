import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

import { usersTable } from "./users";

const authSessionsTable = pgTable("auth_sessions", {
	id: text("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => usersTable.id),
	hashedSecret: text("hashed_secret"),
	createdAt: timestamp("created_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export {  authSessionsTable}; 