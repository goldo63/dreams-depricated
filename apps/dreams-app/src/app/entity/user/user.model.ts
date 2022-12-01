/* eslint-disable @typescript-eslint/no-inferrable-types */
import {Post, ViewState} from '../post/post.model'

export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  export class User {
    id: number = 0;
    username?: string = '' ;
    firstName: string;
    lastName: string;
    emailAdress: string;

    phonenumber?: string = '';
    registrationDate: Date = new Date();

    friends: User[] = [];
    role: UserRole = UserRole.guest;
  
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
  