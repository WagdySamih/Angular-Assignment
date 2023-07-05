import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService, UserService } from '@core/services';
import { User } from '@core/models';
import { HeaderService } from '@core/services';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss'],
})
export class UsersManageComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private headerService: HeaderService,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.headerService.setIsCreateEnabled(false);
    this.headerService.setIsSearchEnabled(false);
    // Default is false tell we touch or change something in the form
    this.headerService.setIsSaveEnabled(false);

    this.route.paramMap.subscribe((params) => {
      const userId = params.get('userId');
      if (!userId) return;
      // TODO: Handle User not found
      this.userService.getUserById(userId).subscribe({
        next: (user) => (this.user = user),
        error: (error) => this.logger.error(error),
      });
    });
  }
}
