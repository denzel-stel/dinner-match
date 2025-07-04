import { AuthSession, AuthSessionWithToken } from "#database/models/AuthSession.js";
import { User } from "#database/models/User.js";

interface AuthSessionServiceInterface {
    parseSessionToken(token: string): Promise<AuthSession | null>;
    createSessionFor(user: User): Promise<AuthSessionWithToken>;
};

export default AuthSessionServiceInterface;