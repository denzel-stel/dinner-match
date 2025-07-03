import { eq } from "drizzle-orm";
import { sessionMembers } from "../tables";
import database from "../database"

class SessionRepository {
    async joinSession(sessionId: string, userId: number) {
        await database.insert(sessionMembers).values({session_id: Number(sessionId), user_id: userId});
    }

    async leaveSession(sessionId: string, userId: number) {
        await database
            .delete(sessionMembers)
            .$dynamic()
            .where(eq(sessionMembers.session_id, Number(sessionId)))
            .where(eq(sessionMembers.user_id, userId));
    }
}

export default new SessionRepository();