import { AuthSession } from "#database/models";
import { SessionValidationResult } from "../../types/SessionValidationResult";

interface AuthenticationSessionServiceInterface {
    generateSessionToken(): string;

    createAuthSession(token: string, userId: number): Promise<AuthSession>;

    validateSessionToken(token: string): Promise<SessionValidationResult>;

    invalidateSession(sessionId: string): Promise<void> ;

    invalidateAllSessions(userId: number): Promise<void>;

};


export default AuthenticationSessionServiceInterface;