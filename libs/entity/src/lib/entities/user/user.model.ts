/* eslint-disable @typescript-eslint/no-inferrable-types */
// import {Post, ViewState} from '../../../../../apps/dreams-app/src/app/entity/post/post.model'

export class User {
  id: number = 0;
  username?: string = '' ;
  firstName: string;
  lastName: string;
  emailAdress: string;

  phonenumber?: string = '';
  registrationDate: Date = new Date();

  friends: User[] = [];

  constructor(id = 0, firstName = '', lastName = '', emailAdress = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAdress = emailAdress;
  }

  isUser(): boolean {
    return true;
  }
}
  