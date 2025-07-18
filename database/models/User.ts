import { usersTable } from "../tables/users";

export type User = typeof usersTable.$inferSelect;

export type NewUser = typeof usersTable.$inferInsert;

export type UserWithToken = User & {
    token: string;
};