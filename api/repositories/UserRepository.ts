import { eq } from "drizzle-orm";
import { usersTable } from "dinner-match-database/tables";
import database from "dinner-match-database/connection";
import { User } from "dinner-match-database/models";
import { User as StytchUser } from "stytch";
class UserRepository {

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

    public async create(user: User) {
        await database.insert(usersTable).values(user);
    }

    public async getAll(): Promise<Array<User>> {
        return await database.select().from(usersTable);
    }

    public async getByStytchId(stytchId: string): Promise<User|null> {
        const result =  await database
        .select()
        .from(usersTable)
        .where(eq(usersTable.stytch_uuid, stytchId));
        
        if (result.length === 0) {
            return null;
        }
        
        return result[0];
    }

    public async createFromStytchUser(user: StytchUser) {
        await database.insert(usersTable).values({
            stytch_uuid: user.user_id,
            email: user.emails[0].email,
            username: user.name.first_name,
            first_name: user.name.first_name,
            last_name: user.name.last_name,
        });
    }

}

export default new UserRepository();