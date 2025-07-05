import { Request, Response } from "express";

interface UserControllerInterface {
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
}

export default UserControllerInterface;