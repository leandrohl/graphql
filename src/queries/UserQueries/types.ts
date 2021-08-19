export class User {
  id = ''
  name = ''
  twitter = ''
}

export interface UserListResponse {
  users: User[];
}
export interface UserNameRequest {
  nameUser: string;
}
