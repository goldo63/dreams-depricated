/* eslint-disable @typescript-eslint/no-inferrable-types */
import {User} from '../user/user.model'
  
export class Company {
    id: number = 0;
    organisationcode?: string = '' ;
    phonenumber?: string;
    name: string = '';
    verified: boolean = false
    registrationDate: Date;
    owner: User;
    users: User[] = [];

  
    constructor(id: number, owner: User ,organisationcode: string, name: string, verified: boolean = false) {
      this.id = id;
      this.organisationcode = organisationcode;
      this.name = name;
      this.verified = verified;
      this.registrationDate = new Date();
      this.owner = owner;
    }

    isUser(): boolean {
        return false;
    }
}
  