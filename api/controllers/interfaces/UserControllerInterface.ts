import { Request, Response } from "express";

interface UserControllerInterface {
    getUserByStytch(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
}

export default UserControllerInterface;