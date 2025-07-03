import { Request } from "express";

interface SignInBody {
    email: string;
    password: string;
}
export interface SignInRequest extends Request {
  body: SignInBody,
}