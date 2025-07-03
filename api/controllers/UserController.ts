import UserRepository from "../repositories/UserRepository";
import { Request, Response } from "express";

class UserController {
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
        console.log("body" + JSON.stringify(req.body))
        res.send(null);
        // const user = await UserRepository.create(req.body);
        // res.send(user);
    }
}

export default new UserController();