import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@core/services';
import { User } from '@core/models';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss'],
})
export class UsersManageComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('userId');
      if (!userId) return;
      // TODO: Handle User not found
      this.userService.getUserById(userId).subscribe({
        next: (user) => (this.user = user),
        complete: () => console.log(this.user),
      });
    });
  }

  navigateBack() {
    console.log('');
  }
}
