/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Post, ViewState } from '../post.model';
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from '../post.service';
import { User, UserRole } from '../../user/user.model';

@Component({
  selector: 'dreams-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  entityId: number | null | undefined;
  entityExists: boolean = false;
  entity: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.entityId = Number(params.get('id'));

      if(params.get('id')){
        this.entityExists = true;
        this.entity = {
          ...this.postService.getPostById(this.entityId),
      };

      } else {
        this.entityExists = false;
        this.entity = {
          id: undefined,
          titel: '',
          content: ``,
          user: new User(0, 'null', 'null' , 'null'),
          viewstate: ViewState.hidden,
          img: null
        };
      }
    })
  }

  onSubmit(){
    console.log("Submitting the post form");
    if (this.entityExists) {
      // Update bestaande entry in arraylist
      this.postService.updatePost(this.entity!);
      this.router.navigate([".."]);
  } else {
      // Create new entry
      this.postService.createPost(this.entity!);
      this.router.navigate([".."]);
  }
  }
}
