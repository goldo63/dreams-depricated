import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';
import { EntityService } from '../entity/entity.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityService<User> {
    users: User[] = [
    new User(0, 'First', 'User', 'test@test.nl'),
    new User(1, 'Second', 'User', 'test@test.nl'),
    new User(2, 'Third', 'User', 'test@test.nl'),
  ];

  constructor() {
    super(http, config.getApiEndpoint(), 'user');
    console.log('UserService ' + config.getApiEndpoint());
  }
}
