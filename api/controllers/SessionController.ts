import SessionRepository from "../repositories/SessionRepository";
import UserRepository from "../repositories/UserRepository";
import { Request, Response } from "express";

class SessionController {
    async getForUser(req: Request, res: Response): Promise<void> {
        const user = await UserRepository.getById(Number(req.params.userId));
        res.send(user);
    }

    async joinSession(req: Request, res: Response): Promise<void> {
        const id = req.params.userId;
        const numberId = Number(id);
        const sessionId = req.params.sessionId;
        const user = await UserRepository.getById(numberId);
        if (user.id === undefined) {
            throw new Error("User not found");
        }
        await SessionRepository.joinSession(sessionId, user.id);
    }
}

export default new SessionController();