import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { User } from '../../../user/user.model';
import { Company } from '../../../company/company.model';

@Component({
  selector: 'dreams-post-overview-item',
  templateUrl: './post-overview-item.component.html',
  styleUrls: ['./post-overview-item.component.css'],
})
export class PostOverviewItemComponent implements OnInit {
  @Input()
  post!: Post;

  user: User;
  company: Company;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    this.user = new User(0, 'null', 'null', 'null');
    this.company = new Company('8979679', 'null', false);
  }

  isPostPosterAUser(): boolean {
    return (this.post.user.isUser());
  }

  ngOnInit(): void {
    if(this.isPostPosterAUser()){
      this.user = this.post.user as User;
    } else{
      this.company = this.post.user as Company;
    }
    console.log("Post by id " + this.post.id + " Loaded and is a user equals " + this.isPostPosterAUser());
  }
}

