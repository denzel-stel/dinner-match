import { Contracts } from "#database/containers/contracts.js";
import { AuthSession, AuthSessionWithToken } from "#database/models/AuthSession.js";
import { User } from "#database/models/User.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import { sha256 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { inject } from "inversify";

class AuthSessionService implements AuthSessionServiceInterface {
    constructor(@inject(Contracts.AuthSessionRepository) private authSessionRepository: AuthSessionRepositoryInterface) {}
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
    private hash(string: string): string {
            return encodeHexLowerCase(sha256(new TextEncoder().encode(string)));
    }
    async createSessionFor(user: User): Promise<AuthSessionWithToken> {
        const now = new Date();

        const id = this.generateSecureRandomString();
        const secret = this.generateSecureRandomString();
        const secretHash = this.hash(secret);

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
}

export default AuthSessionService;