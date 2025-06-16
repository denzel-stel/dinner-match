import { InferSelectModel } from "drizzle-orm";
import { authSessionsTable } from "../tables/auth_sessions";

export type AuthSession = InferSelectModel<typeof authSessionsTable>;
