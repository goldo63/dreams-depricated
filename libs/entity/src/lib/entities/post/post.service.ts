import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityService } from '../../base.entity/entity.service';
import { PostInfo } from '@dreams/data';
import { ConfigService } from '@dreams/utility';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityService<PostInfo> {
  constructor(config: ConfigService, http: HttpClient) {
    super(http, config.getApiEndpoint(), 'post');
    console.log('PostService ' + config.getApiEndpoint());
  }
}