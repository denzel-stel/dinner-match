// #api/database/repositories/GroupRepository.ts

import db from "database/database.js"; // Zorg ervoor dat dit pad naar je Drizzle DB-instantie correct is
import { groupsTable, groupMemberTable } from "database/tables/group.js";
import { eq, and } from "drizzle-orm";
import { injectable } from "inversify";
import GroupRepositoryInterface from "database/repositories/interfaces/GroupRepositoryInterface.js";
import { InferInsertModel } from "drizzle-orm";
import { GroupMember, Group, NewGroup, NewGroupMember } from "database/models/Group.js";
@injectable()
class GroupRepository implements GroupRepositoryInterface {
    async createGroup(groupData: NewGroup, userId: number): Promise<Group> {
        const [newGroup] = await db.insert(groupsTable).values(groupData).returning();
        if (!newGroup) {
            throw new Error("Groep niet aangemaakt.");
        }
        await db.insert(groupMemberTable).values({ group_id: newGroup.id, user_id: userId });
        return newGroup;
    }

    async joinGroup(groupId: number, userId: number): Promise<GroupMember> {
        const [groupMember] = await db.insert(groupMemberTable).values({ group_id: groupId, user_id: userId }).returning();
        if (!groupMember) {
            throw new Error("Kan gebruiker niet toevoegen aan groep.");
        }
        return groupMember;
    }

    async getGroupById(groupId: number): Promise<Group | undefined> {
        const group = await db.select().from(groupsTable).where(eq(groupsTable.id, groupId)).limit(1);
        return group[0];
    }

    async getGroupMembers(groupId: number): Promise<GroupMember[]> {
        return await db.select().from(groupMemberTable).where(eq(groupMemberTable.group_id, groupId));
    }

    async updateGroup(groupId: number, title: string): Promise<Group | undefined> {
        // TODO: Update updated_at;
        const [updatedGroup] = await db.update(groupsTable).set({ title }).where(eq(groupsTable.id, groupId)).returning();
        return updatedGroup;
    }

    async leaveGroup(groupId: number, userId: number): Promise<void> {
        await db.delete(groupMemberTable).where(and(eq(groupMemberTable.group_id, groupId), eq(groupMemberTable.user_id, userId)));
    }

    async isUserInGroup(groupId: number, userId: number): Promise<boolean> {
        const member = await db.select()
            .from(groupMemberTable)
            .where(and(eq(groupMemberTable.group_id, groupId), eq(groupMemberTable.user_id, userId)))
            .limit(1);
        return member.length > 0;
    }
}

export default GroupRepository;