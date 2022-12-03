import { Component, OnInit } from '@angular/core';
import { User } from '../../entity/user/user.model';
import { Post } from '../../entity/post/post.model';
import { UserService } from '../../entity/user/user.service';
import { PostService } from '../../entity/post/post.service';
import { Company } from '../../entity/company/company.model';
import { CompanyService } from '../../entity/company/company.service';

@Component({
  selector: 'dreams-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  companies: Company[] = [];

  constructor(private userService: UserService, private postService: PostService, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.updatedEntities();
  }

  updatedEntities(): void {
    this.companies = this.companyService.getCompanies();
    this.users = this.userService.getAllUsers();
    this.posts = this.postService.getAllPosts();
    console.log(this.posts);
  }

  deletePost(id: number){
    this.postService.deletePost(id);
    this.updatedEntities();
  }

  deleteUser(id: number){
    console.log("deleteUser "+ id);
    this.userService.deleteUser(id);
    this.updatedEntities();
  }
}
