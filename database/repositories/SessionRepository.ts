import { eq } from "drizzle-orm";
import { sessionMembers } from "../tables/index.js";
import database from "../database.js"
import SessionRepositoryInterface from "./interfaces.ts/SessionRepositoryInterface.js";

class SessionRepository implements SessionRepositoryInterface  {
    async joinSession(sessionId: number, userId: number) {
        await database.insert(sessionMembers).values({session_id: Number(sessionId), user_id: userId});
    }

    async leaveSession(sessionId: number, userId: number) {
        await database
            .delete(sessionMembers)
            .$dynamic()
            .where(eq(sessionMembers.session_id, Number(sessionId)))
            .where(eq(sessionMembers.user_id, userId));
    }
}

export default SessionRepository;