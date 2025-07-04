import database from "#database/database.js";
import { AuthSession, NewAuthSession } from "../models";
import { authSessionsTable } from "../tables";
import AuthSessionRepositoryInterface from "./interfaces.ts/AuthSessionRepositoryInterface";

class AuthSessionRepository implements AuthSessionRepositoryInterface {
    insert(authSession: NewAuthSession): Promise<AuthSession> {
        return database.insert(authSessionsTable).values(authSession).returning().then((result) => {
            if (result.length === 0) {
                throw new Error("Failed to insert auth session");
            }
            return result[0];
        });
    };
}
export default AuthSessionRepository;