export class UserList {
  id = ''
  name = ''
  rocket = ''
}

export class User extends UserList {
  type = ''
  dry_mass_kg = 0
  dry_mass_lb = 0
  description = ''
  crew_capacity = 0
  active = true
}
export interface UserListResponse {
  users: UserList[];
}
export interface UserListRequest {
  nameUser: string;
}
