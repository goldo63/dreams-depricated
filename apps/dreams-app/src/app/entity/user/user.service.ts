import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    users: User[] = [
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
    return this.users;
  }

  createUser(newUser: User): void {
    this.users.push(newUser);
  }

  updateUser(updatedUser: User) {
      console.log("Updating user " + updatedUser.firstName);
  
      const updatedUsers = this.users.filter(
          (user) => user.id !== updatedUser.id
      );
      updatedUsers.push(updatedUser);
      this.users = updatedUsers;
      
      console.log(this.users);
  }

  deleteUser(id: number){
    console.log("Updating user by id " + id);
    this.users.splice(id, 1);
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
