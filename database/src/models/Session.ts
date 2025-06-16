import { sessionTable } from "../tables/session";

export type Session = typeof sessionTable.$inferSelect;

export type NewSession = typeof sessionTable.$inferInsert;