import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    static readonly users: User[] = [
    {
      id: 0,
      firstName: 'Eerste',
      lastName: 'User',
      emailAdress: 'usereen@host.com',
      role: UserRole.admin,
    },
    {
      id: 1,
      firstName: 'Tweede',
      lastName: 'User',
      emailAdress: 'usertwee@host.com',
      role: UserRole.guest,
    },
    {
      id: 2,
      firstName: 'Derde',
      lastName: 'User',
      emailAdress: 'userdrie@host.com',
      role: UserRole.editor,
    },
  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  get getUsers(): User[] {
    return UserService.users;
  }

  static staticgetUserById(id: number): User {
    console.log('getUsers aangeroepen');
    for (const user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
    throw new Error('No user found by id ' + id);
  }

  getAllUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.getUsers;
  }

  getUserById(id: number): User {
    console.log('getUsers aangeroepen');
    for (const user of this.getUsers) {
      if (user.id === id) {
        return user;
      }
    }
    throw new Error('No user found by id ' + id);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  static createUser(firstName: string, lastName: string, email: string){
    this.users.push(new User(firstName, lastName, email));
  }
}
