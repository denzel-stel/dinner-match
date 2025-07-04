import { eq } from "drizzle-orm";
import { usersTable } from "../tables";
import database from "../database";
import { User } from "../models";
import { NewUser } from "../models";
import UserRepositoryInterface from "./interfaces.ts/UserRepositoryInterface";
class UserRepository implements UserRepositoryInterface {

    public async getById(id: number): Promise<User> {
        const result =  await database
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, id));

        if (result.length === 0) {
            return null;
        }
        
        return result[0];
    }

    public async create(user: NewUser): Promise<User> {
        return await database.insert(usersTable).values(user)[0];
    }

    public async getAll(): Promise<Array<User>> {
        return await database.select().from(usersTable);
    }
}

export default UserRepository;