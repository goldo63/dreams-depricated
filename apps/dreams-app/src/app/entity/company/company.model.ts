/* eslint-disable @typescript-eslint/no-inferrable-types */
import {User} from '../user/user.model'
  
export class Company {
    id: number = 0;
    organisationcode?: string = '' ;
    phonenumber?: string;
    name: string = '';
    verified: boolean = false
    registrationDate: Date;
    users: User[] = [];

  
    constructor(organisationcode: string, name: string, verified: boolean = false) {
      this.organisationcode = organisationcode;
      this.name = name;
      this.verified = verified;
      this.registrationDate = new Date();
    }

    isUser(): boolean {
        return false;
    }
}
  