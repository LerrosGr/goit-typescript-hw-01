export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type FullRole = Record<UserRole, string>;

const RoleDescription: FullRole = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
