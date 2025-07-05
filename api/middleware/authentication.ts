import { NextFunction, Request, Response } from "express";
import { SessionValidationResult } from "../types/SessionValidationResult";
import { AuthRequest } from "../requests/AuthRequest";
import container from "#services/containers/container.js";
import AuthSessionService from "#services/interfaces/AuthSessionService.js";


export default  async function checkAuthenticated(req: AuthRequest, res: Response, next:NextFunction)  {
    try {
        if(!("authorization" in req.headers)) {
            throw new Error("User unauthenticated.")
        }
        const token = req.headers.session_token as string;
        
        const authSessionService = container.get<AuthSessionService>("AuthSessionService");
        const result: SessionValidationResult = await authSessionService.validateSessionToken(token);
        
        if (result.session === null) {
            throw new Error("User unauthenticated.")
        }
        req.user = result.user;
        req.session = result.session;
        next();
    }
    catch (e) {
        console.log("error", e);
        res.status(401).send("User unauthenticated.")
    }
 
}