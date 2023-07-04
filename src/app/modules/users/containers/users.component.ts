import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@core/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setIsCreateEnabled(true);
    this.headerService.setIsSearchEnabled(true);
    this.headerService.setIsSaveEnabled(false);
  }
}
