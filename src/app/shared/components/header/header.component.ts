import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models';
import { UserService, HeaderService } from '@core/services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchValue = '';
  isSearchEnabled = false;
  isCreateEnabled = false;
  isSaveEnabled = false;
  editedUser: User | null = null;

  constructor(
    private userService: UserService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.headerService.isSearchEnabled$.subscribe((value) => {
      this.isSearchEnabled = value;
    });

    this.headerService.isCreateEnabled$.subscribe((value) => {
      this.isCreateEnabled = value;
    });

    this.headerService.isSaveEnabled$.subscribe((value) => {
      this.isSaveEnabled = value;
    });

    this.userService.editedUser$.subscribe((value) => {
      this.editedUser = value;
    });
  }

  createUser() {
    this.userService.createUser().subscribe({
      next: () => console.log('Create User Success'),
      error: () => console.log('Error while creating user'),
    });
  }

  searchUsers() {
    this.userService.searchUsersByName(this.searchValue);
  }

  saveUser() {
    if (!this.editedUser) return;
    this.userService.editUser(this.editedUser);
  }
}
