import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'dreams-post-overview-item',
  templateUrl: './post-overview-item.component.html',
  styleUrls: ['./post-overview-item.component.css'],
})
export class PostOverviewItemComponent implements OnInit {
  @Input()
  post!: Post;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }

  ngOnInit(): void {
    console.log("Post by id " + this.post.id + " Loaded");
  }
}
