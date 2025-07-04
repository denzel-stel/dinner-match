import { inject, injectable } from "inversify";
import UserServiceInterface from "../interfaces/UserServiceInterface";
import { NewUser } from "#database/models/User.js";
import { sha512 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { Contracts } from "#database/containers/contracts.js";
import UserRepository from "#database/repositories/UserRepository.js";

@injectable()
class UserService implements UserServiceInterface {
    private userRepository: UserRepository;
    constructor(
        @inject(Contracts.UserRepository) userRepository: UserRepository
    ) {
        this.userRepository = userRepository;
    }
    
    async createUser(user: NewUser): Promise<void> {
        const data = new TextEncoder().encode(user.password);
        const hash = await sha512(data);
        const stringHash = encodeHexLowerCase(hash);
        user = {
            ...user,
            password: stringHash
        }

        
        return null;
    };
    async getUserById(): Promise<void> {
        return null;    
    };
}

export default UserService;