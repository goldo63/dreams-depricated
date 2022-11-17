import { Component, OnInit } from '@angular/core';
import { User } from '../../entity/user/user.model';
import { UserService } from '../../entity/user/user.service';

@Component({
  selector: 'dreams-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
