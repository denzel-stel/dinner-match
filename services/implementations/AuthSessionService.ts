import OsloHashService from "#api/services/OsloHashService.js";
import { Contracts } from "#database/containers/contracts.js";
import { Contracts as ServiceContracts } from "#services/containers/contracts.js";
import { AuthSession, AuthSessionWithToken } from "#database/models/AuthSession.js";
import { User } from "#database/models/User.js";
import AuthSessionRepositoryInterface from "#database/repositories/interfaces.ts/AuthSessionRepositoryInterface.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import { sha256 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { inject } from "inversify";
import database from "#database/database.js";
import { usersTable } from "#database/tables/users.js";
import { authSessionsTable } from "#database/tables/auth_sessions.js";
import { SessionValidationResult } from "#api/types/SessionValidationResult.js";
import { and, eq } from "drizzle-orm";

class AuthSessionService implements AuthSessionServiceInterface {
    private EXPIRES_AT: number = 1000 * 60 * 60 * 24 * 30; // 30 days in milliseconds

    constructor(
        @inject(Contracts.AuthSessionRepository) private authSessionRepository: AuthSessionRepositoryInterface,
        @inject(ServiceContracts.HashService) private hashService: OsloHashService
    ) {}
    private generateSecureRandomString(): string {
            // Human readable alphabet (a-z, 0-9 without l, o, 0, 1 to avoid confusion)
        const alphabet = "abcdefghijklmnpqrstuvwxyz23456789";

        // Generate 24 bytes = 192 bits of entropy.
        // We're only going to use 5 bits per byte so the total entropy will be 192 * 5 / 8 = 120 bits
        const bytes = new Uint8Array(24);
        crypto.getRandomValues(bytes);

        let id = "";
        for (let i = 0; i < bytes.length; i++) {
            // >> 3 s"removes" the right-most 3 bits of the byte
            id += alphabet[bytes[i] >> 3];
        }
        return id;

    }
    async createSessionFor(user: User): Promise<AuthSessionWithToken> {
        const now = new Date();

        const id = this.generateSecureRandomString();
        const secret = this.generateSecureRandomString();
        const secretHash = this.hashService.hash(secret);

        const token = id + "." + secret;

        const session: AuthSession = {
            id,
            userId: user.id,
            hashedSecret: secretHash,
            createdAt: now,
        };
        await this.authSessionRepository.insert(session)
        const sessionWithToken: AuthSessionWithToken = {
            ...session,
            token,
        };

        return sessionWithToken;

    }
    async validateSessionToken(token: string): Promise<SessionValidationResult> {
        // The token is in the format "id.secret", we need to extract the id and secret
        const parts = token.split(".");
        const sessionId = parts[0];
        const secret = parts[1];
        const hashedSecret = this.hashService.hash(secret);
        const result = await database
            .select({ user: usersTable, session: authSessionsTable })
            .from(authSessionsTable)
            .innerJoin(usersTable, eq(authSessionsTable.userId, usersTable.id))
            .where(and(eq(authSessionsTable.id, sessionId), eq(authSessionsTable.hashedSecret, hashedSecret)))
            
        if (result.length < 1) {
            return { session: null, user: null };
        }
        const { user, session } = result[0];
        // Check if the session has expired based on EXPIRES_AT constant 
        if (Date.now() >= session.createdAt.getTime() + this.EXPIRES_AT) {
            await database.delete(authSessionsTable).where(eq(authSessionsTable.id, session.id));
            return { session: null, user: null };
        } else if (Date.now() >= session.createdAt.getTime() + this.EXPIRES_AT - 1000 * 60 * 60 * 24 * 15) {
            // If the session is about to expire in 15 days, extend it by another 30 days
            // This ensures that active users remain signed in, while inactive users are signed out.
            session.createdAt = new Date(Date.now() + this.EXPIRES_AT);
            await database
                .update(authSessionsTable)
                .set({
                    createdAt: session.createdAt
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
}

export default AuthSessionService;