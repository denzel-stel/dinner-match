import { NewSession } from "#database/models/Session.js";
import { User } from "#database/models/User.js";

interface SessionRepositoryInterface {
    joinSession(sessionId: number, userId: number): Promise<void>;
    leaveSession(sessionId: number, userId: number): Promise<void>;
createSession(session: NewSession, memberUserIds: number[]);
    
}

export default SessionRepositoryInterface;