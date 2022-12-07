import { Id } from '../../data/id.type'

export interface UserIdentity {
    id: Id
    userName: string
}

export interface UserLogin {
  userName: string;
  password: string;
}

export interface UserInfo extends UserIdentity{
  token: UserInfo | undefined;
  firstName: string;
  lastName: string;
  emailAdress: string;

  phonenumber?: string;
  registrationDate: Date;

  friends: User[];
}

export type User = UserInfo
