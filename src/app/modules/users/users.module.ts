import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { UsersComponent } from './containers/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserCardComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  exports: [UsersComponent],
})
export class UsersModule {}
