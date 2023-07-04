import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/core/models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private router: Router) {}

  navigateToEditPage() {
    this.router.navigate(['/dashboard/users/', this.user._id]);
  }
}
