import { NewUser, User } from "#database/models/User.js";

export interface UserServiceInterface {
    getUserById(): void;
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User | null>;
    createUser(user: NewUser): Promise<User | null>;
};

export default UserServiceInterface;