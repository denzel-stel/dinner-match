import { NewUser, User } from "#database/models/User.js";

export default interface UserRepositoryInterface {
    getById(id: number): Promise<User | null>;
    create(user: NewUser): Promise<User>;
    getAll(): Promise<Array<User>>;
}
    