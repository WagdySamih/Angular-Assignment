import { Component, OnInit } from '@angular/core';
import { LoggerService, UserService } from '@core/services';
import { User } from '@core/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => (this.users = users),
      error: (error) => this.logger.error(error),
    });
  }
}
