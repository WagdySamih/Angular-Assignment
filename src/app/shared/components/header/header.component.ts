import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '@app/core/services';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchValue = '';
  isDashboard = false;
  isUserDetail = false;
  private routeSubscription!: Subscription;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleNavigationEvent(event);
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  handleNavigationEvent(event: NavigationEnd) {
    const url = event.urlAfterRedirects;
    this.isUserDetail = url.startsWith('/dashboard/user/');
    this.isDashboard = url === '/dashboard' && !this.isUserDetail;
  }

  createUser() {
    this.userService.addUser().subscribe({
      next: () => console.log('Create User Success'),
      error: () => console.log('Error while creating user'),
    });
  }

  searchUsers() {
    this.userService.searchUsersByName(this.searchValue);
  }
}
