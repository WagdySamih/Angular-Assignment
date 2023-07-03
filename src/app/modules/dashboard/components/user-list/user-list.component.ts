import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services';
import { User } from '@core/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => (this.users = users),
      error: (error) => console.log('error while getting users: ', error),
    });
  }
}
