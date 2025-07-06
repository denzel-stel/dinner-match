import { groupMemberTable, groupsTable } from "#database/tables/group.js";

 type NewGroup = typeof  groupsTable.$inferInsert;
 type Group = typeof groupsTable.$inferSelect;

 type NewGroupMember = typeof groupMemberTable.$inferInsert;
 type GroupMember = typeof groupMemberTable.$inferSelect;
 export {
    NewGroup, Group, NewGroupMember, GroupMember
 }