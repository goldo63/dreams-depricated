import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'dreams-post-overview-item',
  templateUrl: './post-overview-item.component.html',
  styleUrls: ['./post-overview-item.component.css'],
})
export class PostOverviewItemComponent implements OnInit {
  post: Post;

  constructor(post: Post) {
    this.post = post;
  }

  ngOnInit(): void {
    console.log("Post by id " + this.post.id + " Loaded");
  }
}
