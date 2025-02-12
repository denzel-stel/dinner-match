import { usersTable } from "../tables/users";

export type User = typeof usersTable.$inferInsert;