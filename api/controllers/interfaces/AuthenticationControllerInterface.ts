import { Request, Response } from "express";
import { SignInRequest } from "../../types/requests/SignInRequest";
import SignUpRequest from "../../types/requests/SignUpRequest";

interface AuthenticationControllerInterface {
    signIn: (req: SignInRequest, res: Response) => Promise<void>;
    signUp: (req: SignUpRequest, res: Response) => Promise<void>;
    signOut: (req: Request, res: Response) => Promise<void>;
};

export default AuthenticationControllerInterface;