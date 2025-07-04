import { authSessionsTable } from "../tables/auth_sessions";
type AuthSession = typeof authSessionsTable.$inferSelect;
type NewAuthSession = typeof authSessionsTable.$inferInsert;

type AuthSessionWithToken = AuthSession & {
    token: string;
};

export {
    AuthSession,
    NewAuthSession,
    AuthSessionWithToken
}