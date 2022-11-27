import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    static users: User[] = [
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

  static createUser(newUser: User): void {
    this.users.push(newUser);
  }

  static updateUser(updatedUser: User) {
      console.log("Updating user " + updatedUser.firstName);
  
      const updatedUsers = this.users.filter(
          (user) => user.id !== updatedUser.id
      );
      updatedUsers.push(updatedUser);
      this.users = updatedUsers;
      
      console.log(this.users);
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

  

  
}
