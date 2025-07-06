import { Response } from "express";
import { AuthRequest } from "../../requests/AuthRequest.js";

interface SessionControllerInterface {
    getSession: (req: AuthRequest, res: Response) => Promise<void>;
    createSession: (req: AuthRequest, res: Response) => Promise<void>;
    deleteSession: (req: AuthRequest, res: Response) => Promise<void>;
    updateSession: (req: AuthRequest, res: Response) => Promise<void>;
    joinSession: (req: AuthRequest, res: Response) => Promise<void>;
    leaveSession: (req: AuthRequest, res: Response) => Promise<void>;
    pickSession: (req: AuthRequest, res: Response) => Promise<void>;
}

export default SessionControllerInterface;