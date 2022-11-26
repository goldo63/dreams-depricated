import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, ViewState } from './post.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly Posts: Post[] = [
    {
      id: 0,
      titel: 'Buiten-bootcamp',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
      user: UserService.staticgetUserById(0),
      viewstate: ViewState.public,
      img: null
    },
    {
        id: 1,
        titel: 'Online marketeer',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        user: UserService.staticgetUserById(1),
        viewstate: ViewState.public,
        img: null
    },
    {
        id: 2,
        titel: 'honden uitlater',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        user: UserService.staticgetUserById(2),
        viewstate: ViewState.hidden,
        img: null
    },
  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  getAllPosts(): Post[] {
    console.log('getUsers aangeroepen');
    return this.Posts;
  }
}
