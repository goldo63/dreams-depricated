import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, ViewState } from './post.model';
import { UserService } from '../user/user.service';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.model';

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
      user: this.userService.getUserById(0),
      viewstate: ViewState.public,
      img: null
    },
    {
        id: 1,
        titel: 'Online marketeer',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        user: this.userService.getUserById(1),
        viewstate: ViewState.public,
        img: null
    },
    {
        id: 2,
        titel: 'honden uitlater',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        user: this.companyService.getCompaniesByCompanyId(0),
        viewstate: ViewState.hidden,
        img: null
    },
  ];

  constructor(private userService: UserService, private companyService: CompanyService) {
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

  getPostsByUserId(id: number): Post[] {
    return this.posts.filter(post => post.user.id == id);
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
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i].id === id){
        console.log(this.posts.splice(i, 1).length + " posts deleted");
      }
    }
    console.log("Posts by id " + id + " not found");
  }
}
