import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, ViewState } from './post.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
    posts: Post[] = [
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
    console.log('getAllPosts aangeroepen');
    return this.posts;
  }

  getPostById(id: number): Post {
    console.log('getPostById aangeroepen');
    for (const post of this.posts) {
      if (post.id === id) {
        return post;
      }
    }
    throw new Error('No post found by id ' + id);
  }

  createPost(post: Post) {
    this.posts.push(post);
  }
  updatePost(newPost: Post) {
    console.log("Updating post " + newPost.titel);
  
      const updatedPosts = this.posts.filter(
          (post) => post.id !== newPost.id
      );
      updatedPosts.push(newPost);
      this.posts = updatedPosts;
      
      console.log(this.posts);
  }

  deletePost(id: number){
    console.log("Deleting post by id" + id);
    this.posts.splice(id, 1);
  }
}
