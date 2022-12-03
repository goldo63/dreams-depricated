import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../company.model';

@Component({
  selector: 'dreams-company-overview-item',
  templateUrl: './company-overview-item.component.html',
  styleUrls: ['./company-overview-item.component.css'],
})
export class CompanyOverviewItemComponent implements OnInit {
  @Input()
  company!: Company;

  constructor() {
    console.log("constructor called")
  }

  ngOnInit(): void {
    console.log("Loaded following company in item: "+ this.company);
  }
}
