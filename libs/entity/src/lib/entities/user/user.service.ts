import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityService } from '../base.entity/entity.service';
import { UserInfo } from '../data/user.interface';
import { ConfigService } from '@dreams/utility';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityService<UserInfo> {
  constructor(config: ConfigService, http: HttpClient) {
    super(http, config.getApiEndpoint(), 'user');
    console.log('UserService ' + config.getApiEndpoint());
  }
}
