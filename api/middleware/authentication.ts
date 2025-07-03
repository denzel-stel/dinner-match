import { NextFunction, Request, Response } from "express";
import AuthenticationSessionService from "../services/AuthenticationSessionService";
import { SessionValidationResult } from "../types/SessionValidationResult";
import { AuthRequest } from "../requests/AuthRequest";


export default  async function checkAuthenticated(req: AuthRequest, res: Response, next:NextFunction)  {
    try {
        if(!("authorization" in req.headers)) {
            throw new Error("User unauthenticated.")
        }
        const token = req.headers.session_token as string;
        const result: SessionValidationResult = await AuthenticationSessionService.validateSessionToken(token);
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