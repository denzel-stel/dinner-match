import { Sign } from "crypto";
import { Request } from "express";

interface SignUpBody {
    email: string;
    password: string;
    username: string;
    firstName: string|null;
    lastName: string|null;
    phoneNumber: string|null;
};

export default interface SignUpRequest extends Request{
    body: SignUpBody,
}