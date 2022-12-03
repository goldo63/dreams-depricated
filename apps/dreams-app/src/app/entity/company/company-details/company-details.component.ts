import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../post/post.model';
import { PostService } from '../../post/post.service';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'dreams-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {

  company: Company;
  posts: Post[] = [];
  entityId = -1;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private postService: PostService
    ) {
    this.route.paramMap.subscribe(params => {
      this.entityId = Number(params.get('id'));
    });
    this.company = this.companyService.getCompaniesByCompanyId(this.entityId);
    this.posts = this.postService.getPostsByUserId(this.company.id);
  }

  ngOnInit(): void {
    console.log(this.company);
  }
}

