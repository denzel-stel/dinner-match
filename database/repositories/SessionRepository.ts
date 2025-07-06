import { eq } from "drizzle-orm";
import { sessionMembers, sessionTable } from "../tables/index.js";
import database from "../database.js"
import SessionRepositoryInterface from "./interfaces/SessionRepositoryInterface.js";
import { Group } from "database/models/Group.js";
import { NewSession, Session } from "#database/models/Session.js";
import { Contracts } from "../../containers/contracts.js";
import GroupRepository from "./GroupRepository.js";
import { inject } from 'inversify';
import { User } from "#database/models/User.js";
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

    async createSession(session: NewSession, memberIds: number[]) {
        const {sessionId} = await database
            .insert(sessionTable)
            .values(session)[0];
        for(let i =0; i < memberIds.length; i++) {
            await this.joinSession(sessionId, memberIds[i]);
        }
    }
}

export default SessionRepository;