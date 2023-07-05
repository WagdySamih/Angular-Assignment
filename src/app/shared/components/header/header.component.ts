import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/core/models';
import { UserService, HeaderService, LoggerService } from '@core/services';
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
    private router: Router,
    private userService: UserService,
    private headerService: HeaderService,
    private logger: LoggerService
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
      next: () => this.logger.success('User is created successfully'),
      error: () => this.logger.error('Error while creating user: '),
    });
  }

  searchUsers() {
    this.userService.searchUsersByName(this.searchValue).subscribe({
      next: () => this.logger.info('Search done successfully'),
      error: () => this.logger.error('Error while search users'),
    });
  }

  saveUser() {
    if (!this.editedUser) return;
    this.userService.editUser(this.editedUser).subscribe({
      next: () => {
        this.logger.success('User is saved successfully');
        this.router.navigate(['/dashboard/users']);
      },
      error: () => this.logger.error('Error while saving user'),
    });
  }
}
