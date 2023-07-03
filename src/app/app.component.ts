import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vicoland Assignment';
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.addMultipleUsers().subscribe({
      next: (users) => console.log('Users added:', users),
      error: (error) => console.error('Error adding users:', error),
    });
  }
}
