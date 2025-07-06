
import { groupsTable, groupMemberTable } from "database/tables/group.js";
import { InferInsertModel } from "drizzle-orm";

export default interface GroupRepositoryInterface {
    createGroup(groupData: InferInsertModel<typeof groupsTable>, userId: number): Promise<typeof groupsTable.$inferSelect>;
    joinGroup(groupId: number, userId: number): Promise<typeof groupMemberTable.$inferSelect>;
    getGroupById(groupId: number): Promise<typeof groupsTable.$inferSelect | undefined>;
    getGroupMembers(groupId: number): Promise<typeof groupMemberTable.$inferSelect[]>;
    updateGroup(groupId: number, title: string): Promise<typeof groupsTable.$inferSelect | undefined>;
    leaveGroup(groupId: number, userId: number): Promise<void>;
    isUserInGroup(groupId: number, userId: number): Promise<boolean>;
}