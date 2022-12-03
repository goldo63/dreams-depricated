import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../company/company.model';
import { User } from '../../user/user.model';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'dreams-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  otherPosts: Post[] = [];
  company: Company;
  user: User;
  entityId!: number;

  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    ) {

    this.route.paramMap.subscribe(params => {
      this.entityId = Number(params.get('id'));
    });
    this.post = postService.getPostById(this.entityId);

    this.user = new User(-1, '', '', '');
    this.company = new Company(-1, new User(-1, '', '', ''), '', '', false);

    this.otherPosts = postService.getPostsByUserId(this.post.user.id);
  }

  ngOnInit(): void {
    if(this.post.user.isUser()){
      this.user = this.post.user as User;
    } else{
      this.company = this.post.user as Company;
    }
  }

  isPostPosterAUser(){
    return this.post.user.isUser();
  }
}
