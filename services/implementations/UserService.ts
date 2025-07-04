import { inject, injectable } from "inversify";
import UserServiceInterface from "../interfaces/UserServiceInterface";
import { NewUser, User } from "#database/models/User.js";
import { sha512 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { Contracts } from "#database/containers/contracts.js";
import UserRepository from "#database/repositories/UserRepository.js";
import AuthSessionRepositoryInterface from "#database/repositories/interfaces.ts/AuthSessionRepositoryInterface.js";
import AuthSessionServiceInterface from "#services/interfaces/AuthSessionService.js";
import { AuthSession } from "#database/models/AuthSession.js";

@injectable()
class UserService implements UserServiceInterface {
    constructor(
        @inject(Contracts.UserRepository) private userRepository: UserRepository,
        @inject(Contracts.authSessionService) private authSessionService: AuthSessionServiceInterface,
    ) {
        this.authSessionService = authSessionService;
        this.userRepository = userRepository;
    }

    private async hashSecret(secret: string): Promise<Uint8Array> {
        const secretBytes = new TextEncoder().encode(secret);
        const secretHashBuffer = await crypto.subtle.digest("SHA-256", secretBytes);
        return new Uint8Array(secretHashBuffer);
    }

    private async createUser(user: NewUser): Promise<User|null> {
        const data = new TextEncoder().encode(user.password);
        const hash = await sha512(data);
        const stringHash = encodeHexLowerCase(hash);
        const hashedPasswordUser: NewUser = {
            ...user,
            password: stringHash
        }
        const user: User | null = await this.userRepository.create(hashedPasswordUser);
        if (user == null) {
            return null;
        }
        const session = this.authSessionService.createSessionFor(user);
        // Now create the session. 
        return {...user, session: session.id + "." + };
    };
    
    parseSessionToken(token: string): Promise<AuthSession | null> {
        return this.authSessionService.parseSessionToken(token);
    }
    
    async getUserById(): Promise<void> {
        return null;    
    };
}

export default UserService;