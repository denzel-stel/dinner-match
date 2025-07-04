import UserService from "#services/implementations/UserService.js";
import { Request, Response } from "express";

interface UserControllerInterface {
    UserService: UserService; // Replace 'any' with the actual type of UserService
    getUserByStytch(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
}

export default UserControllerInterface;