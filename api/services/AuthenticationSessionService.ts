import { encodeBase32LowerCaseNoPadding } from "@oslojs/encoding";
import {AuthSession} from "dinner-match-database/models";
import {authSessionsTable} from "dinner-match-database/tables";
import database from "dinner-match-database/connection";
import { SessionValidationResult } from "../types/SessionValidationResult";
import {usersTable} from "dinner-match-database/tables";
import AuthenticationSessionServiceInterface from "./interfaces/AuthenticationSessionServiceInterface";
import { eq } from "drizzle-orm";
import OsloHashService from "./OsloHashService";

class AuthenticationSessionService implements AuthenticationSessionServiceInterface {
    
    generateSessionToken(): string {
        const bytes = new Uint8Array(20);
        crypto.getRandomValues(bytes);
        const token = encodeBase32LowerCaseNoPadding(bytes);
        return token;
    }
    async createAuthSession(token: string, userId: number): Promise<AuthSession> {
        const sessionId = OsloHashService.hash(token);
        const session: AuthSession = {
            id: sessionId,
            userId,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
        };
        await database.insert(authSessionsTable).values(session);
        return session;
    }
    async validateSessionToken(token: string): Promise<SessionValidationResult> {
        const sessionId = OsloHashService.hash(token);
        const result = await database
            .select({ user: usersTable, session: authSessionsTable })
            .from(authSessionsTable)
            .innerJoin(usersTable, eq(authSessionsTable.userId, usersTable.id))
            .where(eq(authSessionsTable.id, sessionId));
        if (result.length < 1) {
            return { session: null, user: null };
        }
        const { user, session } = result[0];
        if (Date.now() >= session.expiresAt.getTime()) {
            await database.delete(authSessionsTable).where(eq(authSessionsTable.id, session.id));
            return { session: null, user: null };
        }
        if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
            session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
            await database
                .update(authSessionsTable)
                .set({
                    expiresAt: session.expiresAt
                })
                .where(eq(authSessionsTable.id, session.id));
        }
        return { session, user };
    }
    
    async invalidateAllSessions(userId: number): Promise<void> {
        await database.delete(authSessionsTable).where(eq(authSessionsTable.userId, userId));
    }
    async invalidateSession(sessionId: string): Promise<void> {
        await database.delete(authSessionsTable).where(eq(authSessionsTable.id, sessionId));
    }
};

export default new AuthenticationSessionService();