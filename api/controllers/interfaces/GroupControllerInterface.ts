// #api/controllers/interfaces/GroupControllerInterface.ts

import { Request, Response } from "express";
import { AuthRequest } from "#api/requests/AuthRequest.js";

export default interface GroupControllerInterface {
    createGroup: (req: AuthRequest, res: Response) => Promise<void>;
    joinGroup: (req: AuthRequest, res: Response) => Promise<void>;
    getGroup: (req: AuthRequest, res: Response) => Promise<void>;
    updateGroup: (req: AuthRequest, res: Response) => Promise<void>;
    leaveGroup: (req: AuthRequest, res: Response) => Promise<void>;
    startSessionFromGroup: (req: AuthRequest, res: Response) => Promise<void>;
}