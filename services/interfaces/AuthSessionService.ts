import { AuthSession, AuthSessionWithToken } from "database/models/AuthSession.js";
import { User } from "database/models/User.js";

interface AuthSessionServiceInterface {
    createSessionFor(user: User): Promise<AuthSessionWithToken>;
    validateSessionToken(token: string): Promise<{ session: AuthSession | null; user: User | null }>;
    invalidateAllSessions(userId: number): Promise<void>;
    invalidateSession(sessionId: string): Promise<void>;
};

export default AuthSessionServiceInterface;