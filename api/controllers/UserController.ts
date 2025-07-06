import { Request, Response } from "express";
import UserControllerInterface from "./interfaces/UserControllerInterface.js";
import { injectable, inject } from "inversify";
import {Contracts} from "../../containers/contracts.js";
import AuthSessionServiceInterface from "services/interfaces/AuthSessionService.js";
import HashServiceInterface from "services/interfaces/HashService.js";
import database from "database/database.js";
import { usersTable } from "../../database/tables/users.js";
import { and, eq } from "drizzle-orm";
import { SignInRequest } from "#api/types/requests/SignInRequest.js";
import { User, UserWithToken } from "database/models/User.js";
import UserServiceInterface from "services/interfaces/UserServiceInterface.js";
@injectable()
class UserController implements UserControllerInterface {
    constructor(
        @inject(Contracts.UserService) private userService: UserServiceInterface,
        @inject(Contracts.AuthSessionService) private authSessionService: AuthSessionServiceInterface,
        @inject(Contracts.HashService) private hashService: HashServiceInterface
    ) {}

    async getAll(req: Request, res: Response): Promise<void> {
        const users = await this.userService.getAll();
        res.send(users);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const user = await this.userService.getById(Number(req.params.id));
        
        if (user == null) {
            res.status(404).send("User not found");
            return;
        } 
        res.send(user);
    }

    /**
     * Register a new user
     * @param req 
     * @param res 
     */

    async create(req: Request, res: Response): Promise<void> {
        // Call service with req.body to create a new user
        const user = await this.userService.createUser(req.body);
        // A new user definitely doesn't have a login session
        const session = await this.authSessionService.createSessionFor(user);

        // We just send the user and session token back to the client, client saves token securely.
        res.send({
            ...user, 
            token: session.token
        });
    }

    /**
     * Sign in a user
     * @param req 
     * @param res 
     */
    async signIn(req: SignInRequest, res: Response): Promise<void> {
        const email:string = req.body.email;
        const password: string = this.hashService.hash(req.body.password);

        // Check if the user is already authenticated
        const users: User[] =  await database
            .select()
            .from(usersTable)
            .where(and(
            eq(usersTable.email, email), 
            eq(usersTable.password, password))
            );

        // Authenticate the userQ
        if (!users.length) res.status(404).send("Wrong credentials!");
        const user: User = users[0];

        // Return a session token for 
        const session = this.authSessionService.createSessionFor(user);

        // Return session hash 
        res.status(200).send({session});
    }
}

export default UserController