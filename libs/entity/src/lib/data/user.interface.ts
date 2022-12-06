import { Id } from './id.type'
import { Review } from './review.interface'
import { IEntity } from '../base.entity/i.entity'

export interface UserIdentity {
    id: Id
    userName: string
}

export interface UserInfo extends UserIdentity{
  firstName: string;
  lastName: string;
  emailAdress: string;

  phonenumber?: string;
  registrationDate: Date;

  friends: User[];
}

export type User = UserInfo
