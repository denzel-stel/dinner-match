import UserRepository from "#database/repositories/UserRepository.js";
import { Request, Response } from "express";
import UserControllerInterface from "./interfaces/UserControllerInterface";
import { injectable, inject } from "inversify";
import UserService from "#services/implementations/UserService.js";
@injectable()
class UserController implements UserControllerInterface {

    constructor(
        @inject(Contracts.UserService) private userService: UserService
    ) {
        this.userService = userService;
    }
    async getUserByStytch(req: Request, res: Response): Promise<void> {
        
        const user = await UserRepository.getByStytchId(req.params.uuid);
        console.log(user);
        if (user == null) {
            res.status(404).send("User not found");
            return;
        }
        res.send(user);
    }

    async getAll(req: Request, res: Response): Promise<void> {
        const users = await UserRepository.getAll();
        res.send(users);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const user = await UserRepository.getById(Number(req.params.id));
        
        if (user ==null) {
            res.status(404).send("User not found");
            return;
        } 
        res.send(user);
    }

    async create(req: Request, res: Response): Promise<void> {
        // Call service with req.body to create a new user

        // const user = await UserRepository.create(req.body);
        // res.send(user);
    }
}

export default UserController