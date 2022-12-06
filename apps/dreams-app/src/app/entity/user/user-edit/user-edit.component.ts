/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { User, UserRole } from '../user.model';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'dreams-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  entityId: number | null | undefined;
  entityExists: boolean = false;
  entity: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.entityId = Number(params.get('id'));

      if(params.get('id')){
        this.entityExists = true;
        this.entity = this.userService.getUserById(this.entityId);
      } else {
        this.entityExists = false;
        this.entity = new User(0, 'null', 'null', 'null');
      }
    })
  }

  onSubmit(){
    console.log("Submitting the post form");
    if (this.entityExists) {
      // Update bestaande entry in arraylist
      this.userService.updateUser(this.entity!);
      this.router.navigate([".."]);
  } else {
      // Create new entry
      this.userService.createUser(this.entity!);
      this.router.navigate([".."]);
  }
  }
}
