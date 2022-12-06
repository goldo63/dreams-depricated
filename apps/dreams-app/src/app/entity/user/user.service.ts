import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    users: User[] = [
    new User(0, 'First', 'User', 'test@test.nl'),
    new User(1, 'Second', 'User', 'test@test.nl'),
    new User(2, 'Third', 'User', 'test@test.nl'),
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
    console.log("Deleting user by id " + id);
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id === id){
        console.log(this.users.splice(i, 1).length + " users deleted");
      }
    }
    console.log("User by id " + id + " not found");
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
