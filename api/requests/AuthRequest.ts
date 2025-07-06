import { Request } from 'express';
import { AuthSession, User } from 'database/models/index.js';

export interface AuthRequest extends Request {
    user?: User; // Add the user object to the AuthRequest interface
    session?: AuthSession; // Add the session object to the AuthRequest interface
}