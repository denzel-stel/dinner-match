import { inject, injectable } from "inversify";
import UserServiceInterface from "../interfaces/UserServiceInterface";
import { NewUser, User } from "#database/models/User.js";
import { sha512 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { Contracts } from "#database/containers/contracts.js";
import UserRepository from "#database/repositories/UserRepository.js";

@injectable()
class UserService implements UserServiceInterface {
    constructor(
        @inject(Contracts.UserRepository) private userRepository: UserRepository,
    ) {
        this.userRepository = userRepository;
    }
    async getAll(): Promise<User[]> {
        const users: User[] = await this.userRepository.getAll();
        return users;
    };

    async getById(id: number): Promise<User | null> {
        const user: User | null = await this.userRepository.getById(id);
        return user;
    };
    async createUser(user: NewUser): Promise<User|null> {
        const data = new TextEncoder().encode(user.password);
        const hash = await sha512(data);
        const stringHash = encodeHexLowerCase(hash);
        const hashedPasswordUser: NewUser = {
            ...user,
            password: stringHash
        }
        const userRecord: User | null = await this.userRepository.create(hashedPasswordUser);

        return userRecord;
    };
    
    async getUserById(): Promise<void> {
        return null;    
    };
}

export default UserService;