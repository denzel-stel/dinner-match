import UserRepository from "#database/repositories/UserRepository.js";
import { Request, Response } from "express";
import UserControllerInterface from "./interfaces/UserControllerInterface";
import { injectable, inject } from "inversify";
import UserService from "#services/implementations/UserService.js";
import { Contracts } from "#services/containers/contracts.js";
@injectable()
class UserController implements UserControllerInterface {
    private userService: UserService;
    constructor(
        @inject(Contracts.UserService) userService: UserService
    ) {
        this.userService = userService;
    }

    // async getAll(req: Request, res: Response): Promise<void> {
    //     const users = await this.userService.getAll();
    //     res.send(users);
    // }

    // async getById(req: Request, res: Response): Promise<void> {
    //     const user = await this.userService.getById(Number(req.params.id));
        
    //     if (user ==null) {
    //         res.status(404).send("User not found");
    //         return;
    //     } 
    //     res.send(user);
    // }

    async create(req: Request, res: Response): Promise<void> {
        // Call service with req.body to create a new user
        const user = await this.userService.createUser(req.body);
        // const user = await UserRepository.create(req.body);
        res.send(null);
    }
}

export default UserController