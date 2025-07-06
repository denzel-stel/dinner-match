import { AuthSession, NewAuthSession } from "#database/models/AuthSession.js";

interface AuthSessionRepositoryInterface {
    insert(session: NewAuthSession): Promise<AuthSession>;
}

export default AuthSessionRepositoryInterface;