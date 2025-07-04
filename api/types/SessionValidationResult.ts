import { User } from "#database/models";
import { AuthSession } from "#database/models";

export type SessionValidationResult =
	| { session: AuthSession; user: User }
	| { session: null; user: null };
