import { User } from "database/models/index.js";
import { AuthSession } from "database/models/index.js";

export type SessionValidationResult =
	| { session: AuthSession; user: User }
	| { session: null; user: null };
