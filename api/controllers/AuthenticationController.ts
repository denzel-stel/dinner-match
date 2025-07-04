import { and, eq } from "drizzle-orm";
import { usersTable } from "#database/tables";
import database from "#database/database";
import AuthenticationSessionService from "../services/AuthenticationSessionService";
import { SignInRequest } from "../types/requests/SignInRequest";
import AuthenticationControllerInterface from "./interfaces/AuthenticationControllerInterface";
import { NewUser, User } from "#database/models";
import { Request, Response } from "express";
import OsloHashService from "../services/OsloHashService";
import SignUpRequest from "../types/requests/SignUpRequest";

class AuthenticationController implements AuthenticationControllerInterface {
  signOut: (req: Request, res: Response) => Promise<void>;

  // TODO: Input validation
  async signIn(req: SignInRequest, res: Response): Promise<void> {
    const email:string = req.body.email;
    const password: string = OsloHashService.hash(req.body.password);

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
    const token = AuthenticationSessionService.generateSessionToken();
    const session = AuthenticationSessionService.createAuthSession(token, user.id);
    
    // Return session hash 
    res.status(200).send({session});
  }

  // TODO: Validation
  async signUp(req: SignUpRequest, res: Response): Promise<void> {
    // insert user into database
    const newUser: NewUser = {
      email: req.body.email,
      username: req.body.username,
      password: OsloHashService.hash(req.body.password),
    };
    const user: User = await database
                              .insert(usersTable)
                              .values(newUser)
                              .returning()[0];

    res.status(200).send(user);
  }
}

export default new AuthenticationController();