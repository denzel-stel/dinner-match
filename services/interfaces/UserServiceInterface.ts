import { NewUser, User } from "#database/models/User.js";

/**
 * Interface defining the contract for user-related service operations.
 *
 * Provides methods for retrieving users, creating new users, and fetching user details by ID.
 */
export interface UserServiceInterface {
    getUserById(): void;
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User | null>;
    createUser(user: NewUser): Promise<User | null>;
};

export default UserServiceInterface;