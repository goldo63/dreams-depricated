import { Component, OnInit } from '@angular/core';
import { User } from '../../entity/user/user.model';
import { Post } from '../../entity/post/post.model';
import { UserService } from '../../entity/user/user.service';
import { PostService } from '../../entity/post/post.service';

@Component({
  selector: 'dreams-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];

  constructor(private userService: UserService, private postService: PostService) {}

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
    this.posts = this.postService.getAllPosts();
  }
}
