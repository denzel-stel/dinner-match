import SessionRepository from "database/repositories/SessionRepository.js";
import UserRepository from "database/repositories/UserRepository.js";
import { Request, Response } from "express";
import {injectable, inject} from "inversify";
import { Contracts } from "../../containers/contracts.js";
import SessionControllerInterface from "./interfaces/SessionControllerInterface.js";
import { AuthRequest } from "#api/requests/AuthRequest.js";
@injectable()
class SessionController implements SessionControllerInterface {
    constructor(
        @inject(Contracts.SessionRepository) private sessionRepository: SessionRepository,
        @inject(Contracts.UserRepository) private userRepository: UserRepository 
    ) {}
    
    getSession: (req: AuthRequest, res: Response) => Promise<void>;
    createSession: (req: AuthRequest, res: Response) => Promise<void>;
    deleteSession: (req: AuthRequest, res: Response) => Promise<void>;
    updateSession: (req: AuthRequest, res: Response) => Promise<void>;
    leaveSession: (req: AuthRequest, res: Response) => Promise<void>;
    pickSession: (req: AuthRequest, res: Response) => Promise<void>;

    async getForUser(req: Request, res: Response): Promise<void> {
        const user = await this.userRepository.getById(Number(req.params.userId));
        res.send(user);
    }
    
    async joinSession(req: Request, res: Response): Promise<void> {
        const id = req.params.userId;
        const numberId = Number(id);
        const sessionId = Number(req.params.sessionId);
        const user = await this.userRepository.getById(numberId);
        if (user.id === undefined) {
            throw new Error("User not found");
        }
        await this.sessionRepository.joinSession(sessionId, user.id);
    }
}

export default SessionController;