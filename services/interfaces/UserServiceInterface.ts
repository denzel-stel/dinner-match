import { NewUser } from "#database/models/User.js";

export interface UserServiceInterface {
    getUserById(): void;
    createUser(user: NewUser): Promise<User | null>;
};

export default UserServiceInterface;