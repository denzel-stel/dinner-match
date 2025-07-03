import { User } from "dinner-match-database/models";
import { AuthSession } from "dinner-match-database/models";

export type SessionValidationResult =
	| { session: AuthSession; user: User }
	| { session: null; user: null };
